import styled from 'styled-components';
export const ListContacts = styled.ul`
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;
export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export const NameUser = styled.p`
  margin: 0;
  width: 160px;
`;
export const Phone = styled.p`
  margin: 0;
  width: 180px;
`;
export const ButtonDel = styled.button`
  margin-right: 20px;
  width: 80px;
  padding: 3px;

  border-radius: 5px;

  background-color: white;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    color: white;
  }
`;

export const ButtonEdit = styled.button`
  margin-right: 20px;
  width: 80px;
  padding: 3px;
  border: none;
  background: linear-gradient(
    95.2deg,
    rgb(173, 252, 234) 26.8%,
    rgb(192, 229, 246) 64%
  );
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

export const Buttons = styled.div``;
