import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-table-hover';
  hover = 0;

  items = [
    {
      id: 1,
      name: 'Luiz',
      role: 'Desenvolvedor Front-end',
      phone: '(51) 99103-1355',
    },
    {
      id: 2,
      name: 'Jeff',
      role: 'Desenvolvedor Front-end',
      phone: '(51) 99103-1355',
    },
    {
      id: 3,
      name: 'João',
      role: 'Desenvolvedor Front-end',
      phone: '(51) 99103-1355',
    },
  ];

  mouseOver(item: any) {
    this.hover = item.id;
  }

  mouseOut(item: any) {
    if (item.id === this.hover) {
      this.hover = 0;
    }
  }
}
