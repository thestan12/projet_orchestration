import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {routes} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.module';
import {HomeComponent} from './core/components/home/home.component';
import {LoginComponent} from './core/components/login/login.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {HeaderComponent} from './core/components/header/header.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {SearchSomethingComponent} from './core/components/search-something/search-something.component';
import {NoNamePipe} from './core/services/pipes/no-name.pipe';
import {LocalStorageService} from './core/services/localstorage/localstorage.service';
import {MessageService} from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        ButtonModule,
        ToastModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        SearchSomethingComponent,
        NoNamePipe
      ],
      providers: [
        LocalStorageService,
        TranslateService,
        TranslateStore,
        MessageService,
        NoNamePipe
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  //
  it(`should have as title 'correction'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('correction');
  });
});
