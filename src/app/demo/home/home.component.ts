import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'core';

@Component({
  standalone: true,
  selector: 'ng-demo-home',
  imports: [RouterModule, CoreModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'ng-demo';
}
