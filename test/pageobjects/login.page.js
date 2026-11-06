import menuPage from './menu.page.js';

/**
 * Page/Screen Object para as telas de Login e Cadastro (Sign Up).
 */
class LoginPage {
    // Abas internas da tela de Login/Sign Up (accessibilityId)
    get tabLoginForm() {
        return $('~button-login-container');
    }

    get tabSignUpForm() {
        return $('~button-sign-up-container');
    }

    // Campos de entrada (accessibilityId)
    get inputEmail() {
        return $('~input-email');
    }

    get inputPassword() {
        return $('~input-password');
    }

    get inputRepeatPassword() {
        return $('~input-repeat-password');
    }

    // Botões de ação (accessibilityId)
    get btnLogin() {
        return $('~button-LOGIN');
    }

    get btnSignUp() {
        return $('~button-SIGN UP');
    }

    // Mensagens de validação inline (xpath)
    get invalidEmailError() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get invalidPasswordError() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    get passwordMismatchError() {
        return $('//android.widget.TextView[@text="Please enter the same password"]');
    }

    async navigate() {
        await menuPage.openLogin();
    }

    async login(email, password) {
        await this.tabLoginForm.waitForDisplayed();
        await this.tabLoginForm.click();
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async signUp(email, password, confirmPassword = password) {
        await this.tabSignUpForm.waitForDisplayed();
        await this.tabSignUpForm.click();
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(confirmPassword);
        await this.btnSignUp.click();
    }
}

export default new LoginPage();

