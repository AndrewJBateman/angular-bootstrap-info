import { Component } from '@angular/core';
import { InfoService } from './services/info.service';
import { ApiResponse } from './models/info.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'infoApp';
  p: number = 1;
  public infoObject$: Observable<ApiResponse>;
  public offset = '0';
  public limit = '100';

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoObject$ = this.infoService.getInfo(this.offset, this.limit);
  }

  trackByFn(index: number, data: any): number {
    return data;
  }
}
