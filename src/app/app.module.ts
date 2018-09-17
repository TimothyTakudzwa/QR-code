import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AccountPage } from "../pages/account/account";

import { NgxQRCodeModule } from "ngx-qrcode2";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { WelcomePage } from "../pages/welcome/welcome";
import { PayPage } from "../pages/pay/pay";
import { CallNumber } from "@ionic-native/call-number";
import { CardIO } from "@ionic-native/card-io";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    WelcomePage,
    AccountPage,
    PayPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    WelcomePage,
    AccountPage,
    TabsPage,
    PayPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    CallNumber,
    AuthServiceProvider,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    CardIO
  ]
})
export class AppModule {}
