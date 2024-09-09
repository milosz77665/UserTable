import Table from "../components/Table";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorInfo from "../components/ErrorInfo";
import User from "../models/User";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { visibleUsersActions } from "../reducers/visibleUsersReducer";
import styled from "styled-components";
import UserFilter from "../components/UserFilter";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  max-width: 1500px;
`;

const Home = () => {
  const { userData } = useLoaderData() as { userData: User[] };
  const dispatch = useDispatch();
  const visibleUsers = useSelector((state: RootState) => state.visibleUsers.visibleUsers);
  const keyNames = ["name", "username", "email", "phone"] as (keyof User)[];
  const columnNames = ["Name", "Username", "E-mail", "Phone"];

  return (
    <Suspense fallback={<LoadingSpinner size={80} />}>
      <Await resolve={userData} errorElement={<ErrorInfo>Could not fetch user data</ErrorInfo>}>
        {(loadedUserData: User[]) => {
          useEffect(() => {
            dispatch(visibleUsersActions.setAllUsers(loadedUserData));
          }, [loadedUserData, dispatch]);
          return (
            <HomeContainer>
              <UserFilter keyNames={keyNames} columnNames={columnNames} />
              <Table<User> data={visibleUsers} keyNames={keyNames} columnNames={columnNames} />
            </HomeContainer>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Home;

const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const data: User[] = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const userDataLoader = async () => {
  return defer({
    userData: fetchUserData(),
  });
};
