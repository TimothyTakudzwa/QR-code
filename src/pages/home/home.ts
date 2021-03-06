import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { CallNumber } from "@ionic-native/call-number";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  qrData = null;
  name = null;
  amount = null;
  calls = null;
  mode = null;
  number = null;
  new_amount = null;
  createdCode = null;
  scannedCode = null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private callNumber: CallNumber
  ) {}

  createCode() {
    this.qrData =
      this.mode + "&" + this.name + "&" + this.amount + "&" + this.number;
    let x = this.qrData.split("&");
    this.new_amount = x[0];
    this.createdCode = this.qrData;
  }
  calling() {
    this.callNumber
      .callNumber(this.number, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
   
  }
  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      },
      err => {
        console.log("Error: ", err);
      }
    );
  }
}
