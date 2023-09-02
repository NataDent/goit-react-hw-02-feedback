import styled from 'styled-components';
import { colorByOptions } from 'components/utils/colorByOptions';

export const ButtonsBar = styled.ul`
  display: flex;
  justify-content: center;
  aline-items: center;
  gap: 30px;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.li`
  display: block;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Button = styled.button`
  background-color: ${({ option }) => colorByOptions(option)};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 6px;
  min-width: 80px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.1);
  }
`;
