import React from "react";
import { WizardAction } from './constants';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import styled from 'styled-components';

const MainView = styled.div`
    width: 800px;
    height: 500px;
    border: 5px solid black;
    border-radius: 20px;
    padding: 10px 20px;
`;

const HeaderView = styled.div`
    width: 100%;
    height: 25%;
    text-align: left;
`;

const FormView = styled.div`
    width: 100%;
    height: 75%;
`;

const SubTitle = styled.div`
    width: 100%;
    text-align: center;
`;

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        }
    }

    next = () => {
        const { currentStep } = this.state;
        if (currentStep >= this.props.steps.length) {
            return;
        }
        this.setState({
            currentStep: currentStep + 1
        });
    };

    prev = () => {
        const { currentStep } = this.state;
        if (currentStep === 0) {
            return;
        }
        this.setState({
            currentStep: currentStep - 1
        });
    };

    end = () => {
        this.props.onComplete();
    };

    onAction = (action) => {
        switch (action) {
            case WizardAction.next:
                return this.next();
            case WizardAction.prev:
                return this.prev();
            case WizardAction.end:
                return this.end();
            default:
                return;
        }
    };

    getStep = () => {
        const { currentStep } = this.state;
        const { steps, wizardContext } = this.props;
        const Comp = steps[currentStep];
        return (
            <Comp onAction={this.onAction} wizardContext={wizardContext} />
        );
    };

    render() {
        const { currentStep } = this.state;
        const { header, steps } = this.props;
        return (
            <MainView>
                <HeaderView>
                    {header()}
                    <SubTitle><p>Step {currentStep + 1} </p></SubTitle>
                    <ProgressBar percent={((parseInt(currentStep) + 1)/(steps.length))*100} />
                </HeaderView>
                <FormView>
                {this.getStep()}
                </FormView>
            </MainView>
        );
    }
}


export default Wizard;
