// Upgrade to Angular 8

import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo(); // Update to async/await syntax
  });

  it('should display welcome message', async () => {
    // Update to async/await syntax for expect statement
    expect(await page.getMainHeading()).toEqual('Hello, world!');
  });
});