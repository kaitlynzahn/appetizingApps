import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    private menuCtl: MenuController,
    private alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.auth.logout().then(() => {
      this.menuCtl.toggle();
      this.router.navigate([""]);
    });
  }

  async about() {
    const alert = await this.alertController.create({
      header: "About",
      message: "This app was created by Haley Massa, Kaitlyn Zahn, and Genevieve Saab. Use the explore page to see menu items from Columbia, MO restaurants and click the star to add to your favorites! ",
      buttons: ['OK']
    })

    await alert.present();
  }
}
