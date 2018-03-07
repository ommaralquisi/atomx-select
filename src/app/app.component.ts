import {Component, OnInit} from '@angular/core';
import {DataService} from '../lib/atomx-select/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'atomx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  usersData: DataService;
  names: DataService;
  users = [
    {id: 0, name: 'Pena Gibson'},
    {id: 1, name: 'Geneva Henderson'},
    {id: 2, name: 'Graciela Burt'},
    {id: 3, name: 'Schultz Hancock'},
    {id: 4, name: 'Fletcher Terrell'},
    {id: 5, name: 'Tessa Wallace'},
    {id: 6, name: 'Kristie Stokes'},
    {id: 7, name: 'Lewis Wong'},
    {id: 8, name: 'Annmarie Salas'},
    {id: 9, name: 'Gamble Lambert'},
    {id: 10, name: 'Vazquez English'},
    {id: 11, name: 'Welch Ramirez'},
    {id: 12, name: 'Myrtle Kirkland'},
    {id: 13, name: 'Mosley Wiley'},
    {id: 14, name: 'Cooke Ray'},
    {id: 15, name: 'Corina Conley'},
    {id: 16, name: 'Gladys Monroe'},
    {id: 17, name: 'Keith Wise'},
    {id: 18, name: 'Marcy Ayala'},
    {id: 19, name: 'Duncan Alexander'},
    {id: 20, name: 'Carroll Caldwell'},
    {id: 21, name: 'Susanne Perry'},
    {id: 22, name: 'Ruby Welch'},
    {id: 23, name: 'Garrison Boyle'},
    {id: 24, name: 'Robbie Tillman'},
    {id: 25, name: 'Fowler Roth'},
    {id: 26, name: 'Clayton Kinney'},
    {id: 27, name: 'York Johnson'},
    {id: 28, name: 'Daugherty Cooper'},
    {id: 29, name: 'Kendra Stone'},
    {id: 30, name: 'Cohen Rocha'},
    {id: 31, name: 'Tara Norris'},
    {id: 32, name: 'Harper Carr'},
    {id: 33, name: 'Mcknight King'},
    {id: 34, name: 'Berry Mcmahon'},
    {id: 35, name: 'Ruth Pitts'},
    {id: 36, name: 'Houston Phillips'},
    {id: 37, name: 'Crosby Summers'},
    {id: 38, name: 'Woods Travis'},
    {id: 39, name: 'Ebony Chase'},
    {id: 40, name: 'Randi Estes'},
    {id: 41, name: 'Genevieve Reeves'},
    {id: 42, name: 'Christy Estrada'},
    {id: 43, name: 'Wilma Oconnor'},
    {id: 44, name: 'Pauline Walker'},
    {id: 45, name: 'Julianne Calderon'},
    {id: 46, name: 'Nola Gregory'},
    {id: 47, name: 'Macdonald Sawyer'},
    {id: 48, name: 'Latonya Cain'},
    {id: 49, name: 'Catherine Dotson'}
  ];

  selected = [{id: 46, name: 'Nola Gregory'},
    {id: 47, name: 'Macdonald Sawyer'},
    {id: 48, name: 'Latonya Cain'},
    {id: 49, name: 'Catherine Dotson'}
  ];


  namesList = [
    {id: 1, name: 'firstName'},
    {id: 2, name: 'secondName'},
    {id: 3, name: 'address'},
    {id: 4, name: 'street'},
    {id: 5, name: 'city'},
    {id: 6, name: 'zip code'},
    {id: 7, name: 'code'}
  ];
  selectedNames = [{id: 5, name: 'city'}, {id: 6, name: 'zip code'}];


  constructor(private http: HttpClient) {
    this.usersData = new DataService();
    this.names = new DataService();
    this.http.get('api/users/?name=Ayala').subscribe(heroes => console.log(heroes));
  }

  ngOnInit() {
    this.usersData.setItems$(this.users);
    this.usersData.setSelected$(this.selected);
    this.usersData.selected$.subscribe(selected => {
      this.selected = [...selected];
    });

    this.names.setItems$(this.namesList);
    this.names.setSelected$(this.selectedNames);
    this.names.selected$.subscribe(selected => {
      this.selectedNames = [...selected];
    });
  }

  onSearch(event) {
    console.log(event);
    if (event.length <= 3) {
      return;
    }
    this.loading = true;
    this.http.get(`api/users?name=${event}`).subscribe(result => {
      this.usersData.setItems$(result);
      this.loading = false;
    });
  }

}
