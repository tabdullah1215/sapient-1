import React from 'react';
import AddressForm from './AddressForm';
import Navigation from './Navigation';
import styled from "styled-components";

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
                <AddressForm handleChange={this.handleChange} {...this.state} />
                <Navigation onAction={this.handleNavigationClick} next />
            </MainView>
        );
    }
}

export default GetSenderAddress;
