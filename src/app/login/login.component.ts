import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService} from '../services/user.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService, private router: Router,) { }

  ngOnInit() {
  }

  @ViewChild('sgnForm') sgnForm: NgForm;

  onSubmit(){
    console.log(this.sgnForm.value);
    if(this.sgnForm.valid == true){
      this.userService.login(this.sgnForm.value.email, this.sgnForm.value.password);
      this.router.navigate(["main"]);
    }

}
}
