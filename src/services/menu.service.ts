class MenuItem {
	private _name;
	private _link;

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	get link() {
		return this._link;
	}

	set link(link) {
		this._link = link; 
	}
}

export class MenuService {
	private _menuItems: MenuItem[] = [];

	constructor() {
		let homeMenuItem: MenuItem = new MenuItem();
		homeMenuItem.name = 'Home';
		homeMenuItem.link = 'home.html';

		this._menuItems.push(homeMenuItem);

		let bloglioMenuItem: MenuItem = new MenuItem();
		bloglioMenuItem.name = 'Blog';
		bloglioMenuItem.link = 'blog.html';

		this._menuItems.push(bloglioMenuItem);

		let portfolioMenuItem: MenuItem = new MenuItem();
		portfolioMenuItem.name = 'Portfolio';
		portfolioMenuItem.link = 'portfolio.html';

		this._menuItems.push(portfolioMenuItem);

		let contactMenuItem: MenuItem = new MenuItem();
		contactMenuItem.name = 'Contact';
		contactMenuItem.link = 'contact.html';

		this._menuItems.push(contactMenuItem);
	}

	get menuItems() {
		return this._menuItems;
	}
}