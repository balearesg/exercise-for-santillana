import * as React from 'react';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { LoadingPage } from 'jview/loading-page';
import { HomeContext } from './context';
import { Table } from './table';
import { Manager } from '../manager';
export /*bundle*/
	function View({ store: manager }: { store: Manager }): JSX.Element {
	const { products } = manager
	const [upd, setUpdate] = React.useState({});
	const [show, setShow] = React.useState(false);
	const [confirm, setConfirm] = React.useState(false);

	const handleConfirm = () => setConfirm(!confirm);

	useBinder([products], () => setUpdate({}));
	if (!products.ready) return <LoadingPage />;
	const handleModal = () => setShow(!show);

	return (
		<HomeContext.Provider value={{ products, show, handleModal, confirm, handleConfirm }}>
			<div className="page__container">
				<Table />
			</div>
		</HomeContext.Provider>
	);
}
