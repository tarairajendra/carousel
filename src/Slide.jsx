import React, { Component } from 'react';
import './Style.sass';

const Slide = ({index, current, onClick}) => {
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (
        <div className={classNames} onClick={() => onClick(index)}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nesciunt!</h3>
            <section>
                <h3>Nickname</h3>
                <p>6yo, Boy</p>
            </section>
            <section className='wish__placeholder'>
                <p></p>
                <p></p>
                <p></p>
            </section>
            <button>Confirm</button>
        </div>
    )
}


export default Slide
