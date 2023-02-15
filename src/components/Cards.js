import React, { Component } from 'react'

export default class cards extends Component {
    
    render() {
        let {imageurl,title,description, url}=this.props;
        return (
            <div>
                <div className="card d-flex flex-wrap" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url}   rel="noreferrer"target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
            </div>
        )
    }
}
