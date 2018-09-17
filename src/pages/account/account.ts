import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CardIO } from "@ionic-native/card-io";
import { AlertController } from "ionic-angular";
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export class AccountPage {
  cardNumber = null;
  redactedCardNo = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private cardIO: CardIO
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountPage");
  }

  scanButton() {
    this.cardIO
      .canScan()
      .then((res: boolean) => {
        if (res) {
          let options = {
            requireExpiry: false,
            requireCardholderName: false,
            scanExpiry: true,
            keepApplicationTheme: true,
            guideColor: "#296d96"
          };
          return this.cardIO.scan(options);
        }
      })
      .then(
        res => {
          console.log(res);
          this.cardNumber = res.cardNumber;
          this.redactedCardNo = res.redactedCardNumber;

          this.setCardData(res);
        },
        err => {}
      );
  }

  model = {
    cardType: "",
    cardNumber: "",
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    expireDate: "",
    redactedCardNumber: ""
  };
  setCardData(data: any) {
    this.model.cardType = data.cardType;
    this.model.cardholderName = data.cardholderName;
    this.model.cardNumber = data.cardNumber;
    this.model.expiryMonth = data.expiryMonth;
    this.model.redactedCardNumber = data.redactedCardNumber;
    this.model.expiryYear = data.expiryYear;
    this.model.expireDate = data.expiryMonth + "/" + data.expiryYear;
  }
  nextStage() {
    let alert = this.alertCtrl.create({
      title: "Success",
      message: "Card Details Captured Succesfully",
      buttons: [
        {
          text: "Add ",

          handler: () => {
            console.log("Cancel clicked"); 
          }
        },
        {
          text: "Next ",
          handler: () => {
            console.log("Buy clicked");
          }
        }
      ]
    });
    alert.present();
  }
}
