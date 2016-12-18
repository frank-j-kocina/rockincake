import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Component} from '@angular/core';
import {MainComponent} from './main';
import {FooterComponent} from './footer';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {inject, async, TestComponentBuilder} from '@angular/core/testing';

@Component({
  selector: 'fountain-footer',
  template: ''
})
class MockFooterComponent {}
@Component({
  selector: 'fountain-header',
  template: ''
})
class MockHeaderComponent {}
@Component({
  selector: 'fountain-title',
  template: ''
})
class MockTitleComponent {}

describe('main component', () => {
  it('should render the header, title, and footer', async(inject([TestComponentBuilder], tcb => {
    tcb
      .overrideDirective(MainComponent, FooterComponent, MockFooterComponent)
      .overrideDirective(MainComponent, HeaderComponent, MockHeaderComponent)
      .overrideDirective(MainComponent, TitleComponent, MockTitleComponent)
      .createAsync(MainComponent)
      .then(fixture => {
        fixture.detectChanges();
        const main = fixture.nativeElement;
        expect(main.querySelector('fountain-header')).toBeDefined();
        expect(main.querySelector('fountain-title')).toBeDefined();
        expect(main.querySelector('fountain-footer')).toBeDefined();
      });
  })));
});
