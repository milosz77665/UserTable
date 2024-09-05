import Table from "../components/Table";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorInfo from "../components/ErrorInfo";
import User from "../models/User";

const Home = () => {
  const { userData } = useLoaderData() as { userData: User[] };

  return (
    <Suspense fallback={<LoadingSpinner size={80} />}>
      <Await resolve={userData} errorElement={<ErrorInfo>Could not fetch user data</ErrorInfo>}>
        {(loadedUserData: User[]) => (
          <Table<User>
            data={loadedUserData}
            keyNames={["name", "username", "email", "phone"]}
            columnNames={["Name", "Username", "E-mail", "Phone"]}
          />
        )}
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
