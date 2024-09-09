import { ChangeEvent, FC } from "react";
import Filter from "./Filter";
import User from "../models/User";
import { useDispatch, useSelector } from "react-redux";
import { visibleUsersActions } from "../reducers/visibleUsersReducer";
import { RootState } from "../store";

interface UserFilterProps {
  keyNames: (keyof User)[];
  columnNames: string[];
}

const UserFilter: FC<UserFilterProps> = ({ keyNames, columnNames }) => {
  const dispatch = useDispatch();
  const selectedOption: keyof User = useSelector((state: RootState) => state.visibleUsers.keyName);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(visibleUsersActions.searchFor(event.target.value));
  };

  const handleDropDownListChange = (selectedValue: keyof User) => {
    dispatch(visibleUsersActions.setKeyName(selectedValue));
  };

  return (
    <Filter<User>
      keyNames={keyNames}
      columnNames={columnNames}
      selectedOption={selectedOption}
      handleInputChange={handleInputChange}
      handleDropDownListChange={handleDropDownListChange}
    />
  );
};

export default UserFilter;
