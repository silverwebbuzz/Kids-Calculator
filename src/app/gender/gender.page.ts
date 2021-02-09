import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CloseComponent } from '../component/close/close.component';
import { HomePage } from '../home/home.page';
import { NavigationExtras, Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  constructor(public modalCtrl: ModalController,
    public navCtrl: NavController,
    private router: Router,
    private nativeAudio: NativeAudio,
    private statusBar: StatusBar) {

      this.nativeAudio.preloadSimple('uniqueIdboy', 'assets/audio/boy.mp3');
      this.nativeAudio.preloadSimple('uniqueIdgirl', 'assets/audio/girl.mp3');

     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#000');
  }

  boyPlay(){
    this.nativeAudio.play('uniqueIdboy');
  }
  girlPlay(){
    this.nativeAudio.play('uniqueIdgirl');
  }

  frame(gender){
    if(gender == 'boy')
      this.boyPlay();
    else
      this.girlPlay();
      
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(gender)
        }
      };
      this.router.navigate(['home'], navigationExtras);
    }

  async openModal(){
      const modal = await this.modalCtrl.create({
        component: CloseComponent,
        showBackdrop: true,
        mode:	"ios",
        cssClass: 'close-modal'
      });
      return await modal.present();
    }
  }
