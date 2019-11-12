import React from "react";
import styled from 'styled-components';

const MainView = styled.div`
    height: 100%;
    width: 100%;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
`;

const InputRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const InputPair = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    margin-right: 5px;

`;

const InputShort = styled.input`
    width: 100%;
`;

// TODO: Should be functional component
class AddressForm extends React.Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    };

    render() {
        const {
            name,
            street,
            city,
            state,
            zip
        } = this.props;
        return (
            <MainView className="form-group">
                <label htmlFor="name">Name</label>
                <Input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => this.handleChange(e)}
                />
                <label htmlFor="street">Street</label>
                <Input
                    className="form-control"
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Enter street"
                    value={street}
                    onChange={(e) => this.handleChange(e)}
                />
                <InputRow>
                    <InputPair>
                        <label htmlFor="city">City</label>
                        <InputShort
                            className="form-control"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Enter city"
                            value={city}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </InputPair>
                    <InputPair>
                        <label htmlFor="state">State</label>
                        <InputShort
                            className="form-control"
                            id="state"
                            name="state"
                            type="text"
                            placeholder="Enter state"
                            value={state}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </InputPair>
                    <InputPair>
                        <label htmlFor="zip">Zip</label>
                        <InputShort
                            className="form-control"
                            id="zip"
                            name="zip"
                            type="text"
                            placeholder="Enter zip"
                            value={zip}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </InputPair>
                </InputRow>
            </MainView>
        );
    }
}

export default AddressForm;
