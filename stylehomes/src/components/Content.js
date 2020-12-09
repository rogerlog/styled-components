import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background-color: aaaaff;
    flex-direction: row;    
    height: 400px;
    margin: 20 auto;
    box-sizing: border-box;
`

const ContentItem = styled.p `
    color: #eee;
    text-align: center;
    font-family: 'Read';
    padding: 20px;
    width: 250px;
    box-sizing: border-box;
    margin: 40px;
    background-color: #ff5555;
    border-radius: 4px;
`

export default function content() {
    return (
<React.Fragment>
    <Content>
        <ContentItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </ContentItem>
        <ContentItem>
        When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </ContentItem>
        <ContentItem>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </ContentItem>
        <ContentItem>
        When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </ContentItem>       

    </Content>
</React.Fragment>

    );
}
 