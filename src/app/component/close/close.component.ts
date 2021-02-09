import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss'],
})
export class CloseComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private platform: Platform) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

  exit(){
    navigator['app'].exitApp();
  }

}
