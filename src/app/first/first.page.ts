import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private router: Router,
    private statusBar: StatusBar) {

    console.log("firstPage");
   }

  ngOnInit() {

      setTimeout(() => {
        this.router.navigate(['gender']);
    }, 3000);
  }

  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#000');
  }

}
