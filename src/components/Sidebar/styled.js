import Styled from 'styled-components'

export const Sidebar = Styled.aside`
    width: 25vw;
    height: 100vh;

    background-color: #1A1A1D;
`

export const Module = Styled.div`
    background-color: #1A1A1D;
    border-bottom: 2px solid #1A1A1D;
    margin: 2px;

    & + & {
        margin-bottom: 20px;
    }
`

export const ModuleTitle = Styled.p`
    padding: 20px 15px;

    color: #E3E3E3;
    font-size: 20px;
`

export const ButtonChoiceLesson = Styled.button`
    width: 100%;
    height: 50px;

    border: 0;
    background-color: #202124;
    color: hsla(0,0%,100%,0.5);

    &:hover {
        cursor: pointer;
        background-color: #2B2C2F;
    }

    &.enable {
        background-color: #486;
        color: white;
    }

`

