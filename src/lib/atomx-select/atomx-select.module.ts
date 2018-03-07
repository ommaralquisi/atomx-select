import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtomxSelectComponent} from './atomx-select.component';
import {DataService} from './data.service';
import {HighlightPipe} from './highlight.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [AtomxSelectComponent, HighlightPipe],
  exports: [AtomxSelectComponent]
})
export class AtomxSelectModule {
}
