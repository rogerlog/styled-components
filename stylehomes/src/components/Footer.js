import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #550000;
    height: 90px;


`

const FooterItem = styled.div `
    text-decoration: none;
    font-size: 16px;
    color: #bbb;
    vertical-align: center;
`

export default function footer() {
    return( 
        <React.Fragment>
            <Footer>
                <FooterItem>Aula sobre  Styled Components</FooterItem>
            </Footer>

        </React.Fragment>
    );
}