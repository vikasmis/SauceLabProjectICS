const waitHelper= require('../pages/wait.helper')
class EnvironmentCredentials {

    constructor() {
        this.personalDetails = {
            initials: 'A',
            firstName: 'Altan',//+ " " + waitHelper.Generate_random_string(5),
            lastName: 'Unluturk',// + " " + waitHelper.Generate_random_string(5),
            email: 'mvikash@icscards.nl',
            repeatEmail: 'mvikash@icscards.nl',
            dob: '24/10/1988',
            postcode: '1186',
            postcodeA: 'KD',
            houseNo: '13',
            mobNumber: '0644111460',
            marritalState: 'Alleenstaand',
            nationality: ''
        }
        this.cardDetails = {
            desiredSpendingLimit: '3500',
            desiredDirectDebitDay: '6',
            empType: 'Loondienst / vast dienstverband',
            comName: 'TCS',
            comCity: 'Amsterdam',
            employedSince: '01-2018',
            income: '3500',
            livingSituation: 'Huur',
            livingSince: '01-2019',
            child: 'Geen',
            housingCost: '1400',
            housingAllowances: '140',
            iban: 'NL53 INGB 0654422370',
            xInitials: 'A',
            xfirstName: 'XTest' + " " + waitHelper.Generate_random_string(5),
            xLastName: 'XText' + " " + waitHelper.Generate_random_string(5),
            //xDOB: '1988-10-24',
            xDOB: '24-10-1988',//---Bug with this format
            xpostcode: '1186',
            xpostcodeA: 'KD',
            xhouseNo: '13',
            xmobNumber: '0644111460',
            xEmail: 'mvikash@icscards.nl',
            xRepeatEmail: 'mvikash@icscards.nl',
            xiban: 'NL08 INGB 0000 0005 55',
        }
        this.idVerification = {
            documentType: 'Rijbewijs',
            placeOfIssue: 'Amsterdam',
            dateOfIssue: '01/05/2018',
            bsn: '163687195',
            documentNumber: 'ARVYQ8UR2',
            placeOfBirth: 'Amsterdam',
            countryOfBirth: 'Nederland',
            xdocumentType: 'xRijbewijs',
            xplaceOfIssue: 'Amsterdam',
            xdateOfIssue: '01/05/2018',
            xdocumentNumber: 'MGMIBWEW6',
            xplaceOfBirth: 'Amsterdam',
            xcountryOfBirth: 'xNederland',
            nationalityExtraCard: 'Nederlands'
        }
        this.errorDetails = {
            error: 'Dit veld is verplicht.',
            ibanError: 'Vul een geldig bankrekeningnummer in.',
            incorrectData: 'De gegevens zijn onjuist ingevuld',
            errorDate: 'Volgens de door u ingevulde datum bent u jonger dan 18 jaar. Wij kunnen u helaas geen creditcard verstrekken',
            errorDateInvalid: 'U heeft een geboortedatum ingevuld die te ver in het verleden ligt.',
            mobError: 'Vul uw telefoonnummer zonder +31 of streepje in op de volgende wijze: 0612345678',
            emailError: 'Vul een geldig e-mailadres in.',
            ibanError: 'Vul een geldig bankrekeningnummer in.',
            docError: 'U heeft het documentnummer niet correct ingevuld.'
        }

        this.errValue = {
            alfanumeriek: 9 + waitHelper.Generate_random_string(5),
            char: 'TESTVAL',
            date: waitHelper.getDate(),
            datePlus: waitHelper.getDate(1, 1, 18),
            datemMinus: waitHelper.getDate(1, 1, -18),
            specialChar: waitHelper.generateSpecialChar(),
            numeriek: 98765,
            docNumber: 'PW2ASE2P5',
            invalidDocNum: 'OWSDUFU69',
            docLength: 'PW2ASE2P5PW2ASE2P5444T',
            dateInvaid: '23-09-1909',
            passportNum: 'TESTV1',
            invalidPassportNum: 'QATE'
        }
        this.partnerIncome = {
            piccode: '6488087897',
            postCNumber: 1102,
            postC: 'XZ',
            DOB: '01051987'
        }
        this.login = {
            username: 'JJKOFF01',
            password: 'JJKOFF02'
        }
    }
    // This will launch your URL as per the details that you have passed in the test/spec file

    getUrl(subdomain) {
        switch (browser.params.env) {
            case '':
                return `https://www.qa.icscards.nl/` + // You can pass from argument another Environment
                    this.getSubdomainURL(subdomain)
            default:
                throw (`Unknown environment to run tests on: ${browser.params.env}`)
        }
    }

    // This function will handle the subdomain 
    getSubdomainURL(subdomain) {
        switch (subdomain) {
            case 'AIO':
                return `aio/expectation?param1=WORLD.WC1&param2=WEB` //
            case 'PI':
                return `login/partner-income/validate`
            case 'extracard':
                return `mijn/apply-for-extra-card`
            case 'id':
                return `online-identification/identify`
            default:
                throw (`Unknown environment to run tests on: ${subdomain}`)
        }
    }
}

module.exports= new EnvironmentCredentials