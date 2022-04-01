import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor() { }

  public mostrarmenu    : boolean = false;

  ngOnInit(): void {
    this.menuclick()
  }

  menuclick(){
    if(this.mostrarmenu == false){
      this.mostrarmenu   = true
    }else{
      this.mostrarmenu = false
    }
  }



}
