
## installation
* `npm install atomx-select`
* import  `AtomxSelectModule` into app module 
* the module exports `AtomxSelectComponent` and `DataService` class 


## usage with static data 
add the the `AtomxSelectComponent` selector  to html like so 
```
<atomx-select propertyName="name" [popupOption]="true" [dataService]="names"></atomx-select>
```

* add a propriety `item` that contain a an array of item the `atomx-select` should display .
* add a property `selected` that contain an array of the selected items.
* In the component class instantiate a `DataService` object `this.item = new DataService();` inside the constructor function. 
* in the `ngOnInit` use the `setItems$` to set the items and `setSelected$` to the selected items 
* the dataService expose `selected$ ` as an observable that you can subscribe to to get the list of the selected item from the component  `this.item.selected$.subscribe(selected => console.log(selected))`


## API 
### property 
* **propertyName**  _type: string_ the property name to be displayed 
* **popupOption**  _type:boolean_ whether to display the popup option *
* **dataService**     _type: DataService_ instant of DataService class that keep the data in sync between the consumer component and  `AtomxSelectComponent`
* **loading**  _type:boolean_ display loading indicator
* **fetch**       _type: boolean_ the component data is fetched api 
### event
* **search**  fires when the user search(type) this option only work when the fetch property is set to true (when the data is fetch via api)
* **past**  firs when the user past into the input file 


### example with static data
Code available in the ….



## todo:
- [ ] support bootstrap v4
- [ ] allow custom template for the popup option button

#atomx-select
