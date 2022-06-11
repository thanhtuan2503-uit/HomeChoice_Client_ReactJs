import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const DiscountView = props => {

    const data = props.data

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="discount-view">
            {
                data.map((item, index) => (
                    <DiscountViewItem key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className="discount-view__control">
                        <div className="discount-view__control__item" onClick={prevSlide}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div className="discount-view__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className="discount-view__control__item" onClick={nextSlide}>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

DiscountView.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const DiscountViewItem = props => (
    <div className={`discount-view__item ${props.active ? 'active' : ''}`}>
        <div className="discount-view__item__info">
            <div className={`discount-view__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="discount-view__item__info__description">
                <span>{props.item.description}</span>
            </div>
        </div>
        <div className="discount-view__item__image">
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default DiscountView
