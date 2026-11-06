import menuPage from './menu.page.js';

/**
 * Page/Screen Object para a tela Forms.
 */
class FormsPage {
    // Título da tela (xpath)
    get screenTitle() {
        return $('//android.widget.TextView[@text="Form components"]');
    }

    // Campo de texto e resultado espelhado (accessibilityId)
    get inputField() {
        return $('~text-input');
    }

    get inputTextResult() {
        return $('~input-text-result');
    }

    // Switch e texto de estado (accessibilityId)
    get switchToggle() {
        return $('~switch');
    }

    get switchText() {
        return $('~switch-text');
    }

    // Dropdown e valor selecionado (accessibilityId + xpath)
    get dropdown() {
        return $('~Dropdown');
    }

    get dropdownSelectedInput() {
        return $('//*[@content-desc="Dropdown"]//android.widget.EditText');
    }

    // Lista nativa de opções do Dropdown (id)
    get dropdownListView() {
        return $('id=com.wdiodemoapp:id/select_dialog_listview');
    }

    // Botões Active e Inactive (accessibilityId)
    get btnActive() {
        return $('~button-Active');
    }

    get btnInactive() {
        return $('~button-Inactive');
    }

    dropdownOptionByText(optionText) {
        return $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${optionText}"]`);
    }

    async navigate() {
        await menuPage.openForms();
        await this.screenTitle.waitForDisplayed();
    }

    async fillInputField(text) {
        await this.inputField.waitForDisplayed();
        await this.inputField.setValue(text);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async toggleSwitch() {
        await this.switchToggle.waitForDisplayed();
        await this.switchToggle.click();
    }

    async selectDropdownOption(optionText) {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.click();
        const option = this.dropdownOptionByText(optionText);
        await option.waitForDisplayed();
        await option.click();
    }

    async tapActiveButton() {
        await this.btnActive.waitForDisplayed();
        await this.btnActive.click();
    }
}

export default new FormsPage();

