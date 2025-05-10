import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-uic',
  templateUrl: './uic.component.html',
  styleUrls: ['./uic.component.css']
})
export class UicComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    const nextBtn = document.querySelector('.next') as HTMLElement | null;
    const prevBtn = document.querySelector('.prev') as HTMLElement | null;

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        if (slide && items.length > 0) {
          slide.appendChild(items[0]);
        }
      });

      prevBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        if (slide && items.length > 0) {
          slide.prepend(items[items.length - 1]);
        }
      });
    }
  }
}