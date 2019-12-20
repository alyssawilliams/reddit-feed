import React from 'react';

function Header(props) {
  return (
    <header>
      <button onClick={props.toggleTab} value="feed">/r/{props.subreddit}</button>
      <button onClick={props.toggleTab} value="favorites">favorites ({props.favoritesCount})</button>
    </header>
  );
}

export default Header;
