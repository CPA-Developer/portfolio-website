import styled from 'styled-components';

export const Section = styled.section`
  color: #fff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  .user{
  margin-top: 30px;
  font-size: 13px;
}

@media only screen and (max-width: 768px) {
  margin-top: -3rem;
}

`;
export const Container = styled.div`

`;

export const SocialLinks = styled.div`
  margin-top: 30px;
`;

export const Link = styled.a`
  font-size: 20px;
  display: inline-block;
  color: rgb(69, 80, 91);
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
  &:hover svg {
    color: ${(props) => props.color};
  }
`;