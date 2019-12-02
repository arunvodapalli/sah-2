import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
