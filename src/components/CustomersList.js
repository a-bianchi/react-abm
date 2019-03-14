import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';


const propTypes = {
  customers: PropTypes.array.isRequired, 
  urlPath: PropTypes.string.isRequired, 
};


const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map( c => 
                        <CustomerListItem key={c.dni}
                            name={c.name}
                            dni={c.dni}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem> 
                    )
                }
            </div>
        </div>
    );
};


CustomerList.propTypes = propTypes;


export default CustomerList;
