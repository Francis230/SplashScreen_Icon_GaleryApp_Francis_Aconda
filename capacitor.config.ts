import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.photo-gallery.app',
  appName: 'photo-gallery',
  webDir: 'www',
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0,
      "launchAutoHide": true,
      // Color blanco
      "backgroundColor": "#000000",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": false,
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "splashFullScreen": false,
      "splashImmersive": false,
      "layoutName": "launch_screen",
      "useDialog": false,
    }
  }
};

export default config;
