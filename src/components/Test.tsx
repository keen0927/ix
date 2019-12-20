import React from 'react';
import styled from 'styled-components';

interface ITest {
    isActive: boolean
}

const WrapBlock = styled.div<ITest>`
    width: 200px;
    border: 1px solid red;
    background-color: ${props => (props.isActive ? 'red' : 'green')};
`;


type TestProps = {
    name: string
}
const Test = () => {
    return (
        <WrapBlock isActive={false}>Components</WrapBlock>
    );
};

export default Test;