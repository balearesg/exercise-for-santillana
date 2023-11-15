import { Manager } from './manager';

export interface Create {
	title: string;
}

export interface Edit {
	title: string;
}

export interface Toast {
	create: string;
	edit: string;
}

export interface texts {
	invalidPermisions: string;
	invalidEmail: string;
	create: Create;
	edit: Edit;
	email: string;
	name: string;
	lastName: string;
	phone: string;
	status: string;
	profile: string;
	save: string;
	errorForm: string;
	error: string;
	toast: Toast;
	userType: string;
	active: string;
	inactive: string;
}

export type form = {
	store: Manager;
	texts: texts;
	fetching: boolean;
};

export type init = {
	names: string;
	lastNames: string;
	email: string;
	phone: string;
	active: number;
};
