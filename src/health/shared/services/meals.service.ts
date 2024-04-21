import {Injectable} from '@angular/core';
import {Store} from 'store';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AuthService} from '../../../auth/shared/services/auth/auth.service';


export interface Meal{
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}
@Injectable()
export class MealsService {
  // TODO: something is weird here with how I have to get the data out of a promise and how we're using the db list, try to watch it again and fix the typings, it also doesn't feel right to subscribe in here in order to set meals on the store. As it stands we're looking at the correct data right now but it's the whole overall object in the browser view. Since this is a promise try like one more time to import the non compat version of the db list method something seems off with that because in the docs in node modules it says there is a list method in there that is an observable
  // TODO: also look into the strange mismatch on the user and state typing issue thing
  meals$ = this.authService.user.then( userData => {
    return this.db.list(`meals/${userData?.uid}`).valueChanges().subscribe(next => this.store.set('meals', next));
  });
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
  }

}
