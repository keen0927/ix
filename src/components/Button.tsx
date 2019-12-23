/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../static/style/colors.js';


type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button css={style} onClick={onClick}>{ children }</button>
    );
};

const style = css`
    outline: 0;
    border: 0;
    background-color: ${colors.NL98};
    color: blue;
`;

export default Button;