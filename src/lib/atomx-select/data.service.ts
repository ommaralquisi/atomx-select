import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class DataService {

  private itemSubject = new BehaviorSubject([]);
  private selectedSubject = new BehaviorSubject([]);

  items$: Observable<any[]> = this.itemSubject.asObservable();
  selected$: Observable<any[]> = this.selectedSubject.asObservable();

  setItems$(data) {
    this.itemSubject.next(data);
  }

  setSelected$(data) {
    this.selectedSubject.next(data);
  }

}
