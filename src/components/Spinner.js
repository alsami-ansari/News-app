import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} className='my-3' alt="loading" style={{width: '60px', height: '60px', marginTop: '250px'}} />
      </div>
    )
  }
}

export default Spinner