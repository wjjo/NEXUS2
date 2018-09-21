
import { PageFooterComponent } from './components/pages/page-footer/page-footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// NG Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import 'reflect-metadata';
import 'zone.js/dist/zone-mix';
import '../polyfills';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WebviewDirective } from './directives/webview.directive';
import { ElectronService } from './providers/electron.service';
import { CustomRadioComponent } from './components/common/custom-radio/custom-radio.component';
import { InstallTypeSelectionPageComponent } from './components/pages/install-type-selection-page/install-type-selection-page.component';
import { InstallDetailPageComponent } from './components/pages/install-detail-page/install-detail-page.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component';
import { DetailComponent } from './detail/detail.component';
import { DetachComponent } from './detach/detach.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    PageFooterComponent,
    CustomRadioComponent,
    InstallTypeSelectionPageComponent,
    InstallDetailPageComponent,
    WelcomePageComponent,
    DetailComponent,
    DetachComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
