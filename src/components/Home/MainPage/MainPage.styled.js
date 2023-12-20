import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 10px 80px;

  outline: 2px solid red;
  outline-offset: -2px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 0px 27px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 34px 52px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 20px;

  @media screen and (min-width: 834px) {
    padding: 24px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 0 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;

    @media screen and (min-width: 834px) {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
`;

export const DashboardLink = styled(NavLink)`
  display: flex;
  color: ${props => props.theme.color.primary_grey};
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 834px) {
    font-size: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-left: 6px;
    stroke: ${props => props.theme.color.primary_grey};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }

  &:focus {
    color: ${props => props.theme.color.primary_green_lite};
    & svg {
      stroke: ${props => props.theme.color.primary_green_lite};
    }
  }
`;

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 6px;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const GoalItem = styled.div`
  flex: 1;
  width: 100%;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    &:nth-child(2),
    &:nth-child(3) {
      width: 50%;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
