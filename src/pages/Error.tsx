import { useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const ErrorContainer = styled.section`
  margin-top: 6rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: flex-start;
  justify-content: center;
`;

const ErrorTitle = styled.h1`
  font-size: 5rem;
`;

const ErrorDesc = styled.p`
  font-size: 2rem;
`;

const HomePageButton = styled(Button)`
  margin-left: 6rem;
  margin-top: 7rem;
  font-size: 1.3rem;
`;

interface RouteError {
  status: number;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;
  const { status } = error;

  const errorMessage = status === 404 ? "Page not found" : "Something went wrong";

  return (
    <>
      <ErrorContainer>
        <ErrorTitle>Error {status}</ErrorTitle>
        <ErrorDesc>{errorMessage}</ErrorDesc>
      </ErrorContainer>
      {status === 404 && (
        <HomePageButton
          onClick={() => {
            navigate("/");
          }}
        >
          Home page
        </HomePageButton>
      )}
    </>
  );
};

export default Error;
