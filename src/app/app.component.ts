import { Component } from '@angular/core';
import { TestLibService } from 'test-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wallabylictest';

  constructor(private testLib: TestLibService) {}
}
