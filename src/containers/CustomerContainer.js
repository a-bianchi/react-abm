import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import PropTypes from 'prop-types';
import { getCustomerByDni } from './../selectors/customers';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={<p>Datos del Cliente {this.props.customer.name}</p>}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer:PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);