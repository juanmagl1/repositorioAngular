import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  user!:{id:number,name:string}
  paramsSubcription!:Subscription;
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramsSubcription=this.route.params    
    .subscribe(
      (updatedParams)=>{
        this.user.id=updatedParams['id'],
        this.user.name=updatedParams['name']
      }
    );
  }

}
