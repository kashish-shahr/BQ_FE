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
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';

import { MatIconModule} from '@angular/material/icon';
import { GoogleChartsModule } from 'angular-google-charts';
import { PiechartComponent } from './charts/piechart/piechart.component';

import { PagenotfoundComponent } from './Pages/dashboard/pagenotfound/pagenotfound.component';
import { DisplayComponent } from './Student/display/display.component';
import { routingArray } from './app.routing';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { AreachartComponent } from './charts/areachart/areachart.component';
import { DisplayAllComponent } from './charts/display-all/display-all.component';
import { EditComponent } from './Student/edit/edit.component';
import { AddComponent } from './Student/add/add.component';
import { DgrComponent } from './Forms/dgr/dgr.component';

import { NavbarComponent } from './Shared/layout/navbar/navbar.component';
import { HeaderComponent } from './Shared/layout/header/header.component';
import { FooterComponent } from './Shared/layout/footer/footer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddDgrComponent } from './Forms/dgr/add-dgr/add-dgr.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SiteInputComponent } from './Forms/dgr/SiteInput/site-input/site-input.component';
import { AvailabilityComponent } from './Forms/dgr/Availability/availability/availability.component';
import { CustomInputComponent } from './Shared/Elements/custom-input/custom-input.component';
import { SiteInputDisplayComponent } from './Forms/dgr/SiteInput/site-input-display/site-input-display.component';
import { AvailabilityDisplayComponent } from './Forms/dgr/Availability/availability-display/availability-display.component';

import { GrassCuttingDisplayComponent } from './Forms/dgr/GrassCutting/grass-cutting-display/grass-cutting-display.component';
import { GrassCuttingAddComponent } from './Forms/dgr/GrassCutting/grass-cutting-add/grass-cutting-add.component';

import { BlockWiseModuleCleaningDisplayComponent } from './Forms/dgr/BlockWiseModuleCleaning/block-wise-module-cleaning-display/block-wise-module-cleaning-display.component';
import { BlockWiseModuleCleaningAddComponent } from './Forms/dgr/BlockWiseModuleCleaning/block-wise-module-cleaning-add/block-wise-module-cleaning-add.component';
import { BreakDownDisplayComponent } from './Forms/dgr/Breakdown_1/break-down-display/break-down-display.component';
import { BreakDownAddComponent } from './Forms/dgr/Breakdown_1/break-down-add/break-down-add.component';



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
    DgrComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    AddDgrComponent,
    SiteInputComponent,
    AvailabilityComponent,
    CustomInputComponent,
    SiteInputDisplayComponent,
    AvailabilityDisplayComponent,
    
    GrassCuttingDisplayComponent,
    GrassCuttingAddComponent,
    
    BlockWiseModuleCleaningDisplayComponent,
    BlockWiseModuleCleaningAddComponent,
    BreakDownDisplayComponent,
    BreakDownAddComponent,
    
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    GoogleChartsModule,
    routingArray

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
