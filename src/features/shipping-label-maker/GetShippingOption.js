import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const MainView = styled.div`
    height: 100%;
    width: 100%;
    text-align: left;
`;
class GetShippingOption extends React.Component {

    constructor(props) {
        super(props);
        const { shippingOption } = this.props.wizardContext;
        this.state = {
            shippingOption
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleNavigationClick = (action) => {
        const { shippingOption } = this.state;
        this.props.wizardContext.shippingOption = shippingOption;
        this.props.onAction(action);
    };

    render() {
        return(
            <MainView>
                <div className="form-group">
                    Get Shipping Option
                </div>
                <Navigation onAction={this.handleNavigationClick} prev next />
            </MainView>
        );
    }
}

export default GetShippingOption;
