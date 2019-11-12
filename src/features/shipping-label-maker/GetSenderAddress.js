import React from 'react';
import AddressForm from './AddressForm';
import Navigation from './Navigation';
import styled from "styled-components";
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
    text-align: left;
`;

const FormRow = styled.div`
    width: 100%;
    height: 70%;  
`;

const NavigationRow = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
`;

class GetSenderAddress extends React.Component {

    constructor(props) {
        super(props);
        const { from } = this.props.wizardContext;
        this.state = {
            name: from.name,
            street: from.street,
            city: from.city,
            state: from.state,
            zip: from.zip
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleNavigationClick = (action) => {
        this.props.wizardContext.from = this.state;
        this.props.onAction(action);
    };

    render() {
        return (
            <MainView>
                <SubTitle><h4>Enter the sender's address:</h4></SubTitle>
                <FormRow>
                    <AddressForm handleChange={this.handleChange} {...this.state} />
                </FormRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} next />
                </NavigationRow>
            </MainView>
        );
    }
}

export default GetSenderAddress;

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
