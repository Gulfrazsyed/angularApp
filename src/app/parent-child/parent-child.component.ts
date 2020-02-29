import { Component, OnInit,Input,Output } from '@angular/core';
import { BowlingService } from '../bowling.service';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  players = [];
  cap = '';
  constructor(private a: BowlingService) {
    this.players = a.getPlayers()
    this.cap = a.captain;

   }

  ngOnInit(): void {
  }

}
