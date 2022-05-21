import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from 'ng2-charts';

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

    @NgModule({
        declarations: [
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            IncrementadorComponent,
            GraficoDonaComponent,
            AccountSettingsComponent,
            PromesasComponent,
            RxjsComponent
        ],
        exports: [
            PagesComponent,
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
        ],
        imports: [
            SharedModule,
            PAGES_ROUTES,
            FormsModule,
            NgChartsModule,
            BrowserModule
        ]
        
  
})
export class PagesModule { }