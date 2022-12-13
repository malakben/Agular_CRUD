import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Malak';
  constructor (public authService: AuthService, private router: Router) {}
  ngOnInit () {
     }
    
  onLogout(){
    this.authService.logout();
  }
}
