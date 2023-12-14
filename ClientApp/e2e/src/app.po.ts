import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getMainHeading() {
    return await element(by.css('app-root h1')).getText();
  }
}