import styled from 'styled-components';

export const ItemList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  padding: 40px;
  list-style: none;
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  width: 340px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const OlineMarker = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 40px;
  border-radius: 15px;
  ${({ marker }) => {
    if (marker) {
      return `background-color: green;`;
    } else return `background-color: red;`;
  }};
`;

export const AvatarImg = styled.img`
  margin-right: 40px;
  display: block;
  width: 60px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
