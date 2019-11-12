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
    box-sizing: border-box;
`;

const SubTitle = styled.div`
    width: 100%;
    height: 10%;
    text-align: left;
`;

const AddressRow = styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    flex-direction: row;
    font-size: 0.9em;

`;

const NavigationRow = styled.div`
    width: 100%;
    height: 15%;
`;

const Category = styled.div`
    font-weight: bold;
`;

const SideContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    margin-right: 5px;
`;

const DataRow = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    font-size: 0.9em;
`;

class Confirm extends React.Component {
    constructor(props){
        super(props);
    }

    handleNavigationClick = (action) => {
        this.props.onAction(action);
    };

    getConfirmFrom = () => {
        const {from} = this.props.wizardContext;
        return(
            <SideContainer>
                <Category>From:</Category>
                {
                    Object.keys(from).map(f => {
                        return <div>{from[f]}</div>
                    })
                }
            </SideContainer>
        )
    };

    getConfirmTo = () => {
        const {to} = this.props.wizardContext;
        return(
            <SideContainer>
                <Category>To:</Category>
                {
                    Object.keys(to).map(f => {
                        return <div>{to[f]}</div>
                    })
                }
            </SideContainer>
        )
    };
    getConfirmWeight = () => {
        const {weight} = this.props.wizardContext;
        return(
            <SideContainer>
                <Category>Weight:</Category>
                <div>{`${weight} lbs`}</div>
            </SideContainer>
        )
    };

    getConfirmShippingOption = () => {
        const {shippingOption} = this.props.wizardContext;
        return(
            <SideContainer>
                <Category>Shipping Option:</Category>
                <div>
                    <span>{`Option: ${shippingOption.value}`}</span>
                    <span>{`, Description: ${shippingOption.label}`}</span>
                </div>
            </SideContainer>
        )
    };

    render() {
        console.log(this.props);
        return(
            <MainView>
                <SubTitle><h4>Confirm Shipping Information:</h4></SubTitle>
                <AddressRow className="form-group">
                    {this.getConfirmFrom()}
                    {this.getConfirmTo()}
                </AddressRow>
                <DataRow>
                    {this.getConfirmWeight()}
                    {this.getConfirmShippingOption()}
                </DataRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} prev confirm />
                </NavigationRow>
            </MainView>
        );
    }
}

export default Confirm;
