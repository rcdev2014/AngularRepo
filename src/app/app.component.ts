import { Component } from '@angular/core';
import {TestserviceService} from '../app/services/testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public readonly title = 'PracticeA1';

constructor(private  appService: TestserviceService){}
  ngOnInit()
  {
    this.appService.getallposts().subscribe(data => {
      console.log(JSON.stringify(data));
    }, (error) => {
      console.log('error occured: ', error);
    });
  }

}
