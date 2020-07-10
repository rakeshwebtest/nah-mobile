import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGroupComponent } from './my-group/my-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupTabsComponent } from './group-tabs/group-tabs.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'all',
    pathMatch:'full'
  },
  {
    path:'',
    component:GroupTabsComponent,
    children:[
      {
        path:'all',
        component: MyGroupComponent,
        data:{
          type:'all'
        }
      },
      {
        path:'my-groups',
        component: MyGroupComponent,
        data:{
          type:'mygroups'
        }
      }
    ]
  },
  {
    path: 'list',
    component: MyGroupComponent
  },
  {
    path: 'details/:id',
    component: GroupDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPageRoutingModule {

}
