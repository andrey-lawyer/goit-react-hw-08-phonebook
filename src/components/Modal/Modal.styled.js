import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  background: linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);
  border-radius: 5px;
  max-width: calc(100vw - 28px);
  max-height: calc(100vh - 24px);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: black;

  padding: 20px 30px;
`;
export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 300px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border: none;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  width: 100px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 3px;
  background: linear-gradient(
    95.2deg,
    rgb(173, 252, 234) 26.8%,
    rgb(192, 229, 246) 64%
  );
  border: none;
  border-radius: 2px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background: linear-gradient(
      to right,
      rgb(182, 244, 146),
      rgb(51, 139, 147)
    );
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 0 auto;
  margin-top: 0;
  margin-bottom: 20px;
`;
