import React, { Component } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export class Product extends Component {

    render() {
        const footer = <span>
            <Button label="Details" icon="pi pi-eye" className="p-button-info col-12"  />
        </span>;

        return (
            <Card footer={footer} className="col-12 sm:col-4 md:col-6 lg:col-3 my-2 flex flex-wrap align-items-center">
                <span>IPhone 12 PRO</span><br/>
                <span>Smarphone</span>
            </Card>
        );
    }
}