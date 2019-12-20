import React from 'react';
import Test from '../components/Test';
import Sample from '../components/Sample';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';

const TestBlock = styled('div')`
    color: red;
    border: 1px solid #000;
    h1 {
        border: 1px solid #000;
    }
`;

// const style = css`
//     color: hotpink;
// `;

const App: React.FC = () => {
    return (
        <div>
            <TestBlock>
                <h1>H1입니다</h1>
            </TestBlock>
            <Test />
            <Sample />
        </div>
    );
};

export default App;
