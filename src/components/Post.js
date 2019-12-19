import React from "react";
import moment from "moment";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad('.lazy');
}

function formatUsername(author) {
  return `/u/${author}`.toLowerCase();
}

function decodeImgUrl(url) {
  return url.replace(/&amp;/g, '&');
}

function getTimeAgo(time) {
  return moment(new Date(time * 1000).toLocaleString()).fromNow();
}

export class Post extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const { title, url, author, upvotes, posted, image } = this.props;
    
    return (
      <div className="post">
        <p>Title: {title}</p>
        <p>Url: {url}</p>
        <p>Author: {formatUsername(author)}</p>
        <p>Upvotes: {upvotes}</p>
        <p>Time Posted: {getTimeAgo(posted)}</p>
        <img className="lazy" data-src={decodeImgUrl(image)} alt={`${formatUsername(author)}'s makeup look`} />
        <hr />
      </div>
    );
  };
};

export default Post;