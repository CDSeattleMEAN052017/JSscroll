import { TaskandInputsPage } from './app.po';

describe('taskand-inputs App', () => {
  let page: TaskandInputsPage;

  beforeEach(() => {
    page = new TaskandInputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
