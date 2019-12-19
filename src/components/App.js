import React from 'react';
import Header from './Header.js';
import Feed from './Feed.js';
import Favorites from './Favorites';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: "makeupaddiction",
      active: "feed",
      feedData: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/r/${this.state.subreddit}/top.json`)
    .then(res => res.json())
    .then((data) => {
      let feedData = data.data.children.filter(post => {
        // Only show posts that have large preview images
        return imageCheck(post);
      });

      function imageCheck(post) {
        if (post.data.preview.images[0].resolutions[3].url !== undefined) {
          return post;
        }
      }

      this.setState( { feedData: feedData });
    })
    .catch(console.log);
  }

  handleClick(e) {
    let newActive = e.target.value;

    this.setState({
      active: newActive
    });
  }

  render() {
    let active = this.state.active;

    return (
      <div className="app">
        <Header subreddit={this.state.subreddit} clickHandler={this.handleClick} />

        {active === "feed" ? ( 
          <Feed feedData={this.state.feedData} /> 
        ) : active === "favorites" ? ( 
          <Favorites /> 
        ) : null }
      </div>
    );
  }
}

export default App;
