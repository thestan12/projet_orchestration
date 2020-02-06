import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ConstantesService} from './services/constantes/constantes.service';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { SearchSomethingComponent } from './components/search-something/search-something.component';
import {TranslateModule} from '@ngx-translate/core';
import {NoNamePipe} from './services/pipes/no-name.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SearchSomethingComponent,
    NoNamePipe
  ],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [
    ConstantesService,
    MessageService,
    TranslateModule,
    NoNamePipe
  ]
})

export class CoreModule {
}
