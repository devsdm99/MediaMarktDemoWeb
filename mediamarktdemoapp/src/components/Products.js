import React, { useEffect } from "react";
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import ProductDetail from './ProductDetail';

import { Column } from 'primereact/column';
import axios from "axios";
import {  useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setSelectedProduct, setLoading } from '../redux/actions/productActions';
import { setDisplayDetailModal } from '../redux/actions/modalActions';
import { setFilterText } from '../redux/actions/paginatorActions';
import { InputText } from 'primereact/inputtext';
export const Products = () => {
    const loading = useSelector(state => state.allProducts.loading);
    const products = useSelector(state => state.allProducts.products);
    const selectedProduct = useSelector(state => state.allProducts.product);
    const filteredText = useSelector(state => state.filter.filteredText);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        dispatch(setLoading(true));
        const response = await axios.get('http://localhost:5000/product/all').catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
        dispatch(setLoading(false));
    };

    const selectedRow = (selectedProduct) => {
        dispatch(setSelectedProduct(selectedProduct));
        dispatch(setDisplayDetailModal(true));
    };

    const createNewProduct = () => {
        navigate('/products/create');
    };

    const footer = (
        <div className="flex align-items-stretch" style={{ width: '100%' }}>
            <Button
                icon="pi pi-plus"
                label="Add"
                onClick={createNewProduct} />
        </div>
    );



    const header = () => {
        return (
            <div className="flex justify-content-between">
                <span className="p-input-icosn-left">
                    <i className="pi pi-search mr-5" />
                    <InputText onChange={(e) => dispatch(setFilterText(e.target.value))} placeholder="Search product" />
                </span>
            </div>
        )
    };

    return (
        <div>
            <ProductDetail />
            <Panel header="MediaMarkt products list" style={{ textAlign: "center" }}>
                <DataTable
                    loading={loading}
                    globalFilter={filteredText}
                    paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    selectionMode="single"
                    selection={selectedProduct} onSelectionChange={e => selectedRow(e.value)}
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                    value={products}
                    header={header}
                    footer={footer}>
                    <Column field="name" filter header="Name" />
                    <Column field="description" filter header="Description" />
                    <Column field="price" header="Price" filter />
                    <Column field="category" width={100} header="Category" filter />
                </DataTable>
            </Panel>
        </div>
    );
}

