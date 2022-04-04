import React from 'react';
import { Dialog } from 'primereact/dialog';
import { setSelectedProduct } from '../redux/actions/productActions';
import { setDisplayDetailModal } from '../redux/actions/modalActions';

import { useSelector, useDispatch } from "react-redux";

const ProductDetail = () => {

    const dispatch = useDispatch();
    const visible = useSelector(state => state.displayDetailModal.display);
    const selectedProduct = useSelector(state => state.product);
    
    const renderHeader = () => {
        return (
            <div className='flex align-content-start'>
                <h3 className='flex align-items-center justify-content-center  m-2'>Product name:</h3>
                <span className='flex align-items-center justify-content-center  m-2 text-xl'>{selectedProduct.name}</span>
            </div>
        );
    };

    const hideTable = () => {
        dispatch(setSelectedProduct({}));
        dispatch(setDisplayDetailModal(false));
    }

    return (
        <Dialog draggable={false} header={renderHeader} visible={visible} style={{ width: '30vw' }} breakpoints={{'960px': '75vw', '640px': '100vw'}} onHide={hideTable}>
             <div className='flex justify-content-between border-bottom-1'>
                    <h3 className='flex align-items-center justify-content-center m-2'>Price:</h3>
                    <span className='flex align-content-end justify-content-end  m-2 text-xl'>{selectedProduct.price}</span>
                </div>
                <div className='flex justify-content-between border-bottom-1'>
                    <h3 className='flex align-items-center justify-content-center m-2'>Description:</h3>
                    <span className='flex align-items-center justify-content-center m-2 text-xl'>{selectedProduct.description}</span>
                </div>
                <div className='flex justify-content-between border-bottom-1'>
                    <h3 className='flex align-items-center justify-content-center border-round m-2'>Category:</h3>
                    <span className='flex align-items-center justify-content-center border-round m-2 text-xl'>{selectedProduct.category}</span>
                </div>
        </Dialog>
    );
}

export default ProductDetail;