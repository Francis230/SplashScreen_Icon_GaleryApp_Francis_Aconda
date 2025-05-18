Desarrollo de la AppGaley SplashScreen Icon - Francis Aconda 
# 📸 Galería de Fotos - App Móvil (Ionic + Capacitor)

Aplicación móvil desarrollada con **Ionic Framework**, **Angular** y **Capacitor**. Permite tomar fotos, visualizarlas en una galería local, y cuenta con personalización del **ícono** y la **pantalla de bienvenida (Splash Screen)**. El desarrollo sigue la estructura solicitada en clase, dividido por pestañas (tabs).

---

## 🚧 Estructura General del Proyecto

La app está dividida en tres Tabs principales:

### 🔹 Tab 1 – Introducción

Pantalla de bienvenida que describe brevemente la aplicación.

![Tab 1](https://github.com/user-attachments/assets/3580a8bf-9aab-4f36-8d92-371aa1b7e476)

---

### 🔹 Tab 2 – Cámara

Incluye un botón para tomar una foto, usando la cámara del dispositivo.

![Tab 2](https://github.com/user-attachments/assets/3521350a-4b1f-48c3-b09c-599155c3b723)

---

### 🔹 Tab 3 – Galería

Permite cargar las fotos guardadas, verlas con su nombre y tomar una nueva a 50% de calidad. El botón cambia dinámicamente entre "Cargar fotos" y "Ocultar fotos".

![Tab 3](https://github.com/user-attachments/assets/f743c5c7-ab80-4469-8045-f2160db91a6b)

---
2. Instala dependencias
    npm install

3. Sincroniza Capacitor
   npx cap sync
4. Corre en navegador
   ionic serve
5. Corre en Android
   npx cap open android

📲 Funcionalidades Incluidas
📷 Captura de imágenes con la cámara

🖼️ Galería con carga dinámica de fotos

🚀 Splash screen personalizado

🔧 Ícono de la aplicación personalizado

✅ Compatible con Android

🚀 Configuración del Splash Screen
1. Instalar plugin
   npm install @capacitor/splash-screen
   npx cap sync

2. Modificar capacitor.config.ts
   plugins: {
  SplashScreen: {
    launchShowDuration: 3000,
    launchAutoHide: true,
    backgroundColor: "#ffffff",
    androidSplashResourceName: "splash",
    androidScaleType: "CENTER_CROP",
    showSpinner: false
  }
}

3. Ocultar splash en app.component.ts
   import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    await SplashScreen.hide();
  }
}

🖼️ Personalización del Ícono y Splash

1. Instalar herramienta
   npm install @capacitor/assets --save-dev

2. Estructura de carpetas recomendada
   resources/
├── icon.png     (mínimo 1024x1024 px)
├── splash.png   (mínimo 2732x2732 px)

Formato: .jpg o .png

3. Generar recursos
   npx capacitor-assets generate

Esto generará automáticamente los íconos y splash adaptados para cada dispositivo.

4. Sincronizar y abrir Android Studio
   npx cap sync android
   npx cap open android


📷 Imágenes Utilizadas
Ícono personalizado:

![icon](https://github.com/user-attachments/assets/8f7aef32-5468-4fa6-bd58-136ebcc8745c)

Splash Screen personalizado:

![splash](https://github.com/user-attachments/assets/5da838bf-6614-4f7a-ae24-052c82874c9c)

📁 Carpetas Generadas
Una vez generado el splash e íconos, se crean archivos dentro de android/app/src/main/res con los distintos tamaños:


![image](https://github.com/user-attachments/assets/152e00e4-389f-4599-a549-ff5a90ba911e)



💡 Tecnologías Utilizadas
Ionic Framework (Angular)

CapacitorJS

@capacitor/camera

@capacitor/splash-screen

@capacitor/assets









