import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const MainView = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
`;

const Input = styled.input`
    margin-bottom: 10px;
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

class Confirm extends React.Component {

    handleNavigationClick = (action) => {
        this.props.onAction(action);
    };

    render() {
        return(
            <MainView>
                <SubTitle><h4>Confirm Shipping Information:</h4></SubTitle>
                <FormRow className="form-group">
                    Confirm
                </FormRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} prev confirm />
                </NavigationRow>
            </MainView>
        );
    }
}

export default Confirm;
