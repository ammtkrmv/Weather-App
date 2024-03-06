import styed from 'styled-components';

export const HeaderContainer = styed.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;
export const Title = styed.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 2.2rem;
`;

export const HeaderIconsContainer = styed.div`
  display: flex;
  align-items: center;
`;
