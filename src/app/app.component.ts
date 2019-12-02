import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { BkLayout } from '@uibakery/kit';
import { AngularFireDatabase } from '@angular/fire/database';

import { HttpClient } from '@angular/common/http';
import { Data } from '../Models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  description = 'Angular-Fire-Demo';
  data: Observable<Data>;
  itemValue = '';
  items: Observable<any[]>;

  defaultLayout: BkLayout = {
    header: true,
    headerFixed: false,
    sidebar: true,
    sidebarFixed: false,
    paddings: {
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16
    }
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => {
        const p = layout.paddings;
        return `${p.paddingTop}px ${p.paddingRight}px ${p.paddingBottom}px ${p.paddingLeft}px`;
      }),
    );

  constructor(private router: Router, public db: AngularFireDatabase, private http: HttpClient) {
    this.items = db.list('items').valueChanges();
    this.data = this.http.get<Data>('./assets/data.json');
    console.log(this.data)
  }

}
