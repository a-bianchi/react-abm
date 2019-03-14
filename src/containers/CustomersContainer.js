import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const propTypes = {
    
};

const customers = [
    {
        "dni": "31624988",
        "name": "Alejo",
        "age": 33
    },
    {
        "dni": "31624333",
        "name": "Carlitos",
        "age": 45
    },
    {
        "dni": "32423565",
        "name": "Mr Tete",
        "age": 66
    }
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = (customers, urlPath) => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}


CustomersContainer.propTypes = propTypes;


export default withRouter(CustomersContainer);
