import styled from 'styled-components';
import image from 'images/1.jfif';
export const Contacts = styled.div`
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 10px;
  color: white;
`;

export const TitleBook = styled.h1`
  text-align: center;
  margin: 0;
`;

export const Loader = styled.div`
  position: absolute;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;
  color: #e36707cf;
`;

export const TitleH2 = styled.h2`
  text-align: center;
`;
