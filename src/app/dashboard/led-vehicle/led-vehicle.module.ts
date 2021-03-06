import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedVehicleRoutingModule } from './led-vehicle-routing.module';
import { LedVehicleComponent } from './led-vehicle.component';
import { CreateDisplayComponent } from './create-display/create-display.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LedVehicleComponent, CreateDisplayComponent],
  imports: [
    CommonModule,
    LedVehicleRoutingModule,
    AngularMyDatePickerModule,
    FormsModule,
    NgbModule,
    SelectDropDownModule,
    HttpClientModule
  ]
})
export class LedVehicleModule { }
