import styled from "styled-components";

const Container = styled.section`
    background: #fff;
    padding: .75em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 1em 1em;
    border-top: 0;
    border-bottom: 1px solid #eaeef2;
    border-right: 1px solid #eaeef2;
    border-left: 1px solid #eaeef2;
`

const Hoverer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25em;
    border-radius: 99px;

    &:hover{
        cursor: pointer;
        background: #00000010;
        transition: all ease-in-out .3s;
    }
`

const Operations = styled.section`
    display: flex;
    alig-items: center;
`

export {
    Container,
    Hoverer,
    Operations
}