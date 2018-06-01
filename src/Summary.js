import React, { Component } from 'react';
import UsersList from './UsersList';

const Summary = (props) => {
  return (
    <div>
      <h2>{props.movies[props.currentMovie].name}</h2>
      <UsersList likedBy={props.likedBy[props.currentMovie] || []} users={props.users}/>
    </div>
  )

}

export default Summary;
