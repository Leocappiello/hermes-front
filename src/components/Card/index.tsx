'use client';
import styled from 'styled-components';

const CardDiv = styled.div`
    border: 1px solid white;
    border-radius: 15px;
    padding: 1em;
`

export default function Card({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <CardDiv>
            {children}
        </CardDiv>
    )
}
