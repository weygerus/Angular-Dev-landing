import { style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public mostrarmenu: boolean = false 

  constructor(element: ElementRef) { }

  ngOnInit(): void {
  
  }
  
  menuclick(){
    console.log('ok')
    this.mostrarmenu = !this.mostrarmenu;
        if(this.mostrarmenu == true){
          // icone
          document.getElementById('mobile-icon')!.style.transform = 'rotate(-90deg)';

          // desktop
          document.getElementById('nav-list')!.style.opacity = '1'
        }
        else{
          // icone 
          document.getElementById('mobile-icon')!.style.transform = 'rotate(0deg)';

          // desktop
          document.getElementById('nav-list')!.style.opacity = '0'
        }
      }
    
}


