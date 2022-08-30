import React from "react";
import { useNavigate } from "react-router-dom";

const UserListingRow = ({ name, email, id }) => {
  const navigate = useNavigate();
  const onTodoClick = () => {
    navigate(`/user/${id}/todo`);
  };

  const onDetailClick = () => {
    navigate(`/user/${id}/user-detail`);
  };

  return (
    <>
      <div className="listing_row_container">
        <p>{name}</p>
        <p>{email}</p>
        <button onClick={onTodoClick}>Todo</button>
        <button onClick={onDetailClick}>Details</button>
      </div>
    </>
  );
};

export default UserListingRow;
