import React from "react";
import AddressForm from './AddressForm';
import Navigation from './Navigation';
import styled from 'styled-components';
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
        const { to } = this.props.wizardContext;
        this.state = {
            name: to.name,
            street: to.street,
            city: to.city,
            state: to.state,
            zip: to.zip
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleNavigationClick = (action) => {
        // this.props.wizardContext.to = this.state;
        this.props.handleNext({
            ...this.state
        }, 'to');
        this.props.onAction(action);
    };

    isButtonEnabled = () => {
        return Object.keys(this.state).reduce((acc, f) => {
            if(this.state[f].length === 0){
                return true;
            }
            return acc;
        }, false);
    };

    render() {
        return (
            <MainView>
                <SubTitle><h4>Enter the receiver's address:</h4></SubTitle>
                <FormRow>
                    <AddressForm handleChange={this.handleChange} {...this.state} />
                </FormRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} prev next disabled={this.isButtonEnabled()} />
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
