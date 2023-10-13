import React from 'react';
import './../styles/Home.css'
import { Container,Row,Col } from 'reactstrap';


import heroImg from './../assets/images/hero-img01.jpg'
import heroImg2 from './../assets/images/hero-img02.jpg'
import heroVideo from './../assets/video/hero-video.mp4'
import worldImg from './../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar/SearchBar';
import ServiceList from '../services/ServiceList/ServiceList';
import FeatureTourList from '../components/Feature_tours/FeatureTourList';

const Home = () => {
    return (
        <>
       <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero_content'>
                        <div className="hero_subtitle d-flex align-items-center ">
                          <Subtitle subtitle={'Know before you go'}></Subtitle>
                          <img src={worldImg} alt=''></img>
                        </div>
                        <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda aut repellat ea facilis repudiandae, quas minus unde consequuntur quibusdam!</p>
                    </div>
                </Col>
                <Col lg='2'>
                   <div className='hero_img-box'>
                    <img src={heroImg} alt=''></img>
                    
                   </div>
                </Col>
                <Col lg='2'>
                   <div className='hero_img-box mt-4'>
                   <video src={heroVideo} controls />
                    
                   </div>
                </Col>
                <Col lg='2'>
                   <div className='hero_img-box mt-5'>
                    <img src={heroImg2} alt=''></img>
                    
                   </div>
                </Col>
                
                <SearchBar></SearchBar>
            </Row>
        </Container>
        
       </section>
       <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services_subtitle">What we serve</h5>
                    <h2 className='service_title'>we offer best service</h2>
                </Col>
                <ServiceList></ServiceList>
            </Row>
        </Container>
       </section>
       {/* --------feature tour section---- */}
       <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explore'}></Subtitle>
                  <h2 className="feature_tour-title">Our feature tours</h2>
                </Col>
                <FeatureTourList></FeatureTourList>
            </Row>
        </Container>
       </section>
       </>
    );
};

export default Home;
