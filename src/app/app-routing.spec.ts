import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {routes} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/components/home/home.component';
import {LoginComponent} from './core/components/login/login.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {HeaderComponent} from './core/components/header/header.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {SearchSomethingComponent} from './core/components/search-something/search-something.component';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {NoNamePipe} from './core/services/pipes/no-name.pipe';
import {LocalStorageService} from './core/services/localstorage/localstorage.service';
import {HttpLoaderFactory} from './app.module';
import {MessageService} from 'primeng/api';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
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
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "" should create HomeComponent', fakeAsync(() => {
        router.navigate(['']).then(() => {
            const routing = TestBed.createComponent(HomeComponent);
            const app = routing.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
    }));
});
