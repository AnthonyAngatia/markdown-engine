import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from  '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(
      {loader: HttpClient}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
