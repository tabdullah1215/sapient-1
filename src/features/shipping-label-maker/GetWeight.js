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
`;

const Input = styled.input`
    margin-bottom: 10px;
`;

const SubTitle = styled.div`
    width: 100%;
    height: 15%;
    text-align: left;
`;

const FormRow = styled.div`
    width: 100%;
    height: 70%;  
`;

const NavigationRow = styled.div`
    width: 100%;
    height: 15%;
`;

class GetWeight extends React.Component {

    constructor(props) {
        super(props);
        const { weight } = this.props.wizardContext;
        this.state = {
            weight
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleNavigationClick = (action) => {
        const { weight } = this.state;
        this.props.wizardContext.weight = weight;
        this.props.onAction(action);
    };

    render() {
        const { weight } = this.state;
        return(
            <MainView>
                <SubTitle><h4>Enter Weight:</h4></SubTitle>
                <FormRow className="form-group">
                    <label htmlFor="name">Weight</label>
                    <Input
                        className="form-control"
                        id="weight"
                        name="weight"
                        type="number"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={(e) => this.handleChange(e)}
                    />
                </FormRow>
                <NavigationRow>
                    <Navigation onAction={this.handleNavigationClick} prev next />
                </NavigationRow>
            </MainView>
        );
    }
}

export default GetWeight;
