import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, take, tap } from 'rxjs/operators';

import { ApiResponse, ApiData } from '../models/info.model';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiResponseData: Observable<ApiResponse>;

  constructor(public http: HttpClient) {}

  // offset set to 0, limit set to 100
  public getInfo(offset: string, limit: string): Observable<any>{
    const apiKey = environment.API_KEY;
    const baseUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;
    const languageOption = 'fr';
    const countryOption = 'fr';
    const sortOption = 'published_desc';
    const apiUrl = `${baseUrl}&language=${languageOption}&countries=${countryOption}&sort=${sortOption}&${offset}&${limit}`;

    return this.http.get<ApiResponse>(apiUrl).pipe(
      take(1),
      tap(res => console.log(res)),
      map(res => res['data']),
      catchError(err => {
        throw 'an error occured: ' + err;
      }),
    );
  }
}
