export class MenuSelectors {

    get dashboardButton() {return $('button[aria-label="Dashboard"] > span')};
    get dashboardIndividualButton() {return $('a[ng-class="{\'btn-active\': main.pageService.pageCode === \'dashboard-individual\'}"]')};
    get screencastsButton() {return $('a[ng-class="{\'btn-active\': main.pageService.pageCode === \'screenshots\'}"]')};

}
