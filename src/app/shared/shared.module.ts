import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        NopagefoundComponent,
        SidebarComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent],
    exports: [
        SidebarComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent],
})
export class SharedModule {}
