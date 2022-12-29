import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
border-radius:50px;
background: ${({primary}) => (primary? '#01BF71':'#1b2222')};
white-space: nowrap;
color: ${({dark}) => (dark? '#010606':'#fff')};
padding: ${({big}) => (big? '14px 48px': '12px 30px')};
font-size: ${({FontBig}) => (FontBig? '20px': '16px')};
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary? '#fff':'#01BF71')};
}

`