import {browser, by, element, WebDriver} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return browser.getTitle();
  }

  getWelcomeText() {
    return element(by.className('vertical-align welcome-message')).getText();
  }
}
