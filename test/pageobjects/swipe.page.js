import menuPage from './menu.page.js';

/**
 * Page/Screen Object para a tela Swipe (carrossel horizontal e rolagem vertical).
 */
class SwipePage {
    get screenTitle() {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }

    get carousel() {
        return $('//*[@resource-id="Carousel"]');
    }

    get wdioLogo() {
        return $('~WebdriverIO logo');
    }

    get foundMeText() {
        return $('//android.widget.TextView[@text="You found me!!!"]');
    }

    cardTitleByText(title) {
        return $(`//android.widget.TextView[@text="${title}"]`);
    }

    async navigate() {
        await menuPage.openSwipe();
        await this.screenTitle.waitForDisplayed();
    }

    async swipeCarouselLeft() {
        await this.carousel.waitForDisplayed();
        const location = await this.carousel.getLocation();
        const size = await this.carousel.getSize();
        const startX = Math.round(location.x + size.width * 0.85);
        const endX = Math.round(location.x + size.width * 0.15);
        const centerY = Math.round(location.y + size.height * 0.5);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: centerY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 150 },
                    { type: 'pointerMove', duration: 500, x: endX, y: centerY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.releaseActions();
    }

    async scrollDownUntilLogoVisible(maxSwipes = 10) {
        const { width, height } = await driver.getWindowRect();
        const centerX = Math.round(width * 0.5);
        const endY = Math.round(height * 0.15);

        for (let i = 0; i < maxSwipes; i++) {
            const logoVisible = await this.wdioLogo.isDisplayed().catch(() => false);
            const textVisible = await this.foundMeText.isDisplayed().catch(() => false);
            if (logoVisible && textVisible) {
                return;
            }

            // Evita iniciar o toque dentro do carrossel horizontal, escolhendo a área livre acima ou abaixo dele
            let startY = Math.round(height * 0.8);
            const carouselVisible = await this.carousel.isDisplayed().catch(() => false);
            if (carouselVisible) {
                const loc = await this.carousel.getLocation();
                const size = await this.carousel.getSize();
                if (loc.y > height * 0.45) {
                    startY = Math.max(Math.round(loc.y - 60), Math.round(height * 0.35));
                } else {
                    startY = Math.min(Math.round(loc.y + size.height + 80), Math.round(height * 0.88));
                }
            }

            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: centerX, y: startY },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 50 },
                        { type: 'pointerMove', duration: 300, x: centerX, y: endY },
                        { type: 'pointerUp', button: 0 }
                    ]
                }
            ]);
            await driver.releaseActions();
        }
    }
}

export default new SwipePage();
