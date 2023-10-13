import React, { useRef } from 'react';
import './SearchBar.css'
import { Col,Form,FormGroup } from 'reactstrap';
const SearchBar = () => {
    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxGroupSizeRef=useRef(0)

    const searchHandler=()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroupSize=maxGroupSizeRef.current.value

        if(location===""|| distance===""||maxGroupSize===""){
            return alert('all field are required!')
        }
        
    }
    return (
        <div>
           <Col lg='12'>
            <div className='search_bar'>
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                      <span><i class="ri-map-pin-line"></i></span> 
                      <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='where are you going?' ref={locationRef}></input>

                        </div> 
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                      <span><i class="ri-map-pin-time-line"></i></span> 
                      <div>
                        <h6>Distance</h6>
                        <input type='number' placeholder='Distance k/m' ref={distanceRef}></input>

                        </div> 
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                      <span><i class="ri-map-pin-line"></i></span> 
                      <div>
                        <h6>Max people</h6>
                        <input type='number' placeholder='0' ref={maxGroupSizeRef}></input>

                        </div> 
                    </FormGroup>
                    <span className='search_icon' type='submit' onClick={searchHandler}><i class="ri-search-line"></i></span>
                </Form>

            </div>
           </Col>
        </div>
    );
};

export default SearchBar;