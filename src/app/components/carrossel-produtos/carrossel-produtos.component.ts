import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';


@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [],
  templateUrl: './carrossel-produtos.component.html',
  styleUrl: './carrossel-produtos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class CarrosselProdutosComponent implements AfterViewInit{
  swiperParams1 = {
    slidesPerView: 1,

    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 32
      },
      1860: {
        slidesPerView: 5.5,
        spaceBetween: 100
      },
      2560: {
        slidesPerView: 6.5,
        spaceBetween: 32
      },
    },
    on: {
      init() {

      },
    },
  };

  constructor() {}


    ngAfterViewInit(): void {
      const swiperEl = document.querySelector('swiper-container')
    if(swiperEl) {
      Object.assign(swiperEl, this.swiperParams1)

    }
  }
}

