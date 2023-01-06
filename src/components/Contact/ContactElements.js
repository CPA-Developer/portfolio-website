import styled from "styled-components";




export const Section = styled.section`
 
  padding: 3rem;
 height: auto;
 width: auto;
  color:  rgb(242, 242, 242);
  background: black;

  @media only screen and (max-width: 768px) {
  .Toastify__toast-container{
    width: 180px;
    
   
  
  }
  .Toastify__toast-container--bottom-center, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
  margin-top: 200px;
  margin-left: 4rem;
}

}
  
`;



export const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    @media (max-width: 992px) {
     width: 60%;
     margin-left: 1rem;
    }


    input {
      width: 100%;
      background: #5e816d;
      height: 35px;
      padding: 7px;
      
      outline: none;
      border-radius: 5px;
     
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      background: #5e816d;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 4px;
   
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #01BF71;
      color: #010606;
      border: none;
      margin-bottom: 5rem;

      &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    
}
    }
  }
`;