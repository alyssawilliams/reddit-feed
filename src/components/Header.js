import React from 'react';

function Header(props) {
  return (
    <header>
      <button className="header-button feed-toggle" onClick={props.toggleTab} value="feed">
        <i className="icon fab fa-reddit-alien"></i> /r/{props.subreddit}
      </button>

      <button className="header-button favorites-toggle" onClick={props.toggleTab} value="favorites">
        <i className="icon fas fa-heart"></i> favorites ({props.favoritesCount})
      </button>
    </header>
  );
}

export default Header;
