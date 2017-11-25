import { GameShopPage } from './app.po';

describe('game-shop App', () => {
  let page: GameShopPage;

  beforeEach(() => {
    page = new GameShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
