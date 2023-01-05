import styled from 'styled-components';

export const Section = styled.section`
 
  padding: 3rem;
 height: auto;
 width: auto;
  color:  rgb(242, 242, 242);
  background: black;
`;

export const Item = styled.div`
  padding: 0 0 20px 20px;
  margin-top: -2px;
  margin-left: 8px;
  border-left: 2px solid rgb(5, 99, 187);
  position: relative;

  h4 {
    line-height: 18px;
    font-size: 18px;;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: rgb(5, 99, 187);
    margin-bottom: 10px;
  }

  h5 {
    font-size: 16px;
    background: rgb(26, 26, 26);
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 0;
  }

  li {
    padding-bottom: 10px;

    svg {
      margin-right: 6px;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: rgb(26, 26, 26);
    border: 2px solid #0563bb;
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;
