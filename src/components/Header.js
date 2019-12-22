import React from 'react';

export default function Header(props) {
  return (
    <header>
      <button className="header-button feed-toggle active" id="feed" onClick={props.toggleTab} value="feed">
        <i className="icon fab fa-reddit-alien"></i> /r/{props.subreddit}
      </button>

      <button className="header-button favorites-toggle" id="favorites" onClick={props.toggleTab} value="favorites">
        <i className="icon fas fa-heart"></i> favorites ({props.favoritesCount})
      </button>
    </header>
  );
}