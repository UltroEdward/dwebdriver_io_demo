import BasePage from './BasePage'

export class SchoolSelector extends BasePage {
    get startContainer() {
        return $('.div-root-3')
    }

    get submitContainer() {
        return $('.div-root-180')
    }

    get startButton() {
        return this.startContainer.$('.MuiBaseButton-root')
    }

    get schoolInput() {
        return $('#school-state-select')
    }

    get districtInput() {
        return $('#school-district-select')
    }

    get submitButton() {
        return this.submitContainer.$('button')
    }

    submitForm(school: String, district: String) {
        this.schoolInput.setValue(school);
        this.districtInput.setValue(district);
        browser.waitUntil(() => this.submitButton.isClickable(), 5000)
        this.submitButton.click()
    }

    get formValidationErrors() {
        return this.submitContainer.$('.validation-errors')
    }

    get formSuccessMessage() {
        return this.submitContainer.$('.success')
    }
}

export default new SchoolSelector()
