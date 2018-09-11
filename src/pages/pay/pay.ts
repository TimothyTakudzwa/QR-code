import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { CallNumber } from "@ionic-native/call-number";
/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-pay",
  templateUrl: "pay.html"
})
export class PayPage {
  qrData = null;
  name = null;
  amount = null;
  mode = null;
  short_code = null;
  number = null;
  new_amount = null;
  createdCode = null;
  scannedCode = null;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private callNumber: CallNumber
  ) {}

  createCode() {
    this.createdCode = this.qrData;
  }
  calling() {
    this.short_code = "*151*1*1*" + this.number + "*" + this.amount + "#";
    this.callNumber
      .callNumber(this.short_code, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
        let x = this.scannedCode.split("&");
        this.mode = x[0];
        this.name = x[1];
        this.amount = x[2];
        this.number = x[3];
      },
      err => {
        console.log("Error: ", err);
      }
    );
  }
}
