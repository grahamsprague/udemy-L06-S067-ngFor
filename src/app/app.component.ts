import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 0, name: 'course 1' },
    { id: 1, name: 'course 2' },
    { id: 2, name: 'course 3' },
  ];
}
