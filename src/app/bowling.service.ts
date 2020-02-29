import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {
captain = 'Sulaimani'
  getPlayers() {
    const bowlers: any = [
      { name: 'Hassan', wickets: '23', overs: 23 },
      { name: 'Fahd', wickets: '3', overs: 13 },
      { name: 'Ali', wickets: '2', overs: 34 }
    ];
    return bowlers;
  }
  constructor() {
   }
}
