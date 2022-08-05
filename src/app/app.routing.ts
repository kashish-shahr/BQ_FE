import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "angular-google-charts";
import { AreachartComponent } from "./charts/areachart/areachart.component";
import { BarchartComponent } from "./charts/barchart/barchart.component";
import { DisplayAllComponent } from "./charts/display-all/display-all.component";
import { PiechartComponent } from "./charts/piechart/piechart.component";
import { AddDgrComponent } from "./Forms/dgr/add-dgr/add-dgr.component";
import { DgrComponent } from "./Forms/dgr/dgr.component";
import { LoginFormComponent } from "./Login/login-form/login-form.component";
import { PagenotfoundComponent } from "./Pages/dashboard/pagenotfound/pagenotfound.component";
import { CustomInputComponent } from "./Shared/Elements/custom-input/custom-input.component";
import { AddComponent } from "./Student/add/add.component";
import { DisplayComponent } from "./Student/display/display.component";
import { EditComponent } from "./Student/edit/edit.component";

const routes: Routes = [
  { path: '', component: DgrComponent },
  { path: 'adddgr', component:AddDgrComponent },
  { path: 'custom', component:CustomInputComponent },
  { path: 'login', component:LoginFormComponent },
    

    { path: 'display', component: DisplayComponent },
    { path: 'addStudent', component: AddComponent },
    { path: 'editStudent/:student_id', component: EditComponent },
    { path: 'piechart', component: PiechartComponent },
    { path: 'barchart', component: BarchartComponent },
    { path: 'areachart', component: AreachartComponent },
    { path: 'displayAllCharts', component: DisplayAllComponent },
    { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
  ];

  export const routingArray=RouterModule.forRoot(routes);