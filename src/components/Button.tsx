/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../static/style/colors.js';


type ButtonProps = {
    children: React.ReactNode;
    name?: string,
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick, name }: ButtonProps) => {
    return (
    <button css={style} onClick={onClick}>{ name }{ children }</button>
    );
};

const style = css`
    outline: 0;
    border: 0;
    background-color: ${colors.NL98};
    color: blue;
`;

export default Button;