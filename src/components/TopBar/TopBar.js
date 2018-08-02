import React from 'react';
import './TopBar.css';

const TopBar = (props) => {
    const {tagChanged, descriptionChanged, getOrderSortingLikes} = props;

    return (<div className="top-bar-container">
      <div>
        SORT LIKES:
        <select className="top-bar-select" onChange={getOrderSortingLikes}>
          <option value="highToLow" >
            high to low
          </option>
          <option value="lowToHigh" >
            low to high
          </option>
        </select>
      </div>
      <div>
        SEARCH TAG:
        <input type="text" placeholder="tag" className="top-bar-input" name="tag" onChange={tagChanged}/>
      </div>
      <div>
        SEARCH DESCRIPTION:
        <input type="text" placeholder="description" className="top-bar-input" name="description" onChange={descriptionChanged}/>
      </div>
    </div>);
}

export default TopBar;
