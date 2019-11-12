import React from "react";
import { WizardAction } from '../../core/components/wizard';
import styled from 'styled-components';

const NavigationRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`;

const NavigationRightSide = styled.div`
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const NavigationLeftSide = styled.div`
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Button = styled.button`
    max-height: 38px;
    min-width: 85px;
`

class Navigation extends React.Component {

    handleNextClick = () => {
        this.props.onAction(WizardAction.next);
    };

    renderNextButton = () => {
        const { next, disabled } = this.props;
        if (!next) {
            return;
        }
        return (
            <Button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleNextClick}
                disabled={disabled}>
                Next
            </Button>
        )
    };

    handlePreviousClick = () => {
        this.props.onAction(WizardAction.prev);
    };

    renderPreviousButton = () => {
        const { prev } = this.props;
        if (!prev) {
            return;
        }
        return (
            <Button
                className="btn btn-secondary"
                type="button" onClick={this.handlePreviousClick}>
                Previous
            </Button>
        )
    };

    handleConfirmClick = () => {
        this.props.onAction(WizardAction.end);
    };

    renderConfirmButton = () => {
        const { confirm } = this.props;
        if (!confirm) {
            return;
        }
        return (
            <Button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleConfirmClick}>
                Confirm
            </Button>
        )
    };

    render() {
        return (
            <NavigationRow>
                <NavigationLeftSide>
                {this.renderPreviousButton()}
                </NavigationLeftSide>
                <NavigationRightSide>
                {this.renderNextButton()}
                {this.renderConfirmButton()}
                </NavigationRightSide>
            </NavigationRow>
        );
    }
}

export default Navigation;
