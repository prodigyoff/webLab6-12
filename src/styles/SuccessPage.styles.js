import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80.25vh;
    margin-top: 50px;
    h1 {
        color: grey;
        font-size: 60px;
        margin: 5px 0;
    }
    div {
        color: grey;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    button {
        width: 300px;
        height: 90px;
        margin: 20px 0 40px 0;
        padding: 8px 10px;
        border-radius: 20px;
        font-size: 32px;
        font-weight: 700;
        border: 1px solid grey;
        color: grey;
        outline: none;
    }
`