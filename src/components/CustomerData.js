import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';


const propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};


const CustomerData = ({name, dni, age, onBack}) => {
    return (
        <div>
            <div className="customer-data">
                    <h2> Datos del cliente</h2>
                        <div><strong>Nombre</strong><i>{name}</i> </div>
                        <div><strong>DNI</strong><i>{dni}</i> </div>
                        <div><strong>Edad</strong><i>{age}</i> </div>
                </div>
                <CustomersActions>
                    <button onClick={onBack}>Volver</button>
                </CustomersActions>
        </div>
    );
};


CustomerData.propTypes = propTypes;


export default CustomerData;
