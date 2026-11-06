import { expect } from '@wdio/globals';
import dragPage from '../pageobjects/drag.page.js';

describe('Funcionalidade: Drag and Drop', () => {
    it('Deve montar o quebra-cabeça completo arrastando todas as peças', async () => {
        await dragPage.navigate();
        await expect(dragPage.screenTitle).toBeDisplayed();

        await dragPage.solvePuzzle();

        await expect(dragPage.congratulationsTitle).toBeDisplayed();
        await expect(dragPage.congratulationsMessage).toHaveText(
            'You made it, click retry if you want to try it again.'
        );
        await expect(dragPage.btnRetry).toBeDisplayed();
    });
});

