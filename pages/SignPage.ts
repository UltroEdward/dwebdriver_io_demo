import BasePage from './BasePage';

export class SignPage extends BasePage {
    get signForm() {
        return $('form');
    }

    get usernameInput() {
        return this.signForm.$('input[name="username"]');
    }

    get passwordInput() {
        return this.signForm.$('input[name="password"]');
    }

    get submitButton() {
        return this.signForm.$('.root-221').$('button');
    }

    submitCredentials(login: String, password: String) {
        this.usernameInput.setValue(login);
        this.passwordInput.setValue(password);
        browser.waitUntil(() => this.submitButton.isClickable(), 5000, 'element is not clickable after 5 seconds');
        this.submitButton.click();
    }

    get formValidationErrors() {
        return this.signForm.$('.validation-errors');
    }

    get loginValidationError() {
        return this.formValidationErrors.$('.login-error');
    }

    get passwordValidationError() {
        return this.formValidationErrors.$('.password-error');
    }

    get formSuccessMessage() {
        return this.signForm.$('.success');
    }
}

export default new SignPage();
