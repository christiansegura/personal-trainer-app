import {BehaviorSubject, distinctUntilChanged, map, Observable} from 'rxjs';
import {User} from './auth/shared/services/auth/auth.service';
import {Meal} from './health/shared/services/meals.service';


export interface State {
  user: User;
  meals: Meal[]
  [key: string]: any;
}

const state: State = {
  user: {
    email: '',
    uid: '',
    authenticated: false,
  },
  meals: []
};

export class Store {
  private subject = new BehaviorSubject(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<State>{
    return this.store.pipe(map(name => name));
  }

  set(name: string, state: any) {
    // this.value is an array spread in from the getter directly; remember that getters are referenced as properties
    this.subject.next({...this.value, [name]: state});
  }
}
