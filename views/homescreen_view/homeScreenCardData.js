import { REQUIREMENT_TYPE } from '../../utils/constants';

const OxygenIcon = require('../../assets/icons/card_icons/oxygen.png');
const BloodPlasmaIcon = require('../../assets/icons/card_icons/blood.png');
const HospitalBedIcon = require('../../assets/icons/card_icons/bed.png');
const MedicineIcon = require('../../assets/icons/card_icons/injection.png');
const FoodIcon = require('../../assets/icons/card_icons/food.png')
const TestIcon = require('../../assets/icons/card_icons/testube.png');
const VolunteerIcon = require('../../assets/icons/card_icons/testube.png')
const DeveloperIcon = require('../../assets/icons/card_icons/testube.png');

const HOMESCREEN_DATA = [
    ["Oxygen", OxygenIcon, REQUIREMENT_TYPE.OXYGEN],
    ["Blood / Plasma", BloodPlasmaIcon, REQUIREMENT_TYPE.PLASMA_BLOOD],
    ["Hospital Beds", HospitalBedIcon, REQUIREMENT_TYPE.HOSPITAL_BED],
    ["Medicines", MedicineIcon, REQUIREMENT_TYPE.MEDICINE],
    ["Food", FoodIcon, REQUIREMENT_TYPE.HOME_FOOD],
    ["Tests", TestIcon, REQUIREMENT_TYPE.TEST],
    ["Volunteer to help", VolunteerIcon, REQUIREMENT_TYPE.VOLUNTEER],
    ["Developers", DeveloperIcon, REQUIREMENT_TYPE.DEVELOPER]
]

const cardsData = [];

for(let i=0;i<HOMESCREEN_DATA.length; i++)
{
    cardsData.push({
        'id':i,
        'text': HOMESCREEN_DATA[i][0],
        'icon': HOMESCREEN_DATA[i][1],
        'code': HOMESCREEN_DATA[i][2]
    });
} 

export default cardsData;