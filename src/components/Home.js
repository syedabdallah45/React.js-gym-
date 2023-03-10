import React, { Component } from 'react'
import Cards from './Cards';

export default class Home extends Component {
    render() {
        return (
            <div className="mx-3  my-1 "  >
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src='https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg?w=824&quality=70' style={{height: '500px'}} class="d-block w-100" alt="nothing"/>
      <div class="carousel-caption d-none d-md-block " style={{color: 'grey'}}>
        <h5>No excuses to training</h5>
        <p >join the gym, as soon as possible</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://image.shutterstock.com/image-photo/athletic-shirtless-young-sports-man-260nw-695401201.jpg"  style={{height: '500px'}} class="d-block w-100" alt="nothing"/>
      <div class="carousel-caption d-none d-md-block" style={{color: 'grey'}}>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="https://www.ucd.ie/sportandfitness/t4media/Banner-Gym-Floor.jpg"  style={{height: '500px'}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{color: 'grey'}}>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="container my-4  d-flex justify-content-between ">
<Cards imageurl='https://source.unsplash.com/1600x900/?chest,gym'  title='Chest Exercises' description='A gym is a club, building, or large room, usually containing special equipment, where people go to do physical exercise and get fit. ... ' url='https://www.healthifyme.com/blog/9-must-try-chest-exercises-for-building-muscle/'/>
<Cards imageurl='https://source.unsplash.com/1600x900/?lats,gym' title='Lats Exercises' description='Bulid lats and get bigger in the body,A gym is a club, building, or large room, usually containing special equipment, where people go to do physical exercise and get fit. ...' url='https://www.anabolicaliens.com/blog/7-intense-bodyweight-lat-exercises'/>
<Cards imageurl='https://source.unsplash.com/1600x900/?shoulder,gym' title='shoulder Exercises' description='NO shoulders is equal to no body,A gym is a club, building, or large room, usually containing special equipment, where people go to do physical exercise and get fit. ...' url='https://www.goldsgym.com/blog/7-shoulder-exercises-for-strength-and-stability/'/>
</div>

            </div>
        )
    }
    
}
