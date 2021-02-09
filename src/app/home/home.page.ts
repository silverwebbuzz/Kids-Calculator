import { Component } from '@angular/core';
import { isNumber } from 'util';
import { NavController, ModalController } from '@ionic/angular';
import { CloseComponent } from '../component/close/close.component';
import { ActivatedRoute } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  checkname : any;
  
  value = '0';
  oldValue = '0';

  lastOperator = 'x';
  readyForNewInput = true;
  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['C', 0, '=', '/']
  ];

  constructor(private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private nativeAudio: NativeAudio,
    private statusBar: StatusBar){

      this.nativeAudio.preloadSimple('uniqueId0', 'assets/audio/zero.mp3');
      this.nativeAudio.preloadSimple('uniqueId1', 'assets/audio/one.mp3');
      this.nativeAudio.preloadSimple('uniqueId2', 'assets/audio/two.mp3');
      this.nativeAudio.preloadSimple('uniqueId3', 'assets/audio/three.mp3');
      this.nativeAudio.preloadSimple('uniqueId4', 'assets/audio/four.mp3');
      this.nativeAudio.preloadSimple('uniqueId5', 'assets/audio/five.mp3');
      this.nativeAudio.preloadSimple('uniqueId6', 'assets/audio/six.mp3');
      this.nativeAudio.preloadSimple('uniqueId7', 'assets/audio/seven.mp3');
      this.nativeAudio.preloadSimple('uniqueId8', 'assets/audio/eight.mp3');
      this.nativeAudio.preloadSimple('uniqueId9', 'assets/audio/nine.mp3');
      this.nativeAudio.preloadSimple('uniqueIdeq', 'assets/audio/equals.mp3');
      this.nativeAudio.preloadSimple('uniqueIdc', 'assets/audio/clear.mp3');
      this.nativeAudio.preloadSimple('uniqueIdplus', 'assets/audio/plus.mp3');
      this.nativeAudio.preloadSimple('uniqueIdminus', 'assets/audio/minus.mp3');
      this.nativeAudio.preloadSimple('uniqueIdmultiply', 'assets/audio/multiply.mp3');
      this.nativeAudio.preloadSimple('uniqueIddivide', 'assets/audio/divide.mp3');

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
          console.log(this.data);

          if(this.data == "boy")
          {
            this.checkname = "BoysBg";
          }else{
            this.checkname = "GirlsBg";
          }
          
        }
      });
    }

    ionViewWillEnter() {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#000');
    }
  
  zeroPlay(){
    this.nativeAudio.play('uniqueId0');
  }
  onePlay(){
    this.nativeAudio.play('uniqueId1');
  }
  twoPlay(){
    this.nativeAudio.play('uniqueId2');
  }
  threePlay(){
    this.nativeAudio.play('uniqueId3');
  }
  fourPlay(){
    this.nativeAudio.play('uniqueId4');
  }
  fivePlay(){
    this.nativeAudio.play('uniqueId5');
  }
  sixPlay(){
    this.nativeAudio.play('uniqueId6');
  }
  sevenPlay(){
    this.nativeAudio.play('uniqueId7');
  }
  eightPlay(){
    this.nativeAudio.play('uniqueId8');
  }
  ninePlay(){
    this.nativeAudio.play('uniqueId9');
  }
  equalsPlay(){
    this.nativeAudio.play('uniqueIdeq');
  }
  clearPlay(){
    this.nativeAudio.play('uniqueIdc');
  }
  plusPlay(){
    this.nativeAudio.play('uniqueIdplus');
  }
  minusPlay(){
    this.nativeAudio.play('uniqueIdminus');
  }
  multiplyPlay(){
    this.nativeAudio.play('uniqueIdmultiply');
  }
  dividePlay(){
    this.nativeAudio.play('uniqueIddivide');
  }

  mute(){
    this.nativeAudio.setVolumeForComplexAsset('uniqueId0',0);
  }

  onButtonPress(symbol) {

    if(isNumber(symbol)){
      switch(symbol){
        case 0: this.zeroPlay()
        break;
        case 1: this.onePlay()
        break;
        case 2: this.twoPlay()
        break;
        case 3: this.threePlay()
        break;
        case 4: this.fourPlay()
        break;
        case 5: this.fivePlay()
        break;
        case 6: this.sixPlay()
        break;
        case 7: this.sevenPlay()
        break;
        case 8: this.eightPlay()
        break;
        case 9: this.ninePlay()
        break;
      }
    }else if(symbol === '='){
      this.equalsPlay();
    }
    else if(symbol === 'C'){
      this.clearPlay();
    }
    else if(symbol === '+'){
      this.plusPlay();
    }
    else if(symbol === '-'){
      this.minusPlay();
    }
    else if(symbol === 'x'){
      this.multiplyPlay();
    }
    else if(symbol === '/'){
      this.dividePlay();
    }
    
    if (isNumber(symbol)) {
      
      if (this.readyForNewInput)
        this.value = '' + symbol;
      else
        this.value += '' + symbol;
      this.readyForNewInput = false;
    }
    else if (symbol === 'C') {
      this.value = '0';
      this.readyForNewInput = true;
    }
    else if (symbol === '=') {
      if (this.lastOperator === 'x')
        this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === '/')
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      this.readyForNewInput = true;
    }
    else { // operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
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
