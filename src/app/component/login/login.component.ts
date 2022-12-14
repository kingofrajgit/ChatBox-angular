import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    email : new FormControl("",[])
  })

  submit(){
    let email = this.userForm.get("email")?.value
    console.log(email)
  }

}
