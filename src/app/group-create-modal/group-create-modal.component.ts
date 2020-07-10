import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AppHttpClient } from '../utils';

@Component({
  selector: 'app-group-create-modal',
  templateUrl: './group-create-modal.component.html',
  styleUrls: ['./group-create-modal.component.scss'],
})
export class GroupCreateModalComponent implements OnInit {

  newGroupName: string;
  constructor(private modalCtrl: ModalController, private authService: AuthenticationService,
    private alertController: AlertController,
    private http: AppHttpClient) { }

  ngOnInit() {

  }
  updateSignIn() {
    const user = this.authService.getUserInfo();
    if (this.newGroupName) {
      this.http.post('group', { name: this.newGroupName, createdBy: user.id }).subscribe(res => {
        this.dismiss(res.data);
      }, err => {
        // console.log('error', err.message);
        // this.presentAlert(err.message);
      }); 
    }

  }
  dismiss(data?:any) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss(data);
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
