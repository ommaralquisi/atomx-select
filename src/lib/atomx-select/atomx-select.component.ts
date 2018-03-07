import {Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
import {escapeRegExp} from 'tslint/lib/utils';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {DataService} from './data.service';
import {HighlightPipe} from './highlight.pipe';

@Component({
  selector: 'atomx-select',
  templateUrl: './atomx-select.component.html',
  styleUrls: ['./atomx-select.component.scss']
})

export class AtomxSelectComponent implements OnInit, OnDestroy {
  @ViewChild('input') input: ElementRef;
  @Input() propertyName: string;
  @Input() staticList: boolean;
  @Input() popupOption: boolean;
  @Input() loading = false;
  @Input() dataService: DataService;
  @Input() fetch: boolean;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() pasteHandler: EventEmitter<string> = new EventEmitter<string>();
  @Output() clearButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() copyButton: EventEmitter<string> = new EventEmitter<string>();

  dom: Document;
  optionsOpened: boolean;
  selected: any; // items selected
  options: any; // list of items that could be selected
  optionItemActive;
  selectedItemActive;
  popup = false;

  private onSearch: (string) => void;
  private searchingObservable: Observable<any>;
  private searchSubscribe;

  private upArrowObservable: Observable<any>;
  private upArrowSubscribe;

  private downArrowObservable: Observable<any>;
  private downArrowSubscribe;

  private enterKeyObservable: Observable<any>;
  private enterKeySubscribe;

  private escapeKeyObservable: Observable<any>;
  private escapeKeySubscribe;

  private tabKeyObservable: Observable<any>;
  private tabKeySubscribe;

  private backspaceObservable: Observable<any>;
  private backSpaceSubscribe;

  clickDocumentLister = (() => {
    if (this.popup) {
      this.popup = false;
    }
  }).bind(this);


  constructor(private sanitizer: DomSanitizer, @Inject(DOCUMENT) dom: any, private element: ElementRef) {
    this.dom = dom;
    this.element = element;
  }

  ngOnInit() {
    this.onSearch = this.fetch ? this.onUserTyping : this.filterOnUserTyping;
    if (this.fetch && this.search.observers.length === 0) {
      // todo: better error description
      console.error('need event emitter search');
      throw new Error('need event emitter search');
    }
    this.dataService.items$.subscribe(item => {
      this.options = item;
      if (this.fetch) {
        this.options = this.getAvailableOptions();
        this.openOptionList();
      }
    });
    this.dataService.selected$.subscribe(selected => {
      if (this.selected === selected) {
        return;
      }
      this.selected = selected;
      this.options = this.getAvailableOptions();
    });


    this.optionsOpened = false;
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        document.addEventListener('click', this.closeOptionListClickHandler.bind(this));
      }, 0);
    }
    this.dom.addEventListener('click', this.closePopupMenuClickHandler.bind(this));
    this.attachObservers();
  }

  /**
   * close the option list menu
   */
  private closeOptionListClickHandler() {
    setTimeout(() => {
      this.optionsOpened = false;

    }, 1);
    this.optionsOpened = false;
    this.optionItemActive = null;
  }

  /**
   * close popup menu
   */
  private closePopupMenuClickHandler() {
    if (this.popup) {
      this.popup = false;
    }
  }

  private attachObservers() {
    this.searchingObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .map((event: any) => event.target.value)
      .debounceTime(200)
      .distinctUntilChanged();
    this.searchSubscribe = this.searchingObservable.subscribe(text => {
      this.onSearch(text);
    });

    this.upArrowObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .filter((event: KeyboardEvent) => event.keyCode === 38);
    this.upArrowSubscribe = this.upArrowObservable.subscribe(() => this.selectPrevious());

    this.downArrowObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .filter((event: KeyboardEvent) => event.keyCode === 40);
    this.downArrowSubscribe = this.downArrowObservable.subscribe(() => {
      // open the list options if the list is not open
      if (this.fetch && !this.optionsOpened) {
        return;
      }
      if (!this.optionsOpened) {
        this.openOptionList();
        // if the list is showing select he next item in the list
      } else {
        this.selectNext();
      }
    });

    this.enterKeyObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .filter((event: KeyboardEvent) => event.keyCode === 13);
    this.enterKeySubscribe = this.enterKeyObservable.subscribe(event => this.selectOnEnter(event));

    this.escapeKeyObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .filter((event: KeyboardEvent) => event.keyCode === 27);
    this.escapeKeySubscribe = this.escapeKeyObservable.subscribe(() => {
      if (this.optionsOpened) {
        this.optionsOpened = false;
      }
    });

    this.tabKeyObservable = Observable
      .fromEvent(this.input.nativeElement, 'keydown')
      .filter((event: KeyboardEvent) => event.keyCode === 9);
    this.tabKeySubscribe = this.tabKeyObservable.subscribe(event => this.selectOnEnter(event));

    this.backspaceObservable = Observable
      .fromEvent(this.input.nativeElement, 'keyup')
      .filter((event: KeyboardEvent) => event.keyCode === 8);
    this.backSpaceSubscribe = this.backspaceObservable.subscribe((event: KeyboardEvent) => {
      event.stopPropagation();
      if (this.selected.length > 0 && this.input.nativeElement.value === '') {
        if (this.selectedItemActive) {
          this.removeSelectedItem(this.selectedItemActive);
        } else {
          this.setSelectedAsActive(this.selected[this.selected.length - 1]);
        }
      }
    });
  }

  private filterOnUserTyping(searchString: string): void {
    if (searchString.length === 0) {
      return;
    }
    if (searchString.length >= 3) {
      const reqex = new RegExp(escapeRegExp(searchString), 'i');
      this.options = this.options.filter(option => reqex.test(option[this.propertyName]));
      this.openOptionList();
    } else {
      this.options = [... this.getAvailableOptions()];
    }
  }

  private onUserTyping(text: string): void {
    this.search.emit(text);
  }

  /**
   * open the option list
   * remove highlight item from the selected list
   * highlight the first item in in the options list
   */
  private openOptionList() {
    this.optionsOpened = true;
    this.selectedItemActive = null;
    if (this.options.length > 0) {
      this.optionItemActive = this.options[0];
    }
  }

  /**
   * return available option from the dataService
   */
  private getAvailableOptions() {
    let items = [], selected = [];
    this.dataService.items$.subscribe(i => items = i);
    this.dataService.selected$.subscribe(i => selected = i);
    return items.filter(item => {
      return !selected.find(x => x.id === item.id);
    });
  }

  /**
   * set item as Active in the selected list
   */
  private setSelectedAsActive(item): void {
    this.selectedItemActive = item;
  }


  /**
   * select the next item in the list of option and set it to be the active
   */
  private selectNext(): void {
    if (!this.isActiveItemIsLast()) {
      const nextItemIndex = this.options.indexOf(this.optionItemActive) + 1;
      this.optionItemActive = this.options[nextItemIndex];
      this.ensureActiveItemIsVisible();
    }
  }

  /**
   * select the previous item in the list of option and set it to be the active
   */
  private selectPrevious(): void {
    if (!this.isActiveItemIsFirst()) {
      const nextItemIndex = this.options.indexOf(this.optionItemActive) - 1;
      this.optionItemActive = this.options[nextItemIndex];
      this.ensureActiveItemIsVisible();
    }
  }

  /**
   * todo
   */
  private isActiveItemIsLast(): boolean {
    return this.options.length > 0 ? this.options[this.options.length - 1] === this.optionItemActive : true;
  }

  /**
   * todo
   *
   */
  private isActiveItemIsFirst(): boolean {
    return this.options.length > 0 ? this.options[0] === this.optionItemActive : true;
  }


  /**
   * add the item to the dataService selectedList
   */
  selectItem(value, e: Event): void {
    if (e) {
      e.stopPropagation();
    }
    this.selected.push(value);
    this.optionsOpened = false;
    this.optionItemActive = null;
    this.clearSearch();
    this.dataService.setSelected$(this.selected);
  }

  private selectOnEnter(event) {
    if (this.optionItemActive) {
      this.selectItem(this.optionItemActive, event);
    }
  }

  private clearSearch(): void {
    if (this.input.nativeElement.value !== '') {
      this.input.nativeElement.value = '';
    }
    this.options = [... this.getAvailableOptions()];
  }

  private ensureActiveItemIsVisible() {
    const container = this.element.nativeElement.querySelector('.ui-select-choices.dropdown-menu');
    const highlighted = this.element.nativeElement.querySelector('.ui-select-choices-row.active');

    const posY: number = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
    const height: number = container.offsetHeight;
    if (posY >= height) {
      container.scrollTop += (posY - height) + 30;
    } else if (posY < highlighted.clientHeight) {
      container.scrollTop -= ((highlighted.clientHeight - posY) + 30);
    }
  }

  onInputCLick() {
    if (!this.fetch) {
      this.openOptionList();
    }
  }

  /**
   * remove item from the selected list and update the dataService
   */
  removeSelectedItem(item) {
    this.selectedItemActive = null;
    this.selected.splice(this.selected.indexOf(item), 1);
    this.dataService.setSelected$(this.selected);
    this.selectedItemActive = null;
    this.options = [... this.getAvailableOptions()];
  }

  /**
   * return if the item is the current one highlighted in the selected list
   */
  isSelectedItemActive(item): boolean {
    return item === this.selectedItemActive;
  }

  /**
   * return if the item is the current one highlighted in the options list
   */
  isOptionItemActive(item): boolean {
    return this.optionItemActive === item;
  }

  /**
   * set item as Active in the option list
   */
  setOptionAsActive(item): void {
    this.optionItemActive = item;
  }

  stopProp(e: KeyboardEvent): void {
    e.stopPropagation();
  }

  onPaste(event) {
    let text = '';
    if (window['clipboardData'] && window['clipboardData'].getData) { // IE
      text = window['clipboardData'].getData('Text');
    } else {
      text = (event.originalEvent || event).clipboardData.getData('text/plain');
    }
    console.log(text);
    this.pasteHandler.emit(text);
    event.preventDefault();
    event.stopPropagation();
  }

  openPopup() {
    this.popup = !this.popup;
  }

  onClear() {
    this.popup = false;
    this.selected.forEach(select => {
      this.options.push(select);
    });
    this.selected = [];
    this.dataService.setSelected$(this.selected);
    this.clearButton.emit(true);
  }

  onCopy() {
    this.popup = false;
    const name = this.selected.map(select => {
      return select.name;
    });
    this.copyButton.emit(name.join(' ,'));
    // todo: add this copied item to the clip board
  }

  ngOnDestroy() {
    this.searchSubscribe.unsubscribe();
    this.downArrowSubscribe.unsubscribe();
    this.upArrowSubscribe.unsubscribe();
    this.enterKeySubscribe.unsubscribe();
    this.escapeKeySubscribe.unsubscribe();
    this.tabKeySubscribe.unsubscribe();
    this.backSpaceSubscribe.unsubscribe();
    this.dom.removeEventListener('click', this.clickDocumentLister);
  }


  protected getProperty(object) {
    return object[this.propertyName] + '-' + object.id;
  }

  sanitize(object): SafeHtml {
    const highlightedText = new HighlightPipe().transform(this.getProperty(object), this.input.nativeElement.value);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}

