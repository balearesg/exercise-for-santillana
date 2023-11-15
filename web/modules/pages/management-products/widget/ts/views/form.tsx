import React from 'react';
import { Input } from '@santillana/web/input';
import { Form } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';
import { useUserContext } from './context';

export function FormProfile(): JSX.Element {
	const { texts, manager } = useUserContext();
	const { isCreating, fetching, publish, products } = manager;
	const init = {
		name: products.item.name ?? "",
		description: products.item.description ?? "",
		price: products.item.price ?? ""
	}
	const [values, setValues] = React.useState(init);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		setValues({ ...values, [target.name]: target.value });
	};
	const onSubmit = () => publish(values)
	return (
		<Form className="content-form" onSubmit={onSubmit}>
			<h2 className='title-form'>Manejo de productos</h2>
			<div className="form-group">
				<Input required label="Nombre" name="name" onChange={handleChange} value={values.name} />
				<Input
					className="has-icon"
					required
					label="descripcion"
					value={values.description}
					name="description" onChange={handleChange}
				/>
			</div>
			<div className="form-group one-colum">
				<Input
					className="has-icon"
					label="precio"
					required
					value={values.price}
					name="price" onChange={handleChange}
				/>

			</div>
			<Button type="submit" loading={fetching} variant="primary">
				{texts.save}
			</Button>
		</Form>
	);
}
