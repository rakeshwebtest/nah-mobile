import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { IonicModule } from '@ionic/angular';
import { AgendaViewModule } from 'src/app/agenda/agenda-view/agenda-view.module';
import { PostImageViewComponent } from '../post-image-view/post-image-view.component';



@NgModule({
  declarations: [PostListComponent, PostImageViewComponent],
  imports: [
    AgendaViewModule,
    CommonModule,
    IonicModule
  ],
  exports: [PostListComponent]
})
export class PostListModule { }
