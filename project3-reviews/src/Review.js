import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    function checkNumber(number) {
        if (number > people.length - 1) {
            return 0;
        } else if (number < 0) {
            return people.length - 1;
        }
        return number;
    }


    function randomNumber() {
        let random = Math.floor(Math.random() * people.length);
        console.log(random);
        if (random === index) {
            random = index + 1;
        }
        setIndex(checkNumber(random))
    }


    function nextPerson() {
        console.log(index, people.length)
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);

        })

        // OR YOU CAN DO AS MANUALLY LIKE THIS//
        /*        if (index == people.length - 1) {
                    setIndex(0)
                }
        */
    }

    function prevPerson() {
        console.log(index)
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })

        // OR YOU CAN DO AS MANUALLY LIKE THIS//
        /*if (index == 0) {
            setIndex(people.length - 1)
        }
        */
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
            </div>
            <button className="random-btn" onClick={randomNumber}>Surprise Me</button>
        </article>
    )

};

export default Review;