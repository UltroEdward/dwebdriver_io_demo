import SignPage from '../pages/SignPage';

const login = 'successful-login';
const password = 'successful-password;'

describe('Home page', () => {
  it('should navigate to sign page', () => {
    SignPage.open('/');
    SignPage.locationToBe('/');
  });

  it('user can not submit empty login', () => {
    SignPage.submitForm('', password);
    expect(SignPage.loginValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit invalid login', () => {
    SignPage.submitForm('l', password);
    expect(SignPage.loginValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit empty password', () => {
    SignPage.submitForm(login, '');
    expect(SignPage.passwordValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit invalid password', () => {
    SignPage.submitForm(login, 'p');
    expect(SignPage.passwordValidationError.isDisplayed()).to.equal(true);
  });

  it('user see error with wrong credentials', () => {
    SignPage.submitForm('', '');
    expect(SignPage.formValidationErrors.isDisplayed()).to.equal(true);
  });

  it('user can submit credentials', () => {
    SignPage.submitForm('successful-login', 'successful-password');
    expect(SignPage.formSuccessMessage.isDisplayed()).to.equal(true);
  });
});
