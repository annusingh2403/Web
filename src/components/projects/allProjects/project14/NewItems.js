import React, { Component } from 'react'

export default class NewItems extends Component {
  render() {

    let {title, des, imageurl, url}  = this.props;

    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{des}...</p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
