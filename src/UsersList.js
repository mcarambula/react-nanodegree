import React from 'react';

const UsersList = (props) => {
    if (props.likedBy.length > 0) {
      return (
        <div>
          <p>Liked by: </p>
          <ul>{props.likedBy.map(userID => <li>{props.users[userID].name}</li>)}</ul>
        </div>
      )
    }
    return "None of the current users liked this movie";
}

export default UsersList;
