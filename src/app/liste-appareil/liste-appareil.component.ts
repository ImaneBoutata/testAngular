import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-appareil',
  templateUrl: './liste-appareil.component.html',
  styleUrls: ['./liste-appareil.component.css']
})
export class ListeAppareilComponent implements OnInit {
  isOk:boolean=true;
  constructor() {
    setTimeout(()=>{this.isOk=false;},5000)
  }

  ngOnInit(): void {
  }

}
