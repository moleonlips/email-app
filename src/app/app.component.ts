import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-app-v2';

  constructor ( private router: Router ) {}

  isLoged = JSON.parse(localStorage.getItem('isLoged')!)

  ngOnInit() {
    if(!this.isLoged){
      this.router.navigate(['/login']);
    }
  }
}
