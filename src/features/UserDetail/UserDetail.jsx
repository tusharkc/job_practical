import React from "react";
import { useLocation } from "react-router-dom";
import UserDetailsCard from "./components/UserDetailsCard";
import { useFetchUserDetailQuery } from "./service/userDetail.service";

const UserDetail = () => {
  const { pathname } = useLocation();
  const userId = pathname.replace(/[^0-9]/g, "");
  const { data, isFetching } = useFetchUserDetailQuery({ id: userId });

  return (
    <>
      {isFetching ? (
        <p>Data is Loading</p>
      ) : (
        <UserDetailsCard userDetails={data} />
      )}
    </>
  );
};

export default UserDetail;
