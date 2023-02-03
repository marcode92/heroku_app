import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})


export class CreateUserComponent implements OnInit {
   
  socialType: Array<string> = ['Instagram', 'Facebook'];
  
  profile = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
    typeSocial  : new FormControl(''),
    info: new FormControl(''),
    code: new FormControl('')
  });

  constructor() { }

  ngOnInit() {

    }
  
  userCreation() {
    console.log(this.profile.value);
  }
}
