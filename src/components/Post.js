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
    const { id, title, permalink, author, upvotes, posted, handleFavorite, favoriteAction, image } = this.props;
    let favoriteIcon = favoriteAction === "Add" ? "icon fas fa-heart" : "fas fa-trash-alt";

    return (
      <div className="post" key={id}>
        <div className="image-wrapper">
          <button className="favorite-button" onClick={() => handleFavorite(id)}>
            <i className={favoriteIcon} role="presentation" aria-label={setFavoriteButtonText(favoriteAction)}></i>
          </button>
          <img className="image lazy" data-src={decodeImgUrl(image)} alt={`${formatUsername(author)}'s makeup look`} />
        </div>
        <a className="link" href={formatUrl(permalink)} target="_blank" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
        </a>
        <div className="post-info">
          <span className="author">
            <i className="icon fas fa-user"></i>
            {formatUsername(author)}
          </span>

          <span className="spacer">•</span>

          <span className="posted">
            <a className="link" href={formatUrl(permalink)} target="_blank" rel="noopener noreferrer">
              <i className="icon far fa-clock"></i>
              {getTimeAgo(posted)}
            </a>
          </span>

          <span className="spacer">•</span>

          <span className="upvotes">
            <i className="icon fas fa-bolt"></i>
            {upvotes}
          </span>
        </div>
      </div>
    );
  };
};