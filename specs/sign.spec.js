import SignPage from '../pages/SignPage';

describe('Home page', () => {
  it('should navigate to sign page', () => {
    SignPage.open('/');
    SignPage.locationToBe('/');
  });

  it('user can not submit empty login', () => {
    SignPage.submitForm('', 'successful-password');
    expect(SignPage.formValidationErrors.isDisplayed()).to.equal(true);
  });

  it('user can not continue with empty password', () => {
    SignPage.submitForm('successful-login', '');
    expect(SignPage.formValidationErrors.isDisplayed()).to.equal(true);
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
