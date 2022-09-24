import styled from "styled-components";

export const InfoUserWrapper = styled.section`
  margin: 24px 0px;
  padding: 24px;
  width: 100%;
  background: var(--light-color-b);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  display: flex;
  gap: 20px;
`;
export const AvatarBox = styled.section`
  > div {
    height: 200px;
    width: 200px;
    background: teal;
    border-radius: 100px;
    overflow: hidden;
  }
`;
export const InfoUserBox = styled.section`
  flex: 1;
`;
export const TitleUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 a {
    font-size: 2rem;
    margin: 0px;
    padding: 0px;
    display: block;
    > i {
      display: block;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
export const BoxInfoBio = styled.div`
  width: 100%;
  padding: 1.2rem 0rem;
  line-height: 1.5rem;
`;
export const UserFollowers = styled.div`
  width: 100%;
  display: flex;
  background: var(--light-color-a);
  justify-content: space-around;
  gap: 20px;
  padding: 32px 0px;
  > div {
    text-align: center;
    > h3 {
      font-size: 1.8rem;
    }
  }
`;
export const SubInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0px;
  gap: 20px;
  span {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    gap: 8px;
  }
`;
export const Container = styled.section`
  max-width: 57.5rem;
  padding: 0rem 1rem;
  margin: 0 auto;
`;
export const NoUser = styled.div`
  margin: 24px 0px;
  padding: 24px;
  width: 100%;
  background: var(--light-color-b);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  > p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
  }
`;
