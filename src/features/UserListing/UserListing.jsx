import React from "react";
import UserListingRow from "./components/UserListingRow";
import { useUsersQuery } from "./service/userListing.service";
import "./userListing.styles.css";

const UserListing = () => {
  const { data, isFetching } = useUsersQuery();

  return (
    <div>
      {isFetching ? (
        <p>Loading Data</p>
      ) : (
        data?.map((item, i) => <UserListingRow {...item} key={i} />)
      )}
    </div>
  );
};

export default UserListing;
