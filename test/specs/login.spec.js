import { expect } from '@wdio/globals';
import loginPage from '../pageobjects/login.page.js';
import menuPage from '../pageobjects/menu.page.js';

describe('Funcionalidade: Login e Cadastro (Sign Up)', () => {
    beforeEach(async () => {
        await loginPage.navigate();
    });

    it('Deve realizar cadastro (Sign Up) com sucesso', async () => {
        await loginPage.signUp('gabrieldonada@ebac.com', 'Senha@1234');

        await expect(menuPage.alertTitle).toHaveText('Signed Up!');
        await expect(menuPage.alertMessage).toHaveText('You successfully signed up!');
        await menuPage.confirmAlert();
    });

    it('Deve realizar login com credenciais válidas', async () => {
        await loginPage.login('gabrieldonada@ebac.com', 'Senha@1234');

        await expect(menuPage.alertTitle).toHaveText('Success');
        await expect(menuPage.alertMessage).toHaveText('You are logged in!');
        await menuPage.confirmAlert();
    });

    it('Deve exibir mensagens de erro ao tentar login com dados inválidos', async () => {
        await loginPage.login('email-invalido', '123');

        await expect(loginPage.invalidEmailError).toBeDisplayed();
        await expect(loginPage.invalidPasswordError).toBeDisplayed();
    });
});

