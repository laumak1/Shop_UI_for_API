import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { formatDate } from '@angular/common';
import { format } from 'url';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styles: []
})
export class MyProfileComponent implements OnInit {
  userDetails;
  birthD;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails=res;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
