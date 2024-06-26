import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {MealsService} from './services/meals.service';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: []
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<any>{
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    }
  }
}
