import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule} from '@angular/material/icon';
import { GoogleChartsModule } from 'angular-google-charts';
import { PiechartComponent } from './charts/piechart/piechart.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DisplayComponent } from './Student/display/display.component';
import { routingArray } from './app.routing';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { AreachartComponent } from './charts/areachart/areachart.component';
import { DisplayAllComponent } from './charts/display-all/display-all.component';
import { EditComponent } from './Student/edit/edit.component';
import { AddComponent } from './Student/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    AddComponent,
    PagenotfoundComponent,
    DisplayComponent,
    BarchartComponent,
    AreachartComponent,
    DisplayAllComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    GoogleChartsModule,
    routingArray

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
