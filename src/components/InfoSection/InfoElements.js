import styled from "styled-components";

export const Section = styled.section`
  background: black;
  color: #fff;

  h3 {
    font-weight: 700;
    font-size: 26px;
  }

  .content {
    ul {
      padding: 0;
    }

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 992px) {
    img {
      opacity: 0.6;
      max-width: 60%;
      margin-bottom: 30px;
    }

    .section-title {
      padding-bottom: 0;
    }
  }
`;

