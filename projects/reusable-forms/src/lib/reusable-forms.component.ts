import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rf-reusable-forms',
  templateUrl: './reusable-forms.component.html',
  styleUrls: ['reusable-forms.component.scss'],
})
export class ReusableFormsComponent {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Reusable Forms - NgDemo');
  }
}
