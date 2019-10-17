import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResponsiveSidenavModule } from "./responsive-sidenav/responsive-sidenav.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    ResponsiveSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
