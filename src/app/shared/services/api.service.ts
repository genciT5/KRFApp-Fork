import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(link, headers, isPagination) {
    let route = !isPagination ? environment.apiLink + link : link;
    return this.http.get(route, headers);
  }

    // async get(link, headers, isPagination) {
    //   let route = !isPagination ? environment.apiLink + link : link;
    //     let varaa = await this.http.get(route, headers).toPromise();
    //     console.log(varaa);
    //     return varaa;
    // }

  post(link, params, headers) {

    return this.http.post(environment.apiLink + link, params, headers)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(environment.apiLink + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(environment.apiLink + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts: any) {
    return this.http.patch(environment.apiLink + endpoint, body, reqOpts);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    let errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return errorData;
  }
}
