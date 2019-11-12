import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import Select from 'react-select';

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

const options = [
    {label: "ground", value: "1"},
    {label: "priority", value: "2"}
];
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
            shippingOption: shippingOption
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
                        value={shippingOption}
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
