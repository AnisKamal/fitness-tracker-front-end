import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidnav-list',
  templateUrl: './sidnav-list.component.html',
  styleUrls: ['./sidnav-list.component.css']
})
export class SidnavListComponent implements OnInit{

  @Output()
  closeSidenav = new EventEmitter<void>(); 

  constructor() {  }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit() ; 
  }

}
