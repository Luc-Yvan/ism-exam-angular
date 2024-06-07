import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [ LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RpRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class RpModule { }
