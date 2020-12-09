import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `

background-color: #990000;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 10px;
width: 100%;
height: 60px;
`

const Item = styled.a `
margin: 10px;
font-size: 14px;
font-family: 'Read';
font-weight: 600;
align-items: center;
padding: 20px;
color: #fff;
`

export default function header() {
    return ( 
    <Nav>
        <Item> Home </Item> 
        <Item> Contato </Item> 
        <Item> Sobre </Item> 
    </Nav>
    );
}