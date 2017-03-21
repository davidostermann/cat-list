/*eslint-disable */
import React, {Component} from 'react';

export default class CatList extends Component {
  constructor(props) {
    super(props);

    console.log('this.props.cats : ', this.props.cats);
  }

  render() {
    return (
      <ul className="list-group">{
        this.props.cats.map( item => (<li key={item.id} onClick={(e)=> {this.props.selectCat(item)} } className="list-group-item" style={ item.selected ? {color: 'red'} : {color: 'green'}}><i className="fa fa-camera-retro"></i> { item.slug }</li>) )
      }
      </ul>
    );
  }
}
