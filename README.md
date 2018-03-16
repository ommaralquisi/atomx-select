
## Installation
* `npm install atomx-select --save`
* import  `AtomxSelectModule` into app module 
* the module exports `AtomxSelectComponent` and `DataService` class 
* make sure you have bootstrap 4 css added to your project


## Usage with static data 
add the the `AtomxSelectComponent` selector  to html like so 
```
<atomx-select propertyName="name" [popupOption]="true" [dataService]="names"></atomx-select>
```

* declare a property in the component class of type DataService like so `names: DataService;`
* add a propriety that contain a an array of item.
* add a property that contain an array of the selected items.
* In the component class instantiate a `DataService` object `this.names = new DataService();` inside the constructor function. 
* in the `ngOnInit` use the `setItems$` to set the items and `setSelected$` to the selected items 
* the dataService expose `selected$ ` as an observable that you can subscribe to to get the list of the selected item from the component  `this.names.selected$.subscribe(selected => console.log(selected))`

## Code example with static data
<pre> 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  names: DataService;
  item = [
    {id: 1, name: 'firstName'},
    {id: 2, name: 'secondName'},
    {id: 3, name: 'address'},
    {id: 4, name: 'street'},
    {id: 5, name: 'city'},
    {id: 6, name: 'zip code'},
    {id: 7, name: 'code'}
  ];
  selectedItem = [{id: 5, name: 'city'}, {id: 6, name: 'zip code'}];


  constructor(private http: HttpClient) {
    this.names = new DataService();
  }

  ngOnInit() {
    this.names.setItems$(this.item);
    this.names.setSelected$(this.selectedItem);
    this.names.selected$.subscribe(selected => {
      console.log(selected);
    });
  }
}
 </pre>
```
//app.component.html   
 <atomx-select propertyName="name" [popupOption]="true" [dataService]="names"></atomx-select>   
``` 

## Usage with dynamic data 
add the the `AtomxSelectComponent` selector  to html like so 
```
<atomx-select 
    propertyName="name" 
    [popupOption]="true" 
    [loading]="loading" 
    [fetch]="true" // this tell the atomx-select compontn that the data will be fetched externally eg via api 
    (search)="onSearch($event)"
    [dataService]="names">
</atomx-select>
```
* add `fetch` to the component input
* add `(search)` as an output event, which will fire up when searching and passing the search string to the attached event,
 the component won't filter the data, this will fall on to the consumer of the component to fetch the data,
 filter, etc
  ````
  onSearch(event) {
      console.log(event);
      if (event.length <= 3) {
        return;
      }
      this.loading = true;
      this.http.get(`api/users?name=${event}`).subscribe(result => {
        this.names.setItems$(result);
        this.loading = false;
      });
    }
  ````
  * pass the fetched data to `AtomxSelectComponent` via dataService like so `this.names.setItems$(data);`  


## API 
### properties 
* **propertyName**  _type: string_ the property name to be displayed 
* **popupOption**  _type:boolean_ whether to display the popup option *
* **dataService**     _type: DataService_ instant of DataService class that keep the data in sync between the consumer component and  `AtomxSelectComponent`
* **loading**  _type:boolean_ display loading indicator
* **fetch**       _type: boolean_ the component data is fetched api
* **copyProperty** _type: string_ the property to be copied using the copy button, if not specified, it will fall back to **propertyName**
### events
* **search**  fires when the user search(type) this option only work when the fetch property is set to true (when the data is fetch via api)
* **pasteHandler**  fires when the user past into the input field 
* **copyButton** fires when the copy button is clicked, it will copy the the selected item **propertyName** and return a string joined by ' ,'


\* popupOption display a popup menu that houses two buttons 'copy' to copy the selected item to the clipboard  and 'clear' to clear the list of selected items

## todo:
- [ ] testing 

