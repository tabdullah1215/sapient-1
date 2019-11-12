import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import Select from 'react-select';
import { ShippingOptions } from './constants';
import PropTypes from 'prop-types';

const MainView = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
`;

const SubTitle = styled.div`
    width: 100%;
    height: 15%;
    text-align: left;
`;

const FormRow = styled.div`
    width: 100%;
    height: 70%;  
`;

const NavigationRow = styled.div`
    width: 100%;
    height: 15%;
`;

const options = Object.keys(ShippingOptions).map(key => {
    return {
        label: key,
        value: ShippingOptions[key]
    };
});

class GetShippingOption extends React.Component {

    constructor(props) {
        super(props);
        const { shippingOption } = this.props.wizardContext;
        this.state = {
            shippingOption
        };
    }

    handleChange = shippingOption => {
        this.setState({
            shippingOption: shippingOption.value
        });
    };

    handleNavigationClick = (action) => {
        const { shippingOption } = this.state;
        this.props.wizardContext.shippingOption = shippingOption;
        this.props.onAction(action);
    };

    render() {
        const { shippingOption } = this.state;
        return(
            <MainView>
                <SubTitle><h4>Enter Shipping Option:</h4></SubTitle>
                <FormRow className="form-group">
                    <label htmlFor="name">Shipping Option</label>
                    <Select
                        value={{
                            value: shippingOption,
                            label: Object.keys(ShippingOptions)
                                .find(key => ShippingOptions[key] === shippingOption)
                        }}
                        onChange={this.handleChange}
                        options={options}
                    />
                </FormRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} prev next />
                </NavigationRow>
            </MainView>
        );
    }
}

export default GetShippingOption;

GetShippingOption.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
