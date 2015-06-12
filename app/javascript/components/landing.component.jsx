import React from 'react';

//Images
var headerImg = require('image!./images/header_one.jpg'),
    laptopImg = require('image!./images/laptop.png');

export default React.createClass({
  render: function() {
    return (
      <div style={{backgroundColor: 'white'}}>

        <div className="carousel-inner">
            <div className="item active">
                <div className="container">
                    <div className="carousel-caption">
                        <h1>We craft</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <p>
                            <a className="btn btn-lg btn-primary" href="#/app" role="button">READ MORE</a>
                            <a className="caption-link" href="#/app" role="button">Inspinia Theme</a>
                        </p>
                    </div>
                    <div className="carousel-image wow zoomIn animated">
                        <img src={laptopImg} alt="laptop" />
                    </div>
                </div>
                <div className="header-back" style={{background: 'url(' + headerImg + ') 50% 0 no-repeat'}}></div>
            </div>
        </div>
        <section className="container features">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="navy-line"></div>
                  <h1>Over 40+ unique view<br /> <span className="navy"> with many custom components</span> </h1>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3 text-center wow fadeInLeft animated">
                  <div>
                      <i className="fa fa-mobile features-icon"></i>
                      <h2>Full responsive</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div className="m-t-lg">
                      <i className="fa fa-bar-chart features-icon"></i>
                      <h2>6 Charts Library</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
              </div>
              <div className="col-md-6 text-center  wow zoomIn animated">
                  <img src="img/perspective.png" alt="dashboard" className="img-responsive" />
              </div>
              <div className="col-md-3 text-center wow fadeInRight animated">
                  <div>
                      <i className="fa fa-envelope features-icon"></i>
                      <h2>Mail pages</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div className="m-t-lg">
                      <i className="fa fa-google features-icon"></i>
                      <h2>AngularJS version</h2>
                      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="navy-line"></div>
                  <h1>Discover great feautres</h1>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
              </div>
          </div>
      </section>

    </div>
    );
  }
});