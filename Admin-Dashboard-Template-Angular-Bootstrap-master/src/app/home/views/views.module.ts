import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import{newRecordsComponent} from './newrecord/newrecord.component';
import { RecordsComponent } from './records/records.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    RecordsComponent,
    newRecordsComponent,
    CardComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Profile1Component,
    HelpComponent,

  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    RecordsComponent,
    newRecordsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component
  ],
  providers: [
    RecordsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
