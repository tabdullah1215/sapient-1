import React from 'react';

class ShippingLabel extends React.Component {

    handleNavigationClick = (action) => {
        this.props.onAction(action);
    };

    render() {
        return(
            <div>
                <h1>shipping Label</h1>
            </div>
        );
    }
}

export default ShippingLabel;
