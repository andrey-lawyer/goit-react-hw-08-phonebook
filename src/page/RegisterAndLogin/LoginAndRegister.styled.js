import styled from 'styled-components';
export const Registration = styled.section`
  padding: 20px;
  background: linear-gradient(
    179.2deg,
    rgb(21, 21, 212) 0.9%,
    rgb(53, 220, 243) 95.5%
  );
  color: white;
`;

export const TitleH1 = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 10px;
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
  margin-top: 5px;

  display: block;
`;
export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px;

  background-color: white;
  border: none;
  border-radius: 5px;
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
