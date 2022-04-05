import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public mostrarmenu: boolean = false

  constructor() {

  }

  ngOnInit(): void {
  
  }
  
  menuclick(){
    this.mostrarmenu = !this.mostrarmenu;
    if(this.mostrarmenu == true){
      // linha-1
      document.getElementById('linha1')!.style.transform = 'rotate(45deg)';
      document.getElementById('linha1')!.style.backgroundColor = '#a106c0'
      // linha-2
      document.getElementById('linha2')!.style.opacity = '0';
      // linha-3
      document.getElementById('linha3')!.style.transform = 'rotate(-45deg)';
      document.getElementById('linha3')!.style.marginTop = '-12.5px';
      document.getElementById('linha3')!.style.backgroundColor = '#a106c0'
      // mobile-menu
      document.getElementById('mobile-icon')!.style.paddingTop = '12px';
      // nav-list
      document.getElementById('nav-list')!.style.opacity = '1';
    }
    else{
      // linha-1
      document.getElementById('linha1')!.style.transform = 'rotate(0deg)';
      document.getElementById('linha1')!.style.backgroundColor = '#101010'
      // linha-2
      document.getElementById('linha2')!.style.opacity = '1';
      // linha-3
      document.getElementById('linha3')!.style.transform = 'rotate(0deg)';
      document.getElementById('linha3')!.style.marginTop = '0';
      document.getElementById('linha3')!.style.backgroundColor = '#101010'
      // mobile-menu
      document.getElementById('mobile-icon')!.style.paddingTop = '0';
      // nav-list
      document.getElementById('nav-list')!.style.opacity = '0';
    }
  }
}