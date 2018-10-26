import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// In your test application import using your library by name and NOT the individual files
import { ExampleMyNgLibModule} from 'example-my-ng-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ExampleMyNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
