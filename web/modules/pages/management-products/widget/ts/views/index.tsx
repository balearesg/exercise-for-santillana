import * as React from 'react';
import { useTexts, useBinder } from '@beyond-js/react-18-widgets/hooks';
import { LoadingPage } from 'jview/loading-page';
import { module } from 'beyond_context';
import { FormProfile } from './form';
import { Manager } from '../manager';
import { UserContext } from './context';
export /*bundle*/
	function View({ store: manager }: { store: Manager }): JSX.Element {
	const [ready, texts] = useTexts(module.specifier);
	const [state, setState] = React.useState({});
	useBinder([manager], () => setState({}));

	if (!ready || !manager.ready) return <LoadingPage />;
	//	if (!manager.permissions || !manager.permissions.writeP) return <PageNotFound />
	const value = {
		manager,
		texts,
	};
	return (
		<UserContext.Provider value={value}>
			<div>
				<div className="card-page">
					<FormProfile />
				</div>
			</div>
		</UserContext.Provider>
	);
}
