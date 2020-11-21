import styled from 'styled-components'

export const SectionWrapper = styled.div`
    display: flex;
    background-color: #bdaeac;
    height: 100%;
    width:100%;
    justify-content: space-between;
`;

export const StyledText = styled.div`
    width: 40%;
    padding-top: 70px;
    color: white;
    font-size: 16px;
    margin-left: 8em;
    h1 {
        font-size: 40px;
        color: white;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
    img{
        height: 250px;
        width: 250px;
    }
    margin-bottom: 2.5em;
`