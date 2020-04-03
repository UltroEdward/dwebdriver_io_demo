import SchoolSelector from '../pages/SchoolSelector';

const school = 'Test school';
const district = 'Test district';

describe('Home page', () => {
  before('open welcome page', () => {
    SchoolSelector.open('/');
    SchoolSelector.locationToBe('/');
  });

  it('user can not submit form with empty school', () => {
    SchoolSelector.submitForm('', district);
    expect(SchoolSelector.schoolValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with invalid school', () => {
    SchoolSelector.submitForm('s', district);
    expect(SchoolSelector.schoolValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with empty district', () => {
    SchoolSelector.submitForm(school, '');
    expect(SchoolSelector.districtValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with invalid district', () => {
    SchoolSelector.submitForm(school, 'd');
    expect(SchoolSelector.districtValidationError.isDisplayed()).to.equal(true);
  });

  it('user can not submit form with empty data', () => {
    SchoolSelector.submitForm('', '');
    expect(SchoolSelector.formValidationErrors.isDisplayed()).to.equal(true);
  })

  it('user can submit form', () => {
    SchoolSelector.submitForm(school, district);
    expect(SchoolSelector.formSuccessMessage.isDisplayed()).to.equal(true);
  });
});
