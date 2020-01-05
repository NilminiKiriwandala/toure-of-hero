import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero'


@Component({
  selector: 'app-herose',
  templateUrl: './herose.component.html',
  styleUrls: ['./herose.component.css']
})
export class HeroseComponent implements OnInit {

hero : Hero = {
  id:1,
  name:'Windstorm'
};

  constructor() { }

  ngOnInit() {
  }

}
