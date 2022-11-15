import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
nuevo={
  name:'Mamon',
  healthy:10000
}
personajes=[
  {name:"Shelly",
  healthy:3600
},
{
  name:"Nita",
  healthy:2800,
},
{
  name:"Colt",
  healthy:800
},
{
  name:"Jessie",
  healthy:1800
}
]





}
