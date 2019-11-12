import React, {useState} from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import Select from 'react-select';
import { ShippingOptions } from './constants';
import PropTypes from 'prop-types';

const GetShippingOption = (props) => {
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

    const [shippingOption, setShippingOptions] = useState(props.wizardContext.shippingOption);

    const handleChange = shippingOption => {
        setShippingOptions(shippingOption.value);
    };

    const handleNavigationClick = (action) => {
        props.handleNext(
            shippingOption
        , 'shippingOption');
        props.onAction(action);
    };
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
                    onChange={handleChange}
                    options={options}
                />
            </FormRow>
            <NavigationRow>
                <Navigation onAction={handleNavigationClick} prev next />
            </NavigationRow>
        </MainView>
    );
};

export default GetShippingOption;

GetShippingOption.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
