import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedListComponent } from './components/breed-list/breed-list.component';
import { BreedCardComponent } from './components/breed-card/breed-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SubBreedInfoComponent } from './components/sub-breed-info/sub-breed-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    BreedCardComponent,
    NotFoundComponent,
    DetailComponent,
    SubBreedInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
