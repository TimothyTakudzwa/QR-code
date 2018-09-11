import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { WelcomePage } from "../welcome/welcome";
import { PayPage } from "../pay/pay";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = WelcomePage;
  tab2Root = PayPage;
  tab3Root = HomePage;
  tab4Root = SignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
  }
}
