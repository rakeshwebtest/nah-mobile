import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyUploadFieldComponent } from './lazy-upload-field.component';
import { FormlyModule } from '@ngx-formly/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LazyUploadFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormlyModule.forChild({
      types: [{
        name: 'lazy-upload',
        component: LazyUploadFieldComponent
      }]
    })
  ]
})
export class LazyUploadFieldModule { }
