import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, tagChanged, descriptionChanged, orderSortingLikes } from '../../actions/items';
import TopBar from  '../TopBar/TopBar';
import './galery.css';

class Galery extends Component {

    componentDidMount() {
        this.props.fetchData('https://api.instagram.com/v1/users/self/media/recent/?access_token=1245613474.670b7b5.24f38049d2f64c7fab0ab7fbf8bcf50f');
    }

    sortLikes = (posts, orderSortingLikes) => {
      let index;
        index = (orderSortingLikes === "lowToHigh") ? 1 : -1;
          posts.sort(function(current, previous) {
          if (current.likes.count > previous.likes.count) {
            return -1 * index;
          }
          if (current.likes.count < previous.likes.count) {
            return 1 * index;
          }
          return 0;
        })
    }

    filterDescription = (posts, searchDescription) => {
        return posts.filter((image) => {
          return image.caption.text.indexOf(searchDescription) !== -1;
        });
      }

      filterTag = (posts, searchTag) => {
        return posts.filter((image) => {
          return image.caption.text.indexOf(`#${searchTag}`) !== -1;
        });
      }

    render() {

const { hasErrored, isLoading, orderSortingLikes, items, description, tag, descriptionChanged, tagChanged, getOrderSortingLikes } = this.props;
        if (hasErrored) {
          return <p>There was an error loading the items</p>;
        }
        if (isLoading) {
          return <p>Loading…</p>;
        }
        if (orderSortingLikes) {
          this.sortLikes(items, orderSortingLikes)
        }
        let filteredImages = this.filterDescription(items, description);
        if (tag !== "") {
          filteredImages = this.filterTag(items, tag);
        }

        return (<div className="galery">
          <TopBar descriptionChanged={descriptionChanged} tagChanged={tagChanged} getOrderSortingLikes={getOrderSortingLikes}/>
          {
            filteredImages.map((item) => (<div key={item.id} className="galery-container">
              <img src={item.images.standard_resolution.url} className="galery-container-photo" alt="instaPhoto"/>
              <p className="galery-container-likes">LIKES: {item.likes.count}</p>
              <p className="galery-container-description">{item.caption.text}</p>
            </div>))
          }
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        tag: state.tagChanged.tag,
        description: state.descriptionChanged.description,
        orderSortingLikes: state.orderSortingLikes.orderSortingLikes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        tagChanged: (text) => dispatch(tagChanged(text)),
        descriptionChanged: (text) => dispatch(descriptionChanged(text)),
        getOrderSortingLikes: (text) => dispatch(orderSortingLikes(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Galery);
