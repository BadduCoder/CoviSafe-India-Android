const appLogo = require('../assets/icons/CoviSafeIndia.png');
const appLogoHeader = require('../assets/icons/CoviSafeIndiaHeader.png');
const appLogoGIF = require('../assets/icons/CoviSafeIndia.gif')
const loaderIcon = require('../assets/loader.gif');
const hospitalIcon = require('../assets/icons/card_icons/hospital.png');
const locationIcon = require('../assets/icons/card_icons/map.png');
const checkIcon = require('../assets/icons/card_icons/check.png');
const warningIcon = require('../assets/icons/card_icons/warning.png');
const donorIcon = require('../assets/icons/card_icons/donor.png');

const REQUIREMENT_TYPE = {
    OXYGEN : "OXY",
    PLASMA_BLOOD : "P&B",
    HOSPITAL_BED : "HBD",
    HOME_FOOD : "HFD",
    MEDICINE : "MED",
    TEST : "TST",
    VOLUNTEER : "VLN",
    DEVELOPER : "DEV"
}

export { 
    appLogo,
    appLogoHeader,
    appLogoGIF,
    loaderIcon, 
    hospitalIcon, 
    locationIcon,
    checkIcon,
    warningIcon,
    donorIcon,
    REQUIREMENT_TYPE,
};