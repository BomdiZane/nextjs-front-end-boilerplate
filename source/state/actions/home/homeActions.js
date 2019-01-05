export function changeLanguage(text, iconSrc) {
	return {
		type: 'CHANGE_LANGUAGE',
		payload: {
			text,
			iconSrc
		}
	};
}

export function updateMenuAnchor(menu, anchor) {
	return {
		type: 'UPDATE_MENU_ANCHOR',
		payload: {menu, anchor}
	};
}

export function toggleSubMenu(menu) {
	return {
		type: 'TOGGLE_SUB_MENU',
		payload: menu
	};
}

export function updatePage(page) {
	return {
		type: 'UPDATE_PAGE',
		payload: page
	};
}

export function updateAccordion(activeAccordion) {
	return { 
		type: 'UPDATE_ACCORDION',
		payload: activeAccordion
	};
}
