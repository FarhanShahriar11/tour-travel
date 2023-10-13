import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from "../../assets/images/weather.png"
import guidImg from "../../assets/images/guide.png"
import customizationImg from "../../assets/images/customization.png"

const serviceData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quae!"
    },
    {
        imgUrl:guidImg,
        title:"Best tour guid",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quae!"
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quae!"
    },
]
const ServiceList = () => {

    return (
        <>
           {
            serviceData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}></ServiceCard></Col>)
           }
        </>
    );
};

export default ServiceList;