import React from "react";
import { WizardAction } from '../../core/components/wizard';


class Navigation extends React.Component {

    handleNextClick = () => {
        this.props.onAction(WizardAction.next);
    };

    renderNextButton = () => {
        const { next } = this.props;
        if (!next) {
            return;
        }
        return (
            <button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleNextClick}>
                Next
            </button>
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
            <button
                className="btn btn-secondary"
                type="button" onClick={this.handlePreviousClick}>
                Previous
            </button>
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
            <button
                className="btn btn-primary float-right"
                type="button" onClick={this.handleConfirmClick}>
                Confirm
            </button>
        )
    };

    render() {
        return (
            <div>
                {this.renderPreviousButton()}
                {this.renderNextButton()}
                {this.renderConfirmButton()}
            </div>
        );
    }
}

export default Navigation;
