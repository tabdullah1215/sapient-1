import React, {Component} from 'react';
import Wizard from '../../core/components/wizard';
import GetSenderAddress from './GetSenderAddress';
import GetReceiverAddress from './GetReceiverAddress';
import GetWeight from './GetWeight';
import GetShippingOption from './GetShippingOption';
import Confirm from './Confirm';
import ShippingLabel from './shipping-label';
import styled from 'styled-components';

const MainView = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const initialState = {
    complete: false,
    shippingInfo: {
        from: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        to: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        weight: 0,
        shippingOption: 1
    }
};


export default class ShippingLabelMaker extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };

        this.steps = [GetSenderAddress, GetReceiverAddress, GetWeight, GetShippingOption, Confirm];
    }

    getHeader = () => {
        return (
            <h2>
                Shipping Label Maker
            </h2>
        )
    };

    onComplete = (action) => {
        if(!action){
            this.setState({
                ...initialState
            });
        }
        this.setState({
            complete: action
        });
    };

    handleNext = (newState, key) => {
        let shippingInfo = {...this.state.shippingInfo};
        shippingInfo[key] = newState;
        this.setState({
            shippingInfo
        })
    };

    render() {
        const { complete, shippingInfo } = this.state;
        if (complete) {
            return (
                <MainView>
                    <ShippingLabel shippingLabel={shippingInfo} onComplete={this.onComplete} />
                </MainView>
            );
        } else {
            return (
                <MainView>
                    <Wizard header={this.getHeader}
                        steps={this.steps}
                        wizardContext={shippingInfo}
                        onComplete={this.onComplete}
                        handleNext={this.handleNext}/>

                </MainView>
            );
        }
    }
}