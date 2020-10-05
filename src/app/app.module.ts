import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OKComponent } from './CO/ok/ok.component';
import { JoComponent } from './CO/jo/jo.component';


@NgModule({
  declarations: [
    AppComponent,
    OKComponent,
    JoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
