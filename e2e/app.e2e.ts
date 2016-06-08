import { PoulePage } from './app.po';

describe('poule App', function() {
  let page: PoulePage;

  beforeEach(() => {
    page = new PoulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('poule works!');
  });
});
