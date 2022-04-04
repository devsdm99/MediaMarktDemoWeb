import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate} from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

const ProductForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/products');
    }
    const defaultValues = {
        name: '',
        description: '',
        price: '',
        category: '',
    }
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };
    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-content-center m-5 grid">
            <div className="col-12 flex justify-content-center">
            <Button
                icon="pi pi-arrow-left"
                label="Navigate Back"
                onClick={navigateBack} />

            </div>
            <h2 className="col-12 flex justify-content-center">Create new product from</h2>

            
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid col-3">
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-text" />
                                <Controller name="description" control={control}
                                    rules={{ required: 'Description is required.'}}
                                    render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="description" className={classNames({ 'p-error': !!errors.description })}>Description*</label>
                            </span>
                            {getFormErrorMessage('description')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-dollar" />
                                <Controller name="price" control={control}
                                    rules={{ required: 'Price is required.'}}
                                    render={({ field, fieldState }) => (
                                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="price" className={classNames({ 'p-error': !!errors.price })}>Price*</label>
                            </span>
                            {getFormErrorMessage('description')}
                        </div>
                        
                       
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
        </div>

    );
}
export default ProductForm;