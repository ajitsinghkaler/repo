import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`${environment.baseUrl}/teams`).pipe(tap((teams: any)=>this.teams.next(teams)))
  }

  getPlayers(id: string) {
    return this.http.get<Array<any>>(`${environment.baseUrl}/teams/${id}/players`);
  }
}
