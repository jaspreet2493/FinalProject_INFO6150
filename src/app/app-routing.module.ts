import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { MenupageComponent } from './Pages/menupage/menupage.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { FoodComponent } from './Pages/food/food.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'menu', component:MenuComponent},
  {path: 'menu/:id',component:MenupageComponent},
  { path: 'about',component:AboutComponent},
  { path: 'contact',component:ContactComponent},
  { path: 'explore',component:ExploreComponent},
  { path: 'food',component:FoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
