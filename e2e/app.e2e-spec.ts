import { ShppinglistPage } from './app.po';

describe('shppinglist App', () => {
  let page: ShppinglistPage;

  beforeEach(() => {
    page = new ShppinglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
