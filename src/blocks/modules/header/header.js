const Header = class Header {
    constructor({headerClass, openerClass, burgerClass, openedClass}) {
        this.openerClass = openerClass;
        this.burgerClass = burgerClass;
        this.openedClass = openedClass;
        this.headerClass = headerClass;

        this.init();
    }
    init() {}
}

export default Header;