import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import{ id } from "../all-modules-data/id"
import { AllModulesData } from "../all-modules-data/all-modules-data";
@Injectable({
  providedIn: "root",
})
export class AllModulesService {
  // Api Methods for All modules

  public apiurl:any

  // Headers Setup
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  // Handling Errors
  private handleError(error: any) {
    return throwError(error);
  }

  // Get Method Api
  get(type:any): Observable<AllModulesData[]> {
    this.apiurl = `api/${type}`;

    return this.http
      .get<AllModulesData[]>(this.apiurl)
      .pipe(tap(), catchError(this.handleError));
  }

  // Post Method Api
  add(user: any, type:any): Observable<any> {
    this.apiurl = `api/${type}`;
    user.id = null;
    return this.http
      .post<any>(this.apiurl, user, this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  // Update Method Api
  update(user: any, type:any): Observable<any> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Delete Method Api
  delete(id: id, type:any): Observable<id> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<id>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
