import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Trainings() {
  return (
    <div className='cards'>
      <h1>Training Given on 2021 !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tr12.jpg'
              text='Half day training on Time Management by Bro. '
              label='Time Management'
              path='/objectives'
            />
            <CardItem
              src='images/sa1.jpg'
              text='Half Day Training on Self Awateness'
              label='Self Awareness'
              path='/objectives'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/objectives'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
