import React from 'react';
import './UserPage.css';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../store/AppAPI/userAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserPage = () => {
  const { id } = useParams();
  const { data: user = {}, isLoading, error, isError } = useGetUserQuery(id);
  if (isLoading) {
    return (
      <div>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h3>ERROR:{error.status}</h3>
        <p>{JSON.stringify(error.data)}</p>
      </div>
    );
  }
  return (
    <div className="user_page">
      <FontAwesomeIcon icon="circle-user" size="10x" />
      <div className="user_name">
        <h2>{user.username}</h2>
        <p>
          <span>Name: </span> {user.name}
        </p>
      </div>
      <ul className="user_details">
        <li>
          <FontAwesomeIcon icon="fa-regular fa-envelope" size="2x" />
          <p>
            <span>Email: </span>
            {user.email}
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-square-phone" size="2x" />
          <p>
            <span>Phone: </span>
            {user.phone}
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-location-dot" size="2x" />
          <p>
            <span>Address: </span>
            {user.address.city}, {user.address.street}, {user.address.suite}
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-globe" size="2x" />
          <p>
            <span>Website: </span>
            {user.website}
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-building" size="2x" />
          <p>
            <span>Company: </span>
            {user.company.name}, {user.company.bs}
          </p>
        </li>
      </ul>
    </div>
  );
};
