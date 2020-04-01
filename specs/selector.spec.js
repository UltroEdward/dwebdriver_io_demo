import SchoolSelector from '../pages/SchoolSelector'

describe('Home page', () => {
  before('open welcome page', () => {
    SchoolSelector.open('/');
    SchoolSelector.locationToBe('/');
  })

  it('user can not submit form with empty school', () => {
    SchoolSelector.submitForm('', 'Test district');
    expect(SchoolSelector.formValidationErrors.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with empty district', () => {
    SchoolSelector.submitForm('Test school', '');
    expect(SchoolSelector.formValidationErrors.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with empty data', () => {
    SchoolSelector.submitForm('', '');
    expect(SchoolSelector.formValidationErrors.isDisplayed()).to.equal(true);
  })

  it('user can submit form', () => {
    SchoolSelector.submitForm('Test school, test district');
    expect(SchoolSelector.formSuccessMessage.isDisplayed()).to.equal(true);
  });
});
