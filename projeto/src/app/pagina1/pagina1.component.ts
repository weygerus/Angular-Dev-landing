import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor() { }

  public mostrarmenu : boolean = false;

  ngOnInit(): void {
  }

  menuclick(){
    if(document.getElementById('line-1')!.style.transform = 'rotate(0deg)'){
      document.getElementById('line-1')!.style.transform  = 'rotate(45deg)'
    }

  }
  



}
