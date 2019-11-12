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
    background-color: yellow;
`;

const FromView = styled.div`
    width: 100%;
    height: 30%;
    padding: 10px 10px;
    background-color: blue;
`;

const ToView = styled.div`
    width: 100%;
    height: 70%;
    padding: 10px 10px;
    background-color: green;
`;

const Footer = styled.div`
    width: 100%
    height: 15%;
    background-color: pink;
`;

class ShippingLabel extends React.Component {

    handleNavigationClick = (action) => {
        this.props.onAction(action);
    };

    render() {
        return(
            <MainView>
                <ShippingLabelView>
                    <FromView/>
                    <ToView/>
                </ShippingLabelView>
                <Footer/>
            </MainView>
        );
    }
}

export default ShippingLabel;
