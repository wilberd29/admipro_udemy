import { NgModule } from "@angular/core";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


    @NgModule({
        declarations: [
            NopagefoundComponent,
            HeaderComponent,
            SidebarComponent,
            BreadcrumbsComponent,
            NopagefoundComponent,
        ],
        exports: [
            NopagefoundComponent,
            HeaderComponent,
            SidebarComponent,
            BreadcrumbsComponent,
            NopagefoundComponent,
        ]
        
  
})
export class SharedModule { }