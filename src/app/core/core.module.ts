import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreyhoundService } from './services/greyhound/greyhound.service';
import { LoggingService } from './services/logging/logging.service';

const modules = [
  BrowserAnimationsModule
];

const services = [
  GreyhoundService,
  LoggingService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: [
    ...services
  ]
})
export class CoreModule { }
