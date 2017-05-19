import { Component, OnInit } from '@angular/core';
//import { User } from './User'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	
	user = {
		first_name : '',
		last_name : '',
		email : '', 
		password : '',
		passwordConf : '',
		state: ''

	}

	
  constructor() { }
   onSubmit(formData) {
   console.log(formData);
  }
  
  ngOnInit() {
  
	}
  		
  	passwordMatch(){
  		return this.user.password === this.user.passwordConf
  	}

  

  

}
