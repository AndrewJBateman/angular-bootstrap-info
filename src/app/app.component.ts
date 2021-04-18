import { Component } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'infoApp';
  p: number = 1;
  public infoObject = [];
  public offset = '0';
  public limit = '100';

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfo(this.offset, this.limit).subscribe((res) => {
      console.log('API info returned', res);
      this.infoObject = res.data;
    });
  }
}
