import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  createUser(user, pass) {
    // this.afAuth.auth.createUserWithEmailAndPassword(user, pass).catch((err) => {
    //   console.log(err.code);
    //   console.log(err.message);
    //   alert('Email Address Already In ');
    // });
   if (user === '' || user === null && pass === '' || pass === null) {
     console.log('null or blank');
   } else {
     console.log('ok ok');
   }
    // console.log(user + ' ' + pass);
  }
}
