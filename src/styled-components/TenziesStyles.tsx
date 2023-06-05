import { styled } from 'styled-components';

interface DiComponentProps {
  isHeld: boolean;
}

export const TenziesMainStyles = styled.main`
  background-color: #f5f5f5;
  height: 400px;
  max-width: 100%; //800px
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
h1{
  color:#5035ff;
}
  .di-component-container {
    display: grid;
    grid-template: auto auto / repeat(5, 1fr);
    gap: 20px;
  }

  .button-container {
    margin: 20px;
  }
  .button-container button:hover {
    cursor: pointer;
    background: #050122;
  }
`;

export const DiComponentStyles = styled.div<DiComponentProps>`
  background: ${(props) => (props.isHeld ? '#59E391' : 'white')};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CustomButton = styled.button`
  background: #5035ff;
  box-shadow: 0px 3.2px 7.68px rgba(0, 0, 0, 0.18);
  height: 50px;
  width: 100px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1.2rem;
`;
