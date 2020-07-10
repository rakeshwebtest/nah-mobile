import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/app/agenda/agenda.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      wrappers: ['vertical'],
      className: 'col-12 ion-padding-t-10',
      templateOptions: {
        label: 'Post Title',
        placeholder: 'Type Post Title',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      wrappers: ['vertical'],
      className: 'col-12 ion-padding-t-10',
      templateOptions: {
        label: 'Description',
        placeholder: 'What\'s on your mind',
        required: true,
      }
    },
    {
      key: 'topicId',
      type: 'selectable',
      wrappers: ['vertical'],
      className: 'col-12',
      templateOptions: {
        label: 'Topic',
        placeholder: 'Select Topic',
        required: true,
        itemValueField: 'id',
        itemTextField: 'name',
      },
      hooks: {
        onInit: (f) => {
          f.templateOptions.options = (this.agendaS.agenda) ? this.agendaS.agenda.topics : [];
        }
      }
    },
    {
      key: 'photos',
      type: 'lazy-upload',
      wrappers: ['vertical'],
      className: 'col-12',
      defaultValue: [],
      templateOptions: {
        multiple: true,
        required: false,
        label: 'Image',
        placeholder: 'Upload Image',
      }
    },
    {
      key: 'videoPath',
      type: 'video',
      wrappers: ['vertical'],
      className: 'col-12',
      templateOptions: {
        pattern: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
        label: 'Paste Youtube URL here',
        placeholder: 'Paste Youtube URL here',
        required: false
      }
    }

  ];
  formShow = false;
  constructor(private router: Router, private agendaS: AgendaService, private postS: PostService) { }

  ngOnInit() {

    if (!this.agendaS.agenda) {
      // this.router.navigate(['/agenda/create'], { queryParams: { redirectUrl: 'post' } });
    }
  }
  submit(model, isPublish) {

    model.isPublished = (isPublish) ? 1 : 0;
    this.postS.createUpdatePost(model).subscribe(res => {
      this.router.navigate(['/dashboard/posts/my-posts']);
    });
  }

}
