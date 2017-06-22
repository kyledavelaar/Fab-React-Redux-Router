import React from 'react';
import Navbar from './Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import * as TopThreeActions from '../actions/topThreeAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo from '../images/fab-logo.png';


const Home = (props) => {
  const workers = props.shelfActions.populate().item;

  const thumbnails = workers.map((item, i) => {
    return (
      <li
        onClick={props.cartActions.addToCart.bind(this, item)}
        key={i} className="col-sm-1 list-item-small">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })

  const top = props.topThreeActions.populate().item;

  const topThree = top.map((item, i) => {
    return (
      <li
        onClick={props.cartActions.addToCart.bind(this, item)}
        key={i} className="col-sm-4 list-item-big">
        <div className="container-thirds">
          <div className="col-sm-6">
            <img
              className="img img-responsive"
              src={item.src}
              alt={item.name} />
          </div>
          <div className="col-sm-6">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div>
      <Navbar />
      <div className="container-fluid top">
        <div className="row">
          <ul className="list-top">
            {topThree}
          </ul>
        </div>
        <div className="row">
          <ul className="list-bottom">
            {thumbnails}
          </ul>
        </div>
      </div>
    </div>
  )
}



function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch),
    topThreeActions: bindActionCreators(TopThreeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home);