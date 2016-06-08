import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PouleAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(PouleAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://project-3910462533538160711.firebaseio.com'),
  HTTP_PROVIDERS
]);

