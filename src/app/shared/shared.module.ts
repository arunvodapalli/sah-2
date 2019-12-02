import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule
  ],
  exports: [NbCardModule, NbButtonModule, NbIconModule, NbInputModule]
})
export class SharedModule { }
