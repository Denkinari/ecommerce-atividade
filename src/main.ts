import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements} from 'swiper/element/bundle';

registerSwiperElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


function selectOption(item: HTMLElement): void {
    const selectedOption: string = item.textContent || '';
    const dropdown = item.closest('.dropdown');
    if (dropdown) {
       const dropdownToggle: HTMLElement | null = dropdown.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
          dropdownToggle.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE)  {
                        node.textContent = selectedOption;
            }
          })
        }
    }
}

const dropdownItems: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-menu li');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        selectOption(item);
    });
});