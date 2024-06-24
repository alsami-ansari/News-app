import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {


    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left: '90%', zIndex: '1'}}>
            {source}

          </span>
          <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2024/03/13/1600x900/Equities_1582684970591_1710312491373.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column mt-auto">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary" />By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-warning">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem