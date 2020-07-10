import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.page.html',
  styleUrls: ['./meetings.page.scss'],
})
export class MeetingsPage implements OnInit {
  googlePic: any;
  title: any;
  noMeetingMsg: string;
  showList = false;
  params = this.route.snapshot.data;
  queryParams = this.route.snapshot.queryParams;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute) { }
  ionViewWillEnter() {
  }
  ngOnInit() {
    console.log('route',this.route);
    console.log('route',this.route.snapshot.data.type);
    const userInfo: any = this.authService.isAuthenticated();
    this.googlePic = userInfo.user.imageUrl;

    this.title = this.params.type;
    switch (this.params.type) {
      case 'my-meeting':
        this.title = "My Meetings";
        this.noMeetingMsg = "You don't have any meetings right at this moment";
        break;
      case 'upcoming':
        this.title = "Upcoming Meetings";
        this.noMeetingMsg = "You don't have any scheduled meetings";
        break;
      default:
        this.title = "All Meetings";
        this.noMeetingMsg = "Hmm, seems like they are no meetings";
        break;
    }
  }

  reload() {
    this.showList = false;
    setTimeout(() => {
      this.showList = true;
    }, 100);
  }

}
