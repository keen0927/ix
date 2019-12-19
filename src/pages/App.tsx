import React, { useState } from 'react';
import Test from '../components/Test';
import styled from 'styled-components';

interface IStyle {
    isActive: boolean
}

const AppBlock = styled.div<IStyle>`
    width: 100px;
    height: 200px;
    border: 1px solid #000;
    background-color: ${props => (props.isActive ? 'red' : '')};
`;

const App = () => {

    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <AppBlock isActive={isActive} onClick={onClick}>
            <Test name="keen" />
        </AppBlock>
    );
};

export default App;