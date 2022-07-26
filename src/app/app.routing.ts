import { RouterModule, Routes } from "@angular/router";
import { AreachartComponent } from "./charts/areachart/areachart.component";
import { BarchartComponent } from "./charts/barchart/barchart.component";
import { DisplayAllComponent } from "./charts/display-all/display-all.component";
import { PiechartComponent } from "./charts/piechart/piechart.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AddComponent } from "./Student/add/add.component";
import { DisplayComponent } from "./Student/display/display.component";
import { EditComponent } from "./Student/edit/edit.component";

const routes: Routes = [
    { path: '', component: DisplayComponent },
    { path: 'addStudent', component: AddComponent },
    { path: 'editStudent/:student_id', component: EditComponent },
    { path: 'piechart', component: PiechartComponent },
    { path: 'barchart', component: BarchartComponent },
    { path: 'areachart', component: AreachartComponent },
    { path: 'displayAllCharts', component: DisplayAllComponent },
    { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
  ];

  export const routingArray=RouterModule.forRoot(routes);