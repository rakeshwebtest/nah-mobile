import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';
import { MyGroupComponent } from './my-group/my-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupService } from './group.service';
import { GroupListModule } from '../shared/group-list/group-list.module';
import { PeoplesModule } from '../shared/peoples/peoples.module';
import { MeetingListModule } from '../shared/meeting-list/meeting-list.module';
import { GroupTabsComponent } from './group-tabs/group-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule,
    GroupListModule,
    PeoplesModule,
    MeetingListModule
  ],
  providers: [GroupService],
  declarations: [MyGroupComponent, GroupDetailsComponent, GroupTabsComponent]
})
export class GroupPageModule { }
