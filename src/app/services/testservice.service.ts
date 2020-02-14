import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { ITest } from "../Interface/ITest";
import { map, tap, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TestserviceService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) {}

  getallposts(): Observable<ITest> {
    return this.http
      .get<ITest>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log("error on api url");
    return throwError(error);
  }
}
