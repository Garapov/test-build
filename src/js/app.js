import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();
import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';



document.addEventListener('DOMContentLoaded', () => {
    globalFunctions.transferItems();

    globalFunctions.addReadAllHandler();

    window.addEventListener('resize', () => {
        globalFunctions.transferItems();
    });
    
    window.app = {
        header: new Header({
            headerClass: '.header',
            openerClass: '.header__burger_opener--js',
            burgerClass: '.header__burger_body--js',
            openedClass: 'isOpened'
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
    };
    
});