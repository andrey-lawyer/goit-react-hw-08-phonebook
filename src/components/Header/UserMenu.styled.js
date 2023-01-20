import styled from 'styled-components';

export const BlockUser = styled.div`
  display: inline-block;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
`;

export const ButtonLogOut = styled.button`
  width: 60px;
  margin-left: 20px;
  border: solid 1px blue;
  padding: 3px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  :hover,
  focus {
    transform: scale(1.05);
    color: white;
    background-color: blue;
  }
`;
