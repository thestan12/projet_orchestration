import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('ESGI CI');
  });

  it('should display Welcome message', () => {
    page.navigateTo();
    expect(page.getWelcomeText()).toEqual('Bonjour Admin');
  });

});
