import styled from "styled-components";

export const SearchBox = styled.header`
  width: 100%;
`;
export const Container = styled.div`
  max-width: 57.5rem;
  padding: 0rem 1rem;
  margin: 0 auto;
`;
export const ButtonSearch = styled.button`
  padding: 0rem 2.2rem;
  background: var(--blue-color);
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  color: var(--light-color-b);
  cursor: pointer;
  @media (max-width: 36.5rem) {
    display: none;
  }
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 2rem;
  padding: 5px;
  background: var(--bgComp);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  justify-content: space-between;
`;
export const InputSearchBox = styled.div`
  width: 100%;
  display: flex;

  > input {
    background: transparent;
    flex: 1;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--color);
    :focus {
      outline: none;
    }
    ::-webkit-input-placeholder {
      @media (max-width: 36.5rem) {
        font-size: 0.9rem;
      }
    }
  }
`;
export const BtnIcon = styled.button`
  padding: 0px 24px;
  font-size: 1.5rem;
  color: var(--blue-color);
  border: none;
  background: transparent;
  cursor: pointer;
`;
