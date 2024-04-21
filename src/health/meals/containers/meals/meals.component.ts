import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from '../../../shared/services/meals.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from 'store';

@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  template: `
  <div>Meals component
  {{meals$ | async | json}}
  </div>
  `
})

export class MealsComponent implements OnInit, OnDestroy{

  meals$: Observable<any> = new Observable<Meal[]>();
  subscription: any = new Subscription();
  constructor(
    private mealsService: MealsService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
