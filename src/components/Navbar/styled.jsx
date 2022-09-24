import styled from "styled-components";

export const NavbarBox = styled.nav`
  width: 100%;
  padding-top: 4rem;
`;
export const Container = styled.div`
  max-width: 57.5rem;
  padding: 0rem 1rem;
  margin: 0 auto;
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Brand = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ButtonTheme = styled.button`
  padding: 0rem 1.25rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--color);
  > span {
    margin-right: 0.8rem;
  }
`;
