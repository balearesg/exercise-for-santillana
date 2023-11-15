import * as React from 'react';
import { JView } from 'jview/jview.code';
import { HomeUseContext } from './context';
import { routing } from '@beyond-js/kernel/routing';
export function Table() {
	const { products, handleModal } = HomeUseContext();
	const navigate = () => routing.pushState('/products/management/create')
	const value = {
		dataHead: [
			{ label: 'IdInstancia', id: '1' },
			{ label: 'Nombre', id: '2' },
			{ label: 'Descripción', id: '3' },
		],
		entries: products.items,
		currentPage: products.currentPage,
		rows: products.limit,
		total: products.total,
		pagerNext: true,
		onNext: products.next,
		onPrev: products.loadItems,
		loading: products.fetching,
		keys: ["name", "price", "description"],
		showSelect: false,
		actions: {
			create: {
				label: 'Crear producto',
				onClick: navigate,
			},
			edit: {
				url: "/products/management"
			},
			delete: {
				onClick: products.delete
			}
		},
		title: 'Listado de productos',
	};

	return (
		<div className="table">
			<JView {...value} />
		</div>
	);
}
