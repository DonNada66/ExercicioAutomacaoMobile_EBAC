import { expect } from '@wdio/globals';
import swipePage from '../pageobjects/swipe.page.js';

describe('Funcionalidade: Gestos de Swipe', () => {
    beforeEach(async () => {
        await swipePage.navigate();
    });

    it('Deve deslizar horizontalmente o carrossel para exibir o próximo card', async () => {
        await expect(swipePage.cardTitleByText('FULLY OPEN SOURCE')).toBeDisplayed();

        await swipePage.swipeCarouselLeft();

        await expect(swipePage.cardTitleByText('GREAT COMMUNITY')).toBeDisplayed();
    });

    it('Deve rolar a tela verticalmente até encontrar o mascote escondido do WebdriverIO', async () => {
        await swipePage.scrollDownUntilLogoVisible();

        await expect(swipePage.wdioLogo).toBeDisplayed();
        await expect(swipePage.foundMeText).toBeDisplayed();
    });
});

