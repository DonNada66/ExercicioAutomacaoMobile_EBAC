/**
 * Screen Object representando o menu inferior de navegação e diálogos nativos compartilhados
 * do aplicativo WDIO Native Demo App.
 */
class MenuPage {
    // Estratégia: accessibilityId (~) para abas do menu inferior
    get tabHome() {
        return $('~Home');
    }

    get tabLogin() {
        return $('~Login');
    }

    get tabForms() {
        return $('~Forms');
    }

    get tabSwipe() {
        return $('~Swipe');
    }

    get tabDrag() {
        return $('~Drag');
    }

    // Estratégia: id nativo do Android / aplicativo para alertas
    get alertTitle() {
        return $('id=com.wdiodemoapp:id/alert_title');
    }

    get alertMessage() {
        return $('id=android:id/message');
    }

    get alertOkButton() {
        return $('id=android:id/button1');
    }

    async openHome() {
        await this.tabHome.waitForDisplayed();
        await this.tabHome.click();
    }

    async openLogin() {
        await this.tabLogin.waitForDisplayed();
        await this.tabLogin.click();
    }

    async openForms() {
        await this.tabForms.waitForDisplayed();
        await this.tabForms.click();
    }

    async openSwipe() {
        await this.tabSwipe.waitForDisplayed();
        await this.tabSwipe.click();
    }

    async openDrag() {
        await this.tabDrag.waitForDisplayed();
        await this.tabDrag.click();
    }

    async getAlertText() {
        await this.alertMessage.waitForDisplayed();
        return this.alertMessage.getText();
    }

    async confirmAlert() {
        await this.alertOkButton.waitForDisplayed();
        await this.alertOkButton.click();
    }
}

export default new MenuPage();

