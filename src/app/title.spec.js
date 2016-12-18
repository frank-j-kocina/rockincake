import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {TitleComponent} from './title';
import {inject, async, TestComponentBuilder} from '@angular/core/testing';

describe('title component', () => {
  it('should render Contact us', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(TitleComponent)
      .then(fixture => {
        fixture.detectChanges();
        const title = fixture.nativeElement;
        expect(title.querySelector('h2').textContent.trim()).toBe('Contact us today for your beautiful, delicious cakes and cupcakes!');
      });
  })));
});
