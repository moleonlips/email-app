import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private services: SharedService) { }

  usernames: any = this.services.users;
  username = ''
  password: string = 'password';

  ngOnInit(): void {
    
  }

  chosen(event: any) {
    this.username = event.target.value
  }

  letMeLog() {
    this.services.login(this.username, this.password)
  }

}
