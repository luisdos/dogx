import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AppComponent } from './app.component';
import { BreedListComponent } from './components/breed-list/breed-list.component';

const routes: Routes = [
  { path: '', component: BreedListComponent },
  {
    path: 'detail/:breed',
    component: DetailComponent
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
