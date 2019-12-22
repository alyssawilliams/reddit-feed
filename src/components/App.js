import React from 'react';
import Header from './Header.js';
import Feed from './Feed.js';
import Favorites from './Favorites';

export default class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      subreddit: "makeupaddiction",
      active: "feed",
      feedData: [],
      favoritesData: []
    };
  };


  // Runs on load
  componentDidMount() {
    this.checkStorage();
    this.fetchData();
  };

  checkStorage = () => {
    // Checks to see if the user's favorites data is saved in local storage
    const favoritesData = JSON.parse(localStorage.getItem("favoritesData"));

    if (JSON.parse(localStorage.getItem("favoritesData"))) {
      this.setState({ 
        favoritesData: favoritesData
      });
    }
  };

  fetchData = () => {
    fetch(`https://www.reddit.com/r/${this.state.subreddit}/top.json`)
    .then(res => res.json())
    .then((data) => {
      let feedData = data.data.children.filter(post => {
        // Only show posts that have large preview images
        return imageCheck(post);
      });

      function imageCheck(post) {
        if (post.data.preview !== undefined) {
          // resolution - width: 640, height 1280
          if (post.data.preview.images[0].resolutions[3] !== undefined) {
            return post;
          }
        }
      }

      this.setState({ 
        feedData: feedData 
      });
    })
    .catch(console.log);
  };


  // Handles User Interaction
  toggleTab = (e) => {
    let newActive = e.target.value;

    this.setState({
      active: newActive
    });

    let buttons = document.getElementsByClassName("header-button");

    for (let button of buttons) {
      button.classList.remove("active")
    }

    document.getElementById(newActive).classList.add("active");
  };

  addFavorite = (toSave) => {
    const feedData = this.state.feedData;
    const favoritesData = this.state.favoritesData;

    let alreadySaved = favoritesData.some(savedData => {
      return savedData.data.id === toSave;
    });

    let data = feedData.find((item) => {
      return item.data.id === toSave;
    });

    if (!alreadySaved) {
      this.setState({ 
        favoritesData: [...this.state.favoritesData, data]
      }, this.storeFavorites);
    };
  };

  removeFavorite = (toRemove) => {
    const favoritesData = this.state.favoritesData;

    let filteredData = favoritesData.filter(savedData => {
      return savedData.data.id !== toRemove;
    });

    this.setState({ 
      favoritesData: filteredData 
    }, this.storeFavorites);
  };

  storeFavorites = () => {
    localStorage.setItem('favoritesData', JSON.stringify(this.state.favoritesData));
  };
  

  // Renders App component
  render() {
    const { subreddit, active, feedData, favoritesData } = this.state;
    const { toggleTab, addFavorite, removeFavorite } = this;

    return (
      <div className="app reddit-feed">
        <Header subreddit={subreddit} toggleTab={toggleTab} favoritesCount={favoritesData.length} />

        {active === "feed" ? ( 
          <Feed feedData={feedData} favoritesData={favoritesData} handleFavorite={addFavorite} favoriteAction="Add" /> 
        ) : active === "favorites" ? ( 
          <Favorites favoritesData={favoritesData} handleFavorite={removeFavorite} favoriteAction="Remove" /> 
        ) : null }
      </div>
    );
  };
}