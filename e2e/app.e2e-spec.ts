import { UiTestPage } from './app.po';

describe('ui-test App', () => {
  let page: UiTestPage;

  beforeEach(() => {
    page = new UiTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
