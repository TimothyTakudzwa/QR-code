import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";

let apiUrl = "http://0ca61b62.ngrok.io/api/";

@Injectable()
export class AuthServiceProvider {
  data: string;
  public objects: any;
  constructor(public http: Http) {
    this.objects = null;
    console.log("Hello AuthService Provider");
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http
        .post(apiUrl + type, credentials, { headers: headers })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
