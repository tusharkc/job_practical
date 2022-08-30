import React from "react";

const UserDetailsCard = ({ userDetails = {} }) => {
  const {
    email,
    name,
    username,
    phone,
    address: { city, street, suite },
    company: { name: companyName, catchPhrase },
    website,
  } = userDetails;
  return (
    <div>
      <p>Username : {username}</p>
      <p>Email : {email}</p>
      <p>Name : {name}</p>
      <p>Company : {companyName}</p>
      <p>Tag Line : {catchPhrase}</p>
      <p>Phone : {phone}</p>
      <p>City : {city}</p>
      <p>Street : {street}</p>
      <p>Suite : {suite}</p>
      <p>Website : {website}</p>
    </div>
  );
};

export default UserDetailsCard;
