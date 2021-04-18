import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(public http: HttpClient) {}

  public getInfo(offset: string, limit: string) {
    const apiKey = '';
    const baseUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;
    const options = "sources=cnn,bbc&languages=en";
    const apiUrl = `${baseUrl}&${options}&offset=${offset}&limit=${limit}`;

    return this.http.get(apiUrl).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}
