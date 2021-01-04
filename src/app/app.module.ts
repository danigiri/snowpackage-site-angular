import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ColComponent } from './col/col.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExtraLinkComponent } from './extra-link/extra-link.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImgTextComponent } from './img-text/img-text.component';
import { MenuComponent } from './menu/menu.component';
import { RowComponent } from './row/row.component';
import { SearchComponent } from './search/search.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ColComponent,
    CopyrightComponent,
    ExperimentComponent,
    ExtraLinkComponent,
    FooterComponent,
    HeaderComponent,
    ImgTextComponent,
    MenuComponent,
    RowComponent,
    SearchComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
