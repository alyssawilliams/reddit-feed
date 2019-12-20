import React from 'react';

function Header(props) {
  return (
    <header>
      <button onClick={props.toggleTab} value="feed">/r/{props.subreddit}</button>
      <button onClick={props.toggleTab} value="favorites">Favorites (n)</button>
    </header>
  );
}

export default Header;
