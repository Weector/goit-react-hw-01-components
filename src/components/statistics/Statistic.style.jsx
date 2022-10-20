import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  padding: 40px;
`;

export const Title = styled.h2`
  padding: 40px 0;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  background-color: cornflowerblue;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const Item = styled.li`
  display: grid;
  gap: 20px;
  padding: 10px;
  width: 56px;
  height: 80px;
  justify-items: center;
  align-content: center;
  color: white;
  background-color: ${({ color }) => color};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
