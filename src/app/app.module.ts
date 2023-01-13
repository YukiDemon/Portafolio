import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { PresentationComponent } from './Components/presentation/presentation.component';
import { YupieComponent } from './Components/yupie/yupie.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    YupieComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
