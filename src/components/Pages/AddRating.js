import React, { Component } from 'react';

import StarRatings from 'react-star-ratings';

export default class AddRating extends Component {
  state = {
    rating: 0
  }

  changeRating = (newRating, name) => {
    this.setState({rating: newRating})
  }

  handleSubmit = () => {
    alert("Sumbitted")
  }

  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>Submit a Review</h2>
                <p>
                  Please fill out the form below to rate the corresponding treatment center.
                </p>
              </div>
            </div>

            {/* Start of Submit Form */}
            <div>
              <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    // required="required"
                  />
                  <p className="help-block text-danger"></p>
                </div>


                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    // required="required"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    // required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <StarRatings 
                  rating={this.state.rating}
                  starRatedColor="#fabb05"
                  starHoverColor="rgb(250, 187, 5, 25)"
                  starDimension="30px"
                  starSpacing="4px"
                  changeRating={this.changeRating}
                  numberOfStart={5}
                  name="treatment rating"
                />
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}