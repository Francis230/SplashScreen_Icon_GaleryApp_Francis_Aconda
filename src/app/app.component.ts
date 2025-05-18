import { Component } from '@angular/core';
// Importacion para el splash screen  
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    // Para que se ejecute al iniciar la app
    this.showSplashSreen
  }
  async showSplashSreen(){
    await SplashScreen.show({
    autoHide: true,
    showDuration: 4000
});
  }
}
