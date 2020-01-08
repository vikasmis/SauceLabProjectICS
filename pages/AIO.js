const waitHelper = require('./wait.helper')
const testData= require('../testdata/EnvironmentCredentials')
class AIO {
    constructor() {
        this.personalInformation = {

            acceptbutton: $('[translate="minimalDemands.acceptButton"]'),
            submit: $('.button-promise '),
            personalTitle: $$('[translate="WORLD.apply-for-credit-card.personal.title"]').get(0),
            pageTitle: $('[translate=".apply-for-credit-card.personal.title"]'),
            personalPage: $('[translate="apply-for-credit-card.personal.personalSection"]'),
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
        this.CardsDetails = {
            title: $('[translate="WORLD.apply-for-credit-card.financial.title"]'),
            cardTitle: $('[id="creditCard"]'),
            spendingLimit: $('[name="spendingLimit"]'),
            desiredDirectDebitDay: $('[name="desiredDirectDebitDay"]'),
            employmentType: $('[name="employmentType"]'),
            companyFundOrInstituteName: $('[id="companyFundOrInstituteName"]'),
            companyFundOrInstituteCity: $('[id="companyFundOrInstituteCity"]'),
            employedSince: $('[ id="employedSince"]'),
            bonus: $('[translate="apply-for-credit-card.financial.annualBonus.no"]'),
            income: $('[id="income"]'),
            childrenFinanciallyResponsible: $('[name="childrenFinanciallyResponsible"]'),
            residenceType: $('[name="residenceType"]'),
            residentSince: $('[id="residentSince"]'),
            housingCosts: $('[id="housingCosts"]'),
            rentalAllowance: $('[id="rentalAllowance"]'),
            taxpay: $('[translate="apply-for-credit-card.financial.taxable.taxable.domestic"]'),
            iban: $('[id="iban"]'),
            extraCard: $('[translate="apply-for-credit-card.financial.extraCard.text"]'),
            salutationExtraCard: $('[translate="apply-for-credit-card.financial.salutationExtraCard.male"]'),
            initialsExtraCard: $('[id="initialsExtraCard"]'),
            firstNamesExtraCard: $('[id="firstNamesExtraCard"]'),
            surnameExtraCard: $('[id="surnameExtraCard"]'),
            birthDateExtraCard: $('[id="birthDateExtraCard"]'),
            zipCodeExtraCard: $('[id="zipCodeExtraCard.numeric"]'),
            zipCodeExtraCardA: $('[id="zipCodeExtraCard.alphabetic"]'),
            houseNumberExtraCard: $('[id="houseNumberExtraCard"]'),
            telephoneNumberMobileExtraCard: $('[id="telephoneNumberMobileExtraCard"]'),
            emailAddressExtraCard: $('[id="emailAddressExtraCard"]'),
            confirmEmailAddressExtraCard: $('[id="confirmEmailAddressExtraCard"]'),
            bankAccountNumberExtraCard: $('[id="bankAccountNumberExtraCard"]'),
            taxPayerForeign: $('[translate="apply-for-credit-card.financial.taxable.taxable.foreign"]'),
            dropDownTaxPayer: $('[name="foreignTaxIdentification-,taxResidency-0"]'),
            countrySelect: $('[value="string:AD"]'),
            tinNumber: $('[id="foreignTaxIdentification-tinNumber-0"]'),
            ForeignTinNumber: $('name="foreignTaxIdentification-tinNumber-1]'),
            ForeignCountry: $('[name="foreignTaxIdentification-taxResidency-1"]'),
            LandToevoegen: $('[translate="apply-for-credit-card.financial.foreignTaxIdentification.another"]')

        }
        this.idVerfication = {
            identification: $('[id="identification"]'),
            documentType: $('[name="documentType"]'),
            placeOfIssue: $('[id="placeOfIssue"]'),
            dateOfIssue: $('[id="dateOfIssue"]'),
            socialSecurityNumber: $('[id="socialSecurityNumber"]'),
            documentNumber: $('[id="documentNumber"]'),
            placeOfBirth: $('[id="placeOfBirth"]'),
            countryOfBirth: $('[name="countryOfBirth"]'),
            documentTypeExtraCard: $('[name="documentTypeExtraCard"]'),
            placeOfIssueExtraCard: $('[id="placeOfIssueExtraCard"]'),
            dateOfIssueExtraCard: $('[id="dateOfIssueExtraCard"]'),
            documentNumberExtraCard: $('[id="documentNumberExtraCard"]'),
            placeOfBirthExtraCard: $('[id="placeOfBirthExtraCard"]'),
            countryOfBirthExtraCard: $('[name="countryOfBirthExtraCard"]'),
            nationalityExtraCard: $('[name="nationalityExtraCard"]'),
        }
        this.summary = {
            summaryTitle: $('[translate="WORLD.apply-for-credit-card.summary.title"]'),
            acceptCheckBox: $('[translate="apply-for-credit-card.summary.acceptTerms.text"]'),
            termsAndConditions: $('[id="terms"]'),
            overviewButton: $('[translate="to.overview"]'),
            error: $('[translate="error.response.500"]'),
            conditions: 'Ik verklaar kennis te hebben genomen van het Privacy Statement. Ik verklaar alle gegevens naar waarheid te hebben verstrekt. Ik ben mij ervan bewust dat de door ICS aangeboden informatie niet kan worden opgevat als advies.'
        }
        this.toolTip = {
            iContent_Name: element(by.xpath('//*[@id="apply-for-credit-card.personal_firstNames"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            name: 'Vul al uw voornamen in zoals deze ook op uw paspoort of identiteitskaart vermeld staan.',
            iContent_maritalStatus: element(by.xpath('//*[@id="apply-for-credit-card.personal_maritalStatus"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            maritalStatus: 'Vul hier uw burgerlijke staat in.',
            iContent_Email: element(by.xpath('//*[@id="apply-for-credit-card.personal_emailAddress"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            email: 'Het invullen van het e-mailadres is van groot belang in verband met onze 24/7 Fraudepreventie. ICS houdt uw betalingen bij. Bij serieuze vermoedens van fraude nemen wij contact met u op om dit te controleren.',
            iContent_confirmEmail: element(by.xpath('//*[@id="apply-for-credit-card.personal_confirmEmailAddress"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            confirmEmail: 'Vul hier nogmaals uw e-mailadres in. Dit adres moet gelijk zijn aan het hierboven ingevulde e-mailadres.',
            iContent_spendingLimit: element(by.xpath('//*[@id="apply-for-credit-card.financial_spendingLimit"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            spendingLimit: 'Welk bestedingslimiet bij u past hangt af van uw financiële situatie. Houd er rekening mee dat u het limiet maandelijks kunt uitgeven, maar dan ook weer moet terugbetalen.',
            iContent_desiredDirectDebitDay: element(by.xpath('//*[@id="apply-for-credit-card.financial_desiredDirectDebitDay"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            desiredDirectDebitDay: 'Kies hier rond welke dag van de maand u wilt dat wij het openstaande saldo van uw bankrekening afschrijven. Let op: de eerste incasso zal enkele dagen later dan de door u ingevulde dag worden uitgevoerd.',
            iContent_EmployerName: element(by.xpath('//*[@id="apply-for-credit-card.financial_employerName"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            employerName: 'Vul hier de bedrijfsnaam van uw werkgever in. Let op: de volgende tekens zijn niet toegestaan: % * ! ? = $ # ^ ~',
            iContect_Income: element(by.xpath('//*[@id="apply-for-credit-card.financial_income"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            income: "Vul hier uw nettomaandinkomen in. U kunt alleen hele bedragen invullen. Punten, komma's of andere leestekens worden niet herkend.",
            iContent_bonus: element(by.xpath('//*[@id="apply-for-credit-card.financial_annualBonus"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            bonus: 'Geef hier aan of u een dertiende maand ontvangt van uw werkgever.',
            iContent_otherIncome: element(by.xpath('//*[@id="apply-for-credit-card.financial_otherNettoIncome"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            otherIncome: 'Ontvangt u extra inkomsten uit bijvoorbeeld een tweede baan? Vul dan het nettobedrag dat u ontvangt hier in. Ontvangt u inkomsten uit meerdere bronnen? Vul dan het totaalbedrag van de overige inkomsten in.',
            iContent_child: element(by.xpath('//*[@id="apply-for-credit-card.financial_childrenFinanciallyResponsible"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            child: 'Geef hier aan hoeveel kinderen onder de 18 jaar u heeft.',
            iContent_houseType: element(by.xpath('//*[@id="apply-for-credit-card.financial_residenceType"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            houseType: 'Geef hier aan wat uw woonsituatie is.',
            iContent_houseCharges: element(by.xpath('//*[@id="apply-for-credit-card.financial_rentalCharges"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            houseCharges: 'Vul hier het huurbedrag in dat u maandelijks verschuldigd bent.',
            iContent_allowance: element(by.xpath('//*[@id="apply-for-credit-card.financial_rentalAllowance"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            allowances: "Vul hier het bedrag in dat u maandelijks aan huurtoeslag ontvangt. Ontvangt u geen huurtoeslag? Vul dan '0' (nul) in.",
            iContent_alimony: element(by.xpath('//*[@id="apply-for-credit-card.financial_alimony"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            alimony: 'Vul hier het nettobedrag in dat u maandelijks aan alimentatie betaalt. Betaalt u geen alimentatie? Dan hoeft u niets in te vullen.',
            iContent_taxpay: element(by.xpath('//*[@id="apply-for-credit-card.financial_taxable"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            taxpay: 'In verband met Europese regelgeving zijn wij verplicht om vast te leggen in welke landen u inkomstenbelasting moet betalen.',
            iContent_IBAN: element(by.xpath('//*[@id="apply-for-credit-card.financial_bankAccountNumber"]/ics-form-spacer/div/div[2]/left/ics-form-label/label/div/div[2]')),
            iban: 'Vul uw privé bankrekeningnummer in. Vul geen zakelijk bankrekeningnummer in. Alleen met een privé bankrekeningnummer kunnen wij uw gegevens controleren. Heeft u alleen een gezamenlijk bankrekeningnummer? Dan controleren wij uw gegevens handmatig, de aanvraag kan iets langer duren.'
        }
        this.identificationDetails = {
            identificationNumber: $$('[id="identificationNumber"]').get(0),
            submitButton: $('[translate="online-identification.identify.button.submit"]'),
        }

    }

    precheckCustomers() {
        this.personalInformation.sexFemale.click()
        waitHelper.enterText(this.personalInformation.initials, testData.personalDetails.initials)
        waitHelper.enterText(this.personalInformation.firstName, testData.personalDetails.firstName)
        waitHelper.enterText(this.personalInformation.lastName, testData.personalDetails.lastName)
        this.selectDropdown(testData.personalDetails.marritalState)
        browser.getCurrentUrl().then((url) => {
            expect(url).toContain('icscards')
            this.personalInformation.birthDate.click()
            waitHelper.enterText(this.personalInformation.birthDate, testData.personalDetails.dob)
        })
        this.selectDropdown(testData.personalDetails.nationality)
        waitHelper.enterText(this.personalInformation.zipCode, testData.personalDetails.postcode)
        waitHelper.enterText(this.personalInformation.zipcodeA, testData.personalDetails.postcodeA)
        waitHelper.enterText(this.personalInformation.houseNo, testData.personalDetails.houseNo)
        waitHelper.enterText(this.personalInformation.telephoneNumberMobile, testData.personalDetails.mobNumber)
        waitHelper.enterText(this.personalInformation.emailAddress, testData.personalDetails.email)
        waitHelper.enterText(this.personalInformation.confirmEmail, testData.personalDetails.repeatEmail)
        waitHelper.getContainText(this.personalInformation.contentCheck)
        waitHelper.getContainText(this.personalInformation.contentCheck, this.personalInformation.contentValue)
        this.personalInformation.submitButton.click()

    }
    cardDetails() {
        waitHelper.waitForElement(this.CardsDetails.cardTitle)
        this.selectDropdown(testData.cardDetails.desiredSpendingLimit)
        this.selectDropdown(testData.cardDetails.desiredDirectDebitDay)
        this.selectDropdown(testData.cardDetails.empType)
        waitHelper.enterText(this.CardsDetails.companyFundOrInstituteName, testData.cardDetails.comName)
        waitHelper.enterText(this.CardsDetails.companyFundOrInstituteCity, testData.cardDetails.comCity)
        this.CardsDetails.employedSince.sendKeys(testData.cardDetails.employedSince)
        waitHelper.enterText(this.CardsDetails.income, testData.cardDetails.income)
        this.CardsDetails.bonus.click()
        this.selectDropdown(testData.cardDetails.child)
        this.selectDropdown(testData.cardDetails.livingSituation)
        this.CardsDetails.residentSince.sendKeys(testData.cardDetails.livingSince)
        waitHelper.enterText(this.CardsDetails.housingCosts, testData.cardDetails.housingCost)
        waitHelper.enterText(this.CardsDetails.rentalAllowance, testData.cardDetails.housingAllowances)
        this.CardsDetails.taxpay.click()
        waitHelper.enterText(this.CardsDetails.iban, testData.cardDetails.iban)
    }

    xCardDetails() {
        waitHelper.waitForElement(this.CardsDetails.extraCard)
        this.CardsDetails.extraCard.click()
        waitHelper.waitForElement(this.CardsDetails.salutationExtraCard)
        this.CardsDetails.salutationExtraCard.click()
        waitHelper.enterText(this.CardsDetails.initialsExtraCard, testData.cardDetails.xInitials)
        waitHelper.enterText(this.CardsDetails.firstNamesExtraCard, testData.cardDetails.xfirstName)
        waitHelper.enterText(this.CardsDetails.surnameExtraCard, testData.cardDetails.xLastName)
        this.CardsDetails.birthDateExtraCard.sendKeys(testData.cardDetails.xDOB)
        waitHelper.enterText(this.CardsDetails.zipCodeExtraCard, testData.cardDetails.xpostcode)
        waitHelper.enterText(this.CardsDetails.zipCodeExtraCardA, testData.cardDetails.xpostcodeA)
        waitHelper.enterText(this.CardsDetails.houseNumberExtraCard, testData.cardDetails.xhouseNo)
        waitHelper.enterText(this.CardsDetails.telephoneNumberMobileExtraCard, testData.cardDetails.xmobNumber)
        waitHelper.enterText(this.CardsDetails.emailAddressExtraCard, testData.cardDetails.xEmail)
        waitHelper.enterText(this.CardsDetails.confirmEmailAddressExtraCard, testData.cardDetails.xRepeatEmail)
        waitHelper.enterText(this.CardsDetails.bankAccountNumberExtraCard, testData.cardDetails.xiban)
        this.personalInformation.submitButton.click()

    }

    identification() {
        waitHelper.waitForElement(this.idVerfication.identification)
        this.selectDropdown(testData.idVerification.documentType)
        waitHelper.enterText(this.idVerfication.placeOfIssue, testData.idVerification.placeOfIssue)
        this.idVerfication.dateOfIssue.sendKeys(testData.idVerification.dateOfIssue)
        waitHelper.enterText(this.idVerfication.socialSecurityNumber, testData.idVerification.bsn)
        waitHelper.enterText(this.idVerfication.documentNumber, testData.idVerification.documentNumber)
        waitHelper.enterText(this.idVerfication.placeOfBirth, testData.idVerification.placeOfBirth)
        this.selectDropdown(testData.idVerification.countryOfBirth)
    }

    xIdentification() {
        this.selectDropdown(testData.idVerification.xdocumentType)
        waitHelper.enterText(this.idVerfication.placeOfIssueExtraCard, testData.idVerification.xplaceOfIssue)
        this.idVerfication.dateOfIssueExtraCard.sendKeys(testData.idVerification.xdateOfIssue)
        waitHelper.enterText(this.idVerfication.documentNumberExtraCard, testData.idVerification.xdocumentNumber)
        waitHelper.enterText(this.idVerfication.placeOfBirthExtraCard, testData.idVerification.xplaceOfBirth)
        this.selectDropdown(testData.idVerification.xcountryOfBirth)
        this.selectDropdown(testData.idVerification.nationalityExtraCard)
        this.personalInformation.submitButton.click()
    }

    termAcceptPage() {
        waitHelper.waitForElement(this.summary.summaryTitle)
        this.summary.summaryTitle.getText().then((text) => {
            (text == 'Overzicht en akkoord') ?
                waitHelper.waitForElement(this.summary.acceptCheckBox)
                : console.log('Wrong.');
        })
        this.summary.termsAndConditions.getText().then((text) => {
            expect(text.split("\n")[4]).toEqual(this.summary.conditions)
        })
        this.summary.acceptCheckBox.click()
        // this.personalInformation.submitButton.click()
        // waitHelper.waitForElement(this.summary.overviewButton)
        // if (this.summary.error) {
        //     this.summary.overviewButton.click()
        // }
    }

    selectDropdown(type) {
        this.personalInformation.maritalState.then(() => {
            switch (type) {
                case 'Alleenstaand':
                    //call conversion machnisam for more convinient process
                    this.personalInformation.maritalState.click()
                    $$('[value="string:SINGLE"]').get(0).click();
                    break;
                case '3500': case '2500': case '1000': case '5000':
                    this.CardsDetails.spendingLimit.click()
                    $('[value="number:' + type + '"]').click()
                    break;
                case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '10': case '11': case '13':
                    this.CardsDetails.desiredDirectDebitDay.click()
                    $('[value="number:' + type + '"]').click()
                    break;
                case 'Loondienst / vast dienstverband':
                    this.CardsDetails.employmentType.click()
                    //value = "string:FIXED"
                    $('[value = "string:FIXED"]').click()
                    break;
                case 'Geen':
                    this.CardsDetails.childrenFinanciallyResponsible.click()
                    $$('[value = "string:NONE"]').get(0).click()
                    break;
                case 'Huur':
                    this.CardsDetails.residenceType.click()
                    $$('[ value="string:RENTAL"]').get(0).click()
                    break;
                case 'Rijbewijs':
                    this.idVerfication.documentType.click()
                    $$('[value="string:DRIVERS_LICENSE"]').get(0).click()
                    break;
                case 'Passport':
                    this.idVerfication.documentType.click()
                    $$('[ value="string:PASSPORT"]').get(0).click()
                    break;
                case 'Nederland':
                    this.idVerfication.countryOfBirth.click()
                    $$('[ value="string:NL"]').get(0).click()
                    break;
                case 'xRijbewijs':
                    this.idVerfication.documentTypeExtraCard.click()
                    //browser.sleep(10000)
                    waitHelper.waitForElement($('[translate="apply-for-credit-card.identification.documentTypeExtraCard.DrivingLicence"]'))
                    $('[translate="apply-for-credit-card.identification.documentTypeExtraCard.DrivingLicence"]').click()
                    //browser.sleep(20000)
                    break;
                case 'xNederland':
                    this.idVerfication.countryOfBirthExtraCard.click()
                    $$('[translate="Nederland"]').get(1).click()
                    break;
                case 'Nederlands':
                    this.idVerfication.nationalityExtraCard.click()
                    $('[translate="Nederlands"]').click()
                    break;
                case '':
                    $('[id="nationality"]').click()
                    break;
                default:
                    console.log('error')
            }
        });
    }

}
module.exports = new AIO;