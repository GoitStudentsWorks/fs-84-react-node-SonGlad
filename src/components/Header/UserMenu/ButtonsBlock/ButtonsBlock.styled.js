import styled from 'styled-components';

export const InfoOptions = styled.div`
  display: flex;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: 73px;
  }
  @media screen and (min-width: 834px) {
    margin-right: 124px;
  }
`;

export const InfoBlock = styled.div`
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 833px) {
    display: none;
  }
  @media screen and (min-width: 834px) {
    display: flex;
    &:nth-child(1) {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    &:nth-child(1) {
      margin-right: 80px;
    }
  }
`;
export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.color.primary_grey}; //боред колір на макеті інший(не доданий в теми)
  border-radius: 12px;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`;

export const InfoBlockName = styled.p`
  color: ${p => p.theme.color.primary_white};
  font-size: 14px;
  font-weight: 600;
`;
export const InfoBlockText = styled.p`
  color: ${p => p.theme.color.primary_white};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const ArrowSvg = styled.img`
  width: 14px;
  margin-left: 12px;
`;

export const WeightKg = styled.span`
  color: ${p => p.theme.color.gray};
  font-size: 14px;
  font-weight: regular;
  margin-left: 4px;
  margin-right: 6px;
`;
export const EditSvg = styled.img`
  width: 16px;
`;