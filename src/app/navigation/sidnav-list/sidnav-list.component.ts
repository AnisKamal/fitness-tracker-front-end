import { Component, OnInit, EventEmitter, Output,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.css']
})
export class SidnavListComponent implements OnInit, OnDestroy{

  @Output()
  closeSidenav = new EventEmitter<void>(); 
  isAuth!: boolean; 
  authSubscription!: Subscription; 

  constructor(private authService: AuthService) {  }
 
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus =>{
      this.isAuth = authStatus; 
    }); 
  }

  onClose() {
    this.closeSidenav.emit() ; 
  }

  onLogout(){
    this.authService.logout(); 
    this.onClose(); 
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe(); 
  }


}
