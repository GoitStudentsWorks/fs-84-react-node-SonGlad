import styled from 'styled-components';

export const ItemWrapper = styled.div`
  ul {
    display: flex;
    gap: 8px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;

    @media screen and (min-width: 834px) {
      flex-wrap: nowrap;
    }
  }

  p {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    gap: 4px;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    width: 36px;
  }
`;

export const ClearButton = styled.button`
  border: none;
  background: transparent;

  svg {
    width: 20px;
    height: 20px;
    stroke: ${props => props.theme.color.primary_white};
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      stroke: ${props => props.theme.color.primary_lite_green};
    }
  }
`;