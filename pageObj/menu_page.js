import {MenuSelectors} from './fragments';

export class MenuPage extends MenuSelectors {
    constructor(){
        super();
    }
    dashboardMenu(){
        const dashboardButton = this.dashboardButton;
            browser.waitUntil(function(){
                return dashboardButton.isDisplayed()
            }, 7000, 'Dashoard menu is not rendered');
        dashboardButton.click();
    }
    dashboardMenuIndividual(){
        const dashboardIndividualButton = this.dashboardIndividualButton;
            browser.waitUntil(function(){
                return dashboardIndividualButton.isClickable()
            }, 7000, 'Individual menu is not rendered');
    dashboardIndividualButton.click();
    }
}