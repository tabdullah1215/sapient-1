import React from 'react';
import styled from 'styled-components';

const MainView = styled.div`
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
`;

const ShippingLabelView = styled.div`
    width: 100%;
    height: 85%;
    padding: 20px 20px;
    border: 3px solid black;
    border-radius: 20px;
    background-color: lightgrey;
`;

const FromView = styled.div`
    width: 100%;
    height: 50%;
    padding: 10px 10px;
`;

const ToView = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-display: column;
    justify-content: center;
    padding: 10px 10px;
`;

const Button = styled.button`
    max-height: 38px;
    min-width: 85px;
`;

const Footer = styled.div`
    width: 100%
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
`;

const FromContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    margin-right: 5px;
    font-size: 0.8em;
    background-color: white;
`;

const ToContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    margin-right: 5px;
    background-color: white;
`;

const Category = styled.div`
    font-weight: bold;
`;

class ShippingLabel extends React.Component {

    handleNavigationClick = () => {
        this.props.onComplete(false);
    };

    getFromView = () => {
        const {from} = this.props.shippingLabel;
        return(
            <FromContainer>
                <Category>From:</Category>
                {
                    Object.keys(from).map((f, i) => {
                        return <div key={i}>{from[f]}</div>
                    })
                }
            </FromContainer>
        )
    };
    getToView = () => {
        const {to} = this.props.shippingLabel;
        return(
            <ToContainer>
                <Category>To:</Category>
                {
                    Object.keys(to).map((f, i) => {
                        return <div key={i}>{to[f]}</div>
                    })
                }
            </ToContainer>
        )
    };

    renderMakeButton = () => {
        return (
            <Button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleNavigationClick}>
                Make Another Label
            </Button>
        )
    };

    renderPrintButton = () => {
        return (
            <Button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleNextClick}>
                Print Label
            </Button>
        )
    };

    render() {
        return(
            <MainView>
                <ShippingLabelView>
                    <FromView>
                        {this.getFromView()}
                    </FromView>
                    <ToView>
                        {this.getToView()}
                    </ToView>
                </ShippingLabelView>
                <Footer>
                    {this.renderMakeButton()}
                    {this.renderPrintButton()}
                </Footer>
            </MainView>
        );
    }
}

export default ShippingLabel;
