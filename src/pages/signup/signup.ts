import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AccountPage } from "../account/account";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { LoadingController } from "ionic-angular";
import { AlertController } from "ionic-angular";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  userData = {
    name: "",
    surname: "",
    age: "",
    sex: "",
    id_number: "",
    mobile_number: "",
    physical_address: ""
  };
  responseData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    public authService: AuthServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  gotoAccountPage() {
    let loader = this.loadingController.create({
      content: "Loading..."
    });
    loader.present();
    this.authService.postData(this.userData, "basic").then(
      result => {
        this.responseData = result;
        console.log(this.responseData);

        this.responseData = result;
        if (this.responseData.message == 0) {
          loader.dismiss();

          this.showAlert();
        } else {
          loader.dismiss();
          this.showAlert();
          this.navCtrl.push(AccountPage);
        }
      },
      err => {
        // Error log
      }
    );
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: "Success",
      subTitle: "Data has been succesfully uploaded",
      buttons: [
        {
          text: "Add More",
          handler: data => {}
        }
      ]
    });
    alert.present();
  }
}
