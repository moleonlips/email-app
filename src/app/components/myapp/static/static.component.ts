import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  constructor(
    private router: Router,
    private services: SharedService
  ) { }

  username = JSON.parse(localStorage.getItem('curUser')!)

  userOptions = this.services.users

  ngOnInit(): void { }

  logout() {
    localStorage.removeItem('curUser')
    localStorage.removeItem('isLoged')
    this.router.navigate([''])
  }

}
