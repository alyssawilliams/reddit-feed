import React from 'react';

function Header(props) {
  return (
    <header>
      <button onClick={props.clickHandler} value="feed">/r/{props.subreddit}</button>
      <button onClick={props.clickHandler} value="favorites">Favorites (n)</button>
    </header>
  );
}

export default Header;
