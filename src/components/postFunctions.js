import moment from "moment";

export function formatUsername(author) {
  return `/u/${author}`.toLowerCase();
};

export function getTimeAgo(time) {
  return moment(new Date(time * 1000).toLocaleString()).fromNow();
};

export function setFavoriteButtonText(favoriteAction) {
  return (favoriteAction === 'Add') ? `${favoriteAction} to Favorites` : `${favoriteAction} from Favorites`;
};

export function decodeImgUrl(url) {
  return url.replace(/&amp;/g, '&');
};