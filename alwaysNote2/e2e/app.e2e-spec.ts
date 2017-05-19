import { AlwaysNote2Page } from './app.po';

describe('always-note2 App', () => {
  let page: AlwaysNote2Page;

  beforeEach(() => {
    page = new AlwaysNote2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
