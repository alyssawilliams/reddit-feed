import React from "react";
import { formatUsername, getTimeAgo, setFavoriteButtonText, decodeImgUrl } from "./postFunctions.js";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad('.lazy');
}

export default class Post extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update();
  };

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  };

  render() {
    const { id, title, url, author, upvotes, posted, handleFavorite, favoriteAction, image } = this.props;

    return (
      <div className="post" key={id}>
        <p>Title: {title}</p>
        <p>Url: {url}</p>
        <p>Author: {formatUsername(author)}</p>
        <p>Upvotes: {upvotes}</p>
        <p>Time Posted: {getTimeAgo(posted)}</p>
        <button onClick={() => handleFavorite(id)}>{setFavoriteButtonText(favoriteAction)}</button>
        <img className="lazy" data-src={decodeImgUrl(image)} alt={`${formatUsername(author)}'s makeup look`} />
        <hr />
      </div>
    );
  };
};