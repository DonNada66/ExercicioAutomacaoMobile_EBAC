import { expect } from '@wdio/globals';
import formsPage from '../pageobjects/forms.page.js';
import menuPage from '../pageobjects/menu.page.js';

describe('Funcionalidade: Formulários (Forms)', () => {
    it('Deve preencher os componentes do formulário e validar seus estados', async () => {
        await formsPage.navigate();
        await expect(formsPage.screenTitle).toBeDisplayed();

        // 1. Preenchimento do campo de texto e validação do resultado espelhado
        await formsPage.fillInputField('Automação Mobile WDIO');
        await expect(formsPage.inputTextResult).toHaveText('Automação Mobile WDIO');

        // 2. Alternância do Switch e validação do texto de estado
        await expect(formsPage.switchText).toHaveText('Click to turn the switch ON');
        await formsPage.toggleSwitch();
        await expect(formsPage.switchText).toHaveText('Click to turn the switch OFF');

        // 3. Seleção de opção no Dropdown e validação do valor selecionado
        await formsPage.selectDropdownOption('webdriver.io is awesome');
        await expect(formsPage.dropdownSelectedInput).toHaveText('webdriver.io is awesome');

        // 4. Acionamento do botão Active e validação do alerta nativo
        await formsPage.tapActiveButton();
        await expect(menuPage.alertMessage).toHaveText('This button is active');
        await menuPage.confirmAlert();
    });
});

