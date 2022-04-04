import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { setLoading } from '../redux/actions/productActions';
import axios from "axios";
import { useDispatch } from "react-redux";
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

const ProductForm = () => {
    const dispatch = useDispatch();
    const toast = useRef(null);
    const navigate = useNavigate();


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

    function showSuccess () {
    }
    function navigateBack () {
        navigate('/products');
    }

    const onSubmit = async (data) => {

        dispatch(setLoading(true));
        await axios.post('http://localhost:5000/product/create', data).then((response) => {
            toast.current.show({ severity: 'success', summary: 'Product Created', detail: 'The product has been created', life: 3000 });   

            setTimeout(function() { //Start the timer
                navigate('/products');
            }, 1000)

        }).catch((err) => {
            toast.current.show({ severity: 'error', summary: 'Error on creating product', detail: 'The product cannot be created', life: 3000 });
        });
        dispatch(setLoading(false));

    };

    return (
        <div>
            <Toast ref={toast} position="bottom-left" />

            <div className="flex justify-content-center m-5 grid">
                <div className="col-12 flex justify-content-start">
                    <Button
                        icon="pi pi-arrow-left"
                        label="Back"
                        onClick={navigateBack} />

                </div>
                <h2 className="col-12 flex justify-content-center">Creating new product</h2>


                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid sm:col-12 md:col-6 lg:col-4">
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
                                rules={{ required: 'Description is required.' }}
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

                                rules={{ required: 'Price is required.' }}
                                render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} type='number' className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                            <label htmlFor="price" className={classNames({ 'p-error': !!errors.price })}>Price*</label>
                        </span>
                        {getFormErrorMessage('price')}
                    </div>
                    <div className="field">
                        <span className="p-float-label p-input-icon-right">
                            <Controller name="category" control={control}
                                rules={{ required: 'Category is required.' }}
                                render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                            <label htmlFor="category" className={classNames({ 'p-error': !!errors.category })}>Category*</label>
                        </span>
                        {getFormErrorMessage('category')}
                    </div>

                    <Button type="submit" label="Create" className="mt-2" />
                </form>
            </div>
        </div>
    );
}
export default ProductForm;