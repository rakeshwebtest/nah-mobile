import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppHttpClient, AppHttpClientCreator, HttpInterceptorService } from './utils';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChooseUserGroupsComponent } from './sign-in/choose-user-groups/choose-user-groups.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { GroupCreateModalComponent } from './group-create-modal/group-create-modal.component';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedProfileEditModule } from './shared/shared-profile-edit.module';
import { DashboardModule } from './dashboard/dashboard.module';

// driverOrder: ['indexeddb', 'sqlite', 'websql']
// IonicStorageModule.forRoot({
//   name: '__nah',
//   driverOrder: ['indexeddb', 'sqlite', 'websql','localstorage']
// }),


@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, ChooseUserGroupsComponent, GroupCreateModalComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SharedProfileEditModule,
    DashboardModule,
    IonicModule.forRoot(
      {
        backButtonText: ''
      }
    ),
    IonicSelectableModule,
    IonicStorageModule.forRoot(
      {
        name: '__nah',
        driverOrder: ['localstorage']
      }
    )
  ],
  entryComponents: [GroupCreateModalComponent],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    AuthGuard,
    GoogleAnalytics,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: AppHttpClient,
      useFactory: AppHttpClientCreator,
      deps: [HttpClient]
    }, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
