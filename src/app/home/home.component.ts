import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name ='An';
  public age = 15;


  public resetName(): void
  {
    console.log('resetName');
    this.name = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
