import React from 'react'
import "./Slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products  from './products';
import { Divider } from '@chakra-ui/react';
// import { NavLink } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 417, min: 0 },
        items: 1
    }
};

const Slide = ({title}) => {


    return (
        <div className="products_section">
            <div className="products_deal">
                <h3>{title}</h3>
                <button className="view_btn">View All</button>
            </div>
            <Divider borderColor="gray.500" borderWidth="1px" w='95%' margin='auto'/>

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={false}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((e) => {
                        return (
                            // <NavLink to={`/getproductsone/${e.id}`}>
                                <div className="products_items">
                                    <div className="product_img">
                                        <img src={e.url} alt="product" />
                                    </div>
                                    <p className="products_name">{e.title.shortTitle}</p>
                                    <p className="products_offer" style={{ color: "#  007185" }}>{e.discount}</p>
                                    <p className="products_explore">{e.tagline}</p>
                                </div>
                            // </NavLink>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slide
