import React from "react";
import { formatUrl, formatUsername, getTimeAgo, setFavoriteButtonText, decodeImgUrl } from "./postFunctions.js";
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
    const { id, title, permalink, author, upvotes, posted, handleFavorite, favoriteAction, isFavorited, image } = this.props;
    let favoriteIcon = favoriteAction === "Add" ? "icon fas fa-heart" : "fas fa-trash-alt";
    let favoriteButtonClass = isFavorited ? "favorite-button active" : "favorite-button";

    return (
      <div className="post" key={id} id={id}>
        <div className="image-wrapper">
          <button className={favoriteButtonClass} onClick={() => handleFavorite(id)}>
            <i className={favoriteIcon} role="presentation" aria-label={setFavoriteButtonText(favoriteAction)}></i>
          </button>
          <img className="image lazy" data-src={decodeImgUrl(image)} alt={`${formatUsername(author)}'s makeup look`} />
        </div>
        <a className="link" href={formatUrl(permalink)} target="_blank" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
        </a>
        <div className="post-info">
          <span className="group author">
            <i className="icon fas fa-user"></i>
            {formatUsername(author)}
          </span>

          <span className="group posted">
            <span className="spacer">•</span>
            <a className="link" href={formatUrl(permalink)} target="_blank" rel="noopener noreferrer">
              <i className="icon far fa-clock"></i>
              {getTimeAgo(posted)}
            </a>
          </span>

          <span className="group upvotes">
            <span className="spacer">•</span>
            <i className="icon fas fa-bolt"></i>
            {upvotes}
          </span>
        </div>
      </div>
    );
  };
};