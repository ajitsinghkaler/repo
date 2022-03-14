import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  teamDetails = this.teamService.getPlayers(
    this.route.snapshot.paramMap.get('id') as string
  );

  teams: any = this.teamService.teams.getValue();
  constructor(
    private teamService: TeamService,
    private route:  ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
