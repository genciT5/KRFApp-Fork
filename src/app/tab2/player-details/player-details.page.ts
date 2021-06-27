import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {

  player: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
        // receiving params from navigation extras to the other page
    
        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
               let navParams = this.router.getCurrentNavigation().extras.state;
               this.player = navParams.player;
               console.log(navParams);
          }
        })
  }

  ngOnInit() {
  }

}
