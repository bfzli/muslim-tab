import styled from 'styled-components'

export const Element = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1em;
    border-radius: 0.75em;
    transition: all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
        background: #383e4760;
    }

    &:last-of-type {
        margin-right: 0em;
    }
`

export const Name = styled.p`
    font-size: 1em;
    text-align: center;
    font-weight: 400;
    margin-top: 0.75em;
    color: #fff;
`
