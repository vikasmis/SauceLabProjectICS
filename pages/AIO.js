let browser =require('../node_modules')
var AIO = function () {
    this.personalInformation = {
        acceptButton: $('[translate="minimalDemands.acceptButton"]'),
        submit: $('.button-promise '),
        personalTitle: $$('[translate="WORLD.apply-for-credit-card.personal.title"]').get(0),
        sexMale: $('[translate="apply-for-credit-card.personal.salutation.male"]'),
        sexFemale: $('[translate="apply-for-credit-card.personal.salutation.female"]'),
        initials: $$('[id="initials"]').get(0),
        firstName: $('[name="firstNames"]'),
        lastName: $$('[id="surname"]').get(0),
        maritalState: $$('[name="maritalState"]'),
        birthDate: $('[name="birthDate"]'),
        nationality: $('[name="nationality"]'),
        zipCode: $('[id="zipCode.numeric"]'),
        zipcodeA: $('[id="zipCode.alphabetic"]'),
        houseNo: $('[id="houseNumber"]'),
        telephoneNumberMobile: $('[id="telephoneNumberMobile"]'),
        emailAddress: $('[id="emailAddress"]'),
        confirmEmail: $('[id="confirmEmailAddress"]'),
        password: $('[id="Password"]'),
        confirmPassword: $('[name="ConfirmPassword"]'),
        contentCheck: $('[translate="apply-for-credit-card.personal.footer"]'),
        contentValue: "Wij behandelen uw gegevens zorgvuldig in overeenstemming met ons Privacy Statement [pdf]. Mogelijk nemen wij contact met u op als het formulier niet volledig is. Zodra u op 'Naar stap 2' klikt, zullen wij een BKR-toets uitvoeren om uw aanvraag te beoordelen.",
        submitButton: $('[name="submit"]'),
    }
};

module.exports = new AIO();