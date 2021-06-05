import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry, take } from 'rxjs/operators';

import { ApiResponse, ApiData } from '../models/info.model';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiResponseData: Observable<ApiData[]>;

  constructor(public http: HttpClient) {}

  public getInfo(offset: string, limit: string): Observable<any> {
    const apiKey = environment.API_KEY;
    const baseUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;
    const options = 'sources=cnn,bbc&languages=en';
    const apiUrl = `${baseUrl}&${options}&offset=${offset}&limit=${limit}`;

    this.apiResponseData = this.http.get<ApiResponse>(apiUrl).pipe(
      take(1),
      map(res => res.data),
      catchError((err) => {
        return throwError(
          'There was a problem fetching data from the API, error: ',
          err
        );
      })
    );
    console.log('this.apiResponseData', this.apiResponseData);
    return this.apiResponseData;
  }
}
