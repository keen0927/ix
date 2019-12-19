import React from 'react';

type TestProps = {
    name: string
}
const Test = ({name}: TestProps) => {
    return (
        <div>
            Components
            {name}
        </div>
    );
};

export default Test;