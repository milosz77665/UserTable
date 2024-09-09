import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const OutletContainer = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledH1 = styled.h1`
  font-size: 4rem;
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <StyledH1>User Table</StyledH1>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
};

export default RootLayout;
