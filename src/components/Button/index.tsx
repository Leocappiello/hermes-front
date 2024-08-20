'use client';
import styled from 'styled-components';

const ButtonMod = styled.button<{color?: string}>`
    background-color: ${(props) => props.color ? props.color : 'white'};
    padding: 1em 1em;
    border-radius: 3px;
    color: black;
    border: 0;
    cursor: pointer;
`

export default function Button({
    color,
    children,
    onClick
  }: Readonly<{
    color?: string;
    children: React.ReactNode;
    onClick: () => void;
  }>) {
    return (
        <ButtonMod color={color} onClick={onClick}>
            {children}
        </ButtonMod>
    )
}