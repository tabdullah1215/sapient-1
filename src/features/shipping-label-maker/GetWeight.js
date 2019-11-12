import React, {useState} from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const GetWeight = (props) => {
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


    const [weight, setWeight] = useState(props.wizardContext.weight);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setWeight(value);
    };

    const handleNavigationClick = (action) => {
        props.handleNext(
            weight
        , 'weight');
        props.onAction(action);
    };

    const isButtonEnabled = () => {
        if(weight.length === 0 || parseInt(weight) <= 0){
            return false;
        }
    };
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
                    onChange={(e) => handleChange(e)}
                />
            </FormRow>
            <NavigationRow>
                <Navigation onAction={handleNavigationClick} prev next disabled={isButtonEnabled()} />
            </NavigationRow>
        </MainView>
    );
};

export default GetWeight;

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};
