import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PouleAppComponent } from '../app/poule.component';

beforeEachProviders(() => [PouleAppComponent]);

describe('App: Poule', () => {
  it('should create the app',
      inject([PouleAppComponent], (app: PouleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poule works!\'',
      inject([PouleAppComponent], (app: PouleAppComponent) => {
    expect(app.title).toEqual('poule works!');
  }));
});
