import { Link as LinkCategory } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Link = styled(LinkCategory)`
  text-decoration: none;
  color: inherit;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
`;
export const NameCategory = styled.p`
  text-align: center;
  font-family: 'Jost';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.45;
  }
`;

export const Category = styled.ul`
  margin-bottom: 32px;
  margin-top: 32px;
  .slider {
    width: 100%;
    position: relative;
  }
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .carousel__next-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgButton};
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    opacity: 1;
    pointer-events: all;
    transition: opacity 500ms ease;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
  }
  .carousel__back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgButton};
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    transition: opacity 500ms ease;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export const List = styled.li`
  width: 160px;
  padding: 4px;
`;

export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};

export const Pointer = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgCommon};
    & + li {
      background-color: ${({ theme }) => theme.color.bgButton};
    }
    & + li + li {
      background-color: ${({ theme }) => theme.color.bgCommon};
    }
  }
`;
