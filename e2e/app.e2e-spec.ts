import { ShamanNgPage } from './app.po';

describe('shaman-ng App', () => {
  let page: ShamanNgPage;

  beforeEach(() => {
    page = new ShamanNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
