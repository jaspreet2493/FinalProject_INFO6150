import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Sharepages/footer/footer.component';
import { NavbarComponent } from './Sharepages/navbar/navbar.component';
import { MenupageComponent } from './Pages/menupage/menupage.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { FoodComponent } from './Pages/food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    MenupageComponent,
    ExploreComponent,
    FoodComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
