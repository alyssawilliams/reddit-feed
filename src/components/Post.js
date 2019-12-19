import React from "react";
import moment from "moment";

function formatUsername(author) {
  return `/u/${author}`.toLowerCase();
}

function decodeImgUrl(url) {
  return url.replace(/&amp;/g, '&');
}

function getTimeAgo(time) {
  return moment(new Date(time * 1000).toLocaleString()).fromNow();
}

function Post(props) {
  return (
    <div className="post">
      <p>Title: {props.title}</p>
      <p>Url: {props.url}</p>
      <p>Author: {formatUsername(props.author)}</p>
      <p>Upvotes: {props.upvotes}</p>
      <p>Time Posted: {getTimeAgo(props.posted)}</p>
      <img src={decodeImgUrl(props.image)} alt={`${formatUsername(props.author)}'s makeup look`} />
      <hr />
    </div>
  )
}

export default Post;