import { color } from "@/styles/root";
import styled from "styled-components";


export const NotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  flex-direction: column;
  .error-number{
    font-weight: bold;
    text-transform: uppercase;
    color: ${color.third}
  }
  .btn-back-home{
    margin-top: 3rem;
  }
  h1, p{
    text-align: center;
  }
  p{
    max-width: 600px;
  }

`