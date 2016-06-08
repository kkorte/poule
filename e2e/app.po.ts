export class PoulePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poule-app h1')).getText();
  }
}
