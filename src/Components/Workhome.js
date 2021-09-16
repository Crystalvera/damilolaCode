import React,{useState} from 'react'
import "./Work.css";
import {MdCancel} from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img from "../img/Petals.jpg";
import img1 from "../img/Lighthouse.jpg";
import img2 from "../img/Penguins.jpg";
import img3 from "../img/Tulips.jpg";

import moment from "moment";

const Workhome = () => {
    const [data, setData] =
useState([
    {
        id: 1,
        name: "Seun",
        quote:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
        time: Date.now(),
        avatar:img,
    },
    {
        id:2,
        name: "Seun2",
        quote:
        "React components for faster and easier web development. Build your own design system, or start with Materiall design.",
        time: Date.now(),
        avatar: img1,
    },
    {
        id:3,
        name: "Seun3",
        quote:
        "React components for faster and easier web development. Build your own design system or start with Material Design.",
        time: Date.now(),
        avatar: img2,
    },
    {
        id:4,
        name: "Seun4",
        quote:
         "React components for faster and easier web development. Build your own design system, or start with Material Design.",
          time: Date.now(),
          avatar: img3,
    }
]);

    return (
        <div className="container">
            <div className="container_wrapper">
                {data.map((props) => {
                    return(
                        <div className="container_card">
                            <div className="container_cardRow">
                                <div className="container_cardRowCancel">
                                    <MdCancel />
                                </div>
                                <img className="container_cardRowAvatar"
                                src={props.avatar} alt=""/>
                            </div>
                            <div className="container_cardQuote">
                                <ImQuotesLeft/>
                                <div> {props.quote} </div>
                                <ImQuotesRight />
                            </div>

                            <div className="container_cardName">
                                {props.name}
                            </div>

                            <div className="container_cardTime">
                                {""}
                                {moment(props.time).fromNow()}
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Workhome
