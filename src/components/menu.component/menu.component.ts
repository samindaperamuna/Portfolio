import { Component, Output } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	providers: [ MenuService ]
})
export class MenuComponent {
	private title = 'Ventura';
	private menuItems;
	private menuVisible: boolean = false;

	constructor(private menuService: MenuService) {
		this.menuItems = menuService.menuItems;
	}

	toggleHumbergerMenu() {
		this.menuVisible = !this.menuVisible;
	}
}