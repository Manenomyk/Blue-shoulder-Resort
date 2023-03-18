import * as comp from "react-bootstrap";
import './Home.css';
import * as rev from "react-reveal";
import { Link } from "react-scroll";

import i6 from '../images/i6.jpeg';
import im8 from '../images/im8.png';
import img7 from '../images/img7.png';
import im6 from '../images/im6.jpg';
import img0 from '../images/img0.png';
import pic from '../images/pic.jpeg';
import i7 from '../images/i7.jpeg';
import i8 from '../images/i8.jpeg';
import ij12 from '../images/ij12.jpg';



import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GiHouse } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { Helmet } from "react-helmet";



function Home() {
    return ( 
        <div>


            <Helmet>
                <meta charSet="utf-8" />
                <title>Blue-Shoulder resort</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Awesome resort you need to checkout" />
            </Helmet>


        <comp.Navbar bg="dark" variant="dark" sticky="top">
        <comp.Container>
          <comp.Navbar.Brand href="#home" style={{fontSize:"2rem"}}>Blue<span>Shoulder</span> </comp.Navbar.Brand>
          <comp.Nav className="justify-content-end">
            <comp.Nav.Link href="#home" style={{fontSize:"24px"}}>Home</comp.Nav.Link>
            <comp.Nav.Link href="#Servises" style={{fontSize:"24px"}}>Servises</comp.Nav.Link>
            <comp.Nav.Link href="#About" style={{fontSize:"24px"}}>About</comp.Nav.Link>
            <comp.Nav.Link href="#Contact" style={{fontSize:"24px"}}>Contact</comp.Nav.Link>
          </comp.Nav>
        </comp.Container>
      </comp.Navbar>

      <a name="home"></a>
      {/* <Link to="home" smooth={true} offset={200} duration={500}></Link> */}

            <div className="bod">
            
            <comp.Carousel className="mt-1" style={{position: ""}}>
                <comp.Carousel.Item>
                  <rev.Zoom>
                    <comp.Image
                    className="d-block w-100"
                    src={im6}
                    // style={{h height:"30vh",width:"20px", borderRadius:"50%"}}
                    alt="First slide"
                    fluid
                    />
                  </rev.Zoom>
                  
                    <comp.Carousel.Caption >
                <rev.Flip top>
                    <h1 className="justify-content-end" id="cap">Night Time Story</h1>
                    <div className="underline8 mx-auto"></div>
                </rev.Flip>
                                    <comp.Container>
                                        <comp.Row>
                                            <rev.Fade bottom delay={500}>
                                            <comp.Col lg={6} className="mx-auto" id="accom1">
                                                Sunset views and evening group times create great bonds and memories. The facility provides for night bornfires,
                                                 stories and family union.
                                                One is able to view the sunset creating the nice evening sensation and relaxation
                                                to the our visitors. 
                                            </comp.Col>
                                            </rev.Fade>
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                 <rev.Zoom delay={100} > 
                    <comp.Image
                    className="d-block  w-100"
                    src={im8}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
                </rev.Zoom >

                    <comp.Carousel.Caption>
                      
                    <h1 id="cap">Enough Field Environment</h1>
                    <div className="underline8 mx-auto"></div>
                        
                                    <comp.Container>
                                        <comp.Row>
                                          <rev.Rotate bottom left delay={500}> 
                                            <comp.Col lg={6} className="mx-auto" id="accom2">
                                                 Recreational activities such as games require a good and large
                                                 emough space to perfom. At our Resort, we offer enough field space for 
                                                 gaming, running and several recreational activities both for kids and the 
                                                 mature guests.
                                            </comp.Col>
                                        </rev.Rotate>   
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                <rev.Fade top>   
                    <comp.Image
                    className="d-block  w-100"
                    src={img0}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
                </rev.Fade >     
                    <comp.Carousel.Caption>
                    <h1 id="cap">Ample Parking Space</h1>
                    <div className="underline8 mx-auto"></div>

                                    <comp.Container>
                                        <comp.Row>
                                          <rev.Zoom delay={500}> 
                                            <comp.Col lg={6} className="mx-auto" id="accom3">
                                                Good packing and enough guaranteed security is our top most priority
                                                as a facility. We offer enough packing space for the guests vehicles
                                                with adequate security for their safety. #YourSafetyOurPriority.
                                            </comp.Col>
                                        </rev.Zoom>   
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                <rev.Fade bottom>  
                    <comp.Image
                    className="d-block  w-100"
                    src={img7}
                    // style={{height:"70vh"}}
                    alt="Third slide"
                    fluid
                    />
                </rev.Fade>     
                    <comp.Carousel.Caption>
                    <h1 id="cap">Forest Touring</h1>
                    <div className="underline8 mx-auto"></div>
                    <comp.Container>
                                        <comp.Row>
                                         <rev.LightSpeed right delay={500}>
                                            <comp.Col lg={6} className="mx-auto" id="accom4">
                                                Come get the chance to adventure in the scenic Kakamega Forest
                                                and experience the beauty of nature. The forest is also known for its wild snakes, monkeys
                                                and baboons together with the inflow of river Yala in its Center.
                                            </comp.Col>
                                            </rev.LightSpeed> 
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>
             </comp.Carousel>
            </div>

             <div >
             <rev.Fade top delay={500}>
                <comp.Container className="mb-5" >
                    <comp.Row style={{}} >
                        
                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto" id="hpad">
                                    
                                        Accommodation
                                        <div className="underline7 mx-auto"></div>
                                   
                                   </comp.Card.Title>
                                   <GiHouse className="mx-auto" id="icon"/>
                                     
                                        <comp.Card.Body className="mx" >
                                            Our Cortages are characterized by their spacious well maintained rooms
                                            and ammenities that range from different sizes incuding rooms for one, for two and
                                            even For a whole family. 
                                        </comp.Card.Body>
                                     </comp.Card>
                            </comp.Col>


                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto" id="hpad">
                                        Forest Tour guide
                                        
                                        <div className="underline7 mx-auto"></div>
                                        
                                   </comp.Card.Title>
                                   <GiForestCamp className="mx-auto" id="icon1" />
                                  
                                        <comp.Card.Body className="mx">
                                            The Cortage is in close proximity to the very vast Kakamega forest. Still we offer
                                            adventure guides to and throught the forest to guests for hiking and recreation. view 
                                            of wild animals and nature are also experienced. 
                                        </comp.Card.Body>
                                    </comp.Card>
                            </comp.Col>


                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto" id="hpad">
                                        Spacious Meals
                                        <div className="underline7 mx-auto"></div>
                                        
                                   </comp.Card.Title>
                                   <GiMeal className="mx-auto" id="icon2" />
                                  
                                        <comp.Card.Body className="mx">
                                            We are endowed with highly skilled cheffs who prepare the best
                                            of both international and local delicacies for the guests. Our meals range from breakfast, lunch, dinner and to supper. We offer the best catering Services.
                                            
                                        </comp.Card.Body>
                                     </comp.Card>
                                     <a name="Servises"></a>
                            </comp.Col>
                            
                    </comp.Row>
                </comp.Container>
                
             </rev.Fade> 

         <div className="Section4">
            <comp.Container>
                <comp.Row>
                    <comp.Col className="md-12 text-center">
                    <rev.Fade top delay={500}>
                        <h3 className="">Accommodation</h3>
                       <div className="underline1 mx-auto"></div>
                       </rev.Fade>
                       <comp.Container>
                                        <comp.Row>
                                        
                                            <comp.Col lg={9} className="mx-auto" id="accom">
                                            <rev.Slide right delay={500}>
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged. It was popularised
                                                in the 1960s with the release of
                                                </rev.Slide>
                                            </comp.Col>
                                        
                                        </comp.Row>
                                   </comp.Container>
                    </comp.Col>
                    <rev.Zoom delay={500}>
                        <comp.Row className="mx-auto">
                            <comp.Col lg={4} >
                                <comp.Card className="mb-4">
                                    <comp.Image src={i7} alt='single room'
                                    className="card-img-top, mb-3"
                                    style={{height:"24vh"}}
                                    fluid
                                    />
                                   <comp.Card.Title className="mx-auto" id="topics">
                                        Single Person
                                        <div className="underline0 mx-auto"></div>
                                   </comp.Card.Title>
                                        <comp.Card.Body className="mb-3" id="txt">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>




                            <comp.Col lg={4} >
                                <comp.Card className="mb-4">
                                    <comp.Image src={i6} alt='single room'
                                    className="card-img-top, mb-3"
                                    style={{height:"24vh"}}
                                    fluid
                                    />
                                   <comp.Card.Title className="mx-auto" id="topics">
                                        Room For Two
                                        <div className="underline2 mx-auto"></div>
                                   </comp.Card.Title>
                                        <comp.Card.Body className="mb-3" id="txt">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>
                            <comp.Col lg={4} >
                                <comp.Card className="mb-4">
                                <comp.Image src={i8} alt='single room'
                                    className="card-img-top, mb-3"
                                    style={{height:"24vh"}}
                                    fluid
                                    />
                                   <comp.Card.Title className="mx-auto" id="topics">
                                        Family Room
                                        
                                        <div className="underline4 mx-auto"></div>
                                   </comp.Card.Title>
                                   
                                        <comp.Card.Body className="mb-3" id="txt">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>
                        </comp.Row>
                    </rev.Zoom>
                </comp.Row>
                <rev.Zoom delay={500}>
                <button className="btn btn-danger" id="btn">Book us now</button>
                </rev.Zoom>
            </comp.Container>
            <a name="About"></a>
            </div>




            
                <comp.Container className="mt-5" id="secton3">
                   <comp.Row>
                   <comp.Col lg={6}>
                   <comp.Row>
                   <comp.Col lg={10} className="mx-auto">
                    <rev.Fade top delay={500}>
                   <comp.Image src={ij12} alt='single room'
                                    className="card-img-top, mb-3"
                                    style={{height:"32vh"}}
                                    fluid
                                    />
                     </rev.Fade>               
                   </comp.Col>
                   </comp.Row>
                    </comp.Col>
                    
                   
                    <comp.Col lg={6} style={{fontSize:"21px"}}>

                    <rev.Fade top delay={500}>
                    
                             <comp.Card.Title id="uto" >
                            
                                        About Us
                                        <div className="underline7" style={{marginLeft:"2rem"}}></div>
                             </comp.Card.Title>
                             </rev.Fade>
                             <rev.Zoom right delay={500}>
                            <p className="p"> We are an accommodation facility that is adjacent to Kakamega Tropical rainforests
                              which is a living remnant (Guinea Congolian type) from long pleistocene period
                               when great climatical changes took place all over in the whole world.
                                The forest is a natural encyclopedia of flora and fauna of which birds and animals
                                 can even be seen on the edge when seated in the compound of isecheno shouldered
                                  guest house .</p>
                            </rev.Zoom>
                    </comp.Col>
                   </comp.Row>

                   <comp.Row className="mb-5">
                   <hr className="mb-5" />
                <comp.Col md={4} className="mx-auto">
                    <rev.Zoom delay={500}>
                    <h3>History</h3>
                    <div className="underline7" style={{marginLeft:"15px", width:"4rem", marginBottom:"2rem"}}></div>
                    </rev.Zoom>
                    <rev.Fade left delay={500}>
                    <p style={{fontSize:"20px"}}>We began as a small facility that hosted only local visitors in early 2000s. 
                        We slowly grew to attain this level</p>
                    </rev.Fade>
                </comp.Col>

                <comp.Col md={4} className="mx-auto">
                <rev.Zoom delay={500}>
                    <h3>Mission</h3>
                    <div className="underline7" style={{marginLeft:"15px", width:"4rem", marginBottom:"2rem"}}></div>
                    </rev.Zoom>

                    <rev.Fade delay={500}>
                    <p  style={{fontSize:"20px"}}>Serving our clients at their comfort zones. We tweak our services to accommodate you.
                         We adjust our pace to fit with yours.</p>
                    </rev.Fade>

                </comp.Col>
                <comp.Col md={4} className="mx-auto">
                <rev.Zoom delay={500}>
                    <h3>Vision</h3>
                </rev.Zoom>

                    <div className="underline7" style={{marginLeft:"15px", width:"4rem", marginBottom:"2rem"}}></div>
                    <rev.Fade right delay={500}>
                    <p  style={{fontSize:"20px"}}>To make our clients attain a state of peace forgetting about everything when they are
                         on our residence. To provide almost all the required needs</p>
                     </rev.Fade>

                </comp.Col>
                   </comp.Row>
                </comp.Container>

            <div className="mainsec1">
                <div className="section3">
                   
                    <comp.Container>
                            <comp.Row>
                                <comp.Col className="md-12 text-center">
                                <rev.Zoom top delay={500}>
                                   <h3 className="head">Adventure with us</h3>
                                   <div className="underline mx-auto"></div>
                                   </rev.Zoom>
                                   <rev.Fade right delay={500}>
                                   <p className="para">
                                
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of
                                   </p>
                                   </rev.Fade>
                                   <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={7} className="mx-auto">
                                                <rev.Zoom delay={500}>
                                            <comp.Image
                                        className="d-block  w-100"
                                        src={img7}
                                        style={{height:"30vh"}}
                                        alt="Third slide"
                                        fluid
                                        />
                                        </rev.Zoom>

                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>
                                        
                                </comp.Col>
                            </comp.Row>
                        </comp.Container>
                </div>
            </div>

     

            <div className="">
                <div className="section5">
                   
                    <comp.Container>
                            <comp.Row>
                                <comp.Col className="md-12 text-center">
                                    <rev.Slide right delay={500}>
                                   <h3 className="head">Take a look with us</h3>
                                   <div className="underline mx-auto"></div>
                                   </rev.Slide>

                                   <rev.Roll left delay={500}>
                                   <p className="para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of
                                   </p>
                                   </rev.Roll>
                                   <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={8} className="mx-auto">
                                         
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>
                                        
                                </comp.Col>
                            </comp.Row>
                        </comp.Container>
                </div>
            </div>

            <div className="Section6">
            <comp.Container>
                <comp.Row>
                    <comp.Col className="md-12 text-center">
                        <h3 className="head">Testimonials</h3>
                       <div className="underline1 mx-auto"></div>

                       <comp.Carousel >
                            <comp.Carousel.Item>
                                <comp.Row className="mt-5">
                                                <comp.Col lg={3} className="mx-auto" id="accom">
                                                <comp.Image
                                                    className="d-block  mx-auto"
                                                    src={pic}
                                                    style={{ height:"14vh",width:"8vw", borderRadius:"50%"}}
                                                    alt="Second slide"
                                                    fluid
                                                    />
                                                <FaQuoteLeft style={{color:"rgb(202, 53, 48)",marginRight:"10px"}}/>
                                                
                                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                                    specimen book. 
                                                    <FaQuoteRight style={{color:"rgb(202, 53, 48)",marginLeft:"10px"}} />
                                                </comp.Col>

                                                
                                </comp.Row>
                            </comp.Carousel.Item>
                            <comp.Carousel.Item>
                                <comp.Row className="mt-5">
                                                <comp.Col lg={3} className="mx-auto" id="accom">
                                                <comp.Image
                                                    className="d-block  mx-auto"
                                                    src={pic}
                                                    style={{ height:"14vh",width:"8vw", borderRadius:"50%"}}
                                                    alt="Second slide"
                                                    fluid
                                                    />

                                                <FaQuoteLeft style={{color:"rgb(202, 53, 48)",marginRight:"10px"}} />
                                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                                    specimen book. 
                                                    <FaQuoteRight style={{color:"rgb(202, 53, 48)",marginLeft:"10px"}} />
                                                </comp.Col>

                                               
                                </comp.Row>
                            </comp.Carousel.Item>
                            <comp.Carousel.Item>
                                <comp.Row className="mt-5">
                                                <comp.Col lg={3} className="mx-auto" id="accom">
                                                <comp.Image
                                                    className="d-block  mx-auto"
                                                    src={pic}
                                                    style={{ height:"14vh",width:"8vw", borderRadius:"50%"}}
                                                    alt="Second slide"
                                                    fluid
                                                    />
                                                    <FaQuoteLeft style={{color:"rgb(202, 53, 48)",marginRight:"10px"}} />
                                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                                    specimen book. 
                                                    <FaQuoteRight style={{color:"rgb(202, 53, 48)",marginLeft:"10px"}} />
                                                </comp.Col>

                                             
                                </comp.Row>
                            </comp.Carousel.Item>
                       </comp.Carousel>
                                     
                    </comp.Col>     
                </comp.Row>
                
            </comp.Container>
        </div>

        
         <div className="">
                <div className="secton3">
                   
                    <comp.Container>
                        <a name="Contact"></a>
                            <comp.Row >
                                <comp.Col className="md-12, mb-5 ">
                                   <h3 className=" text-center head">Contact Us</h3>
                                   <div className="underline3 mx-auto"></div>
                                   <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="">
                                             
                                                <div className="mb-4">
                                                   <ImLocation2 /> ADDRESS
                                                </div>
                                                
                                                <div className="mb-4">
                                                <IoCall /> PHONE
                                                </div>
                                                <div>
                                                   <MdEmail /> EMAIL
                                                </div>
                                                
                                            </comp.Col>
                                            <comp.Col lg={6} className="justify-content-end">
                                            <comp.Form>
                                                <comp.Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <comp.Form.Label>Share a message</comp.Form.Label>
                                                    <comp.Form.Control type="textarea" placeholder="Enter your name" />
                                        
                                                </comp.Form.Group>
                                            </comp.Form>
                                            <comp.Form>
                                                <comp.Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <comp.Form.Label>Email</comp.Form.Label>
                                                    <comp.Form.Control type="email" placeholder="Enter email" />
                                        
                                                </comp.Form.Group>
                                            </comp.Form>
                                            </comp.Col>
                                            
                                        </comp.Row>
                                   </comp.Container>
                                        
                                </comp.Col>
                            </comp.Row>
                        </comp.Container>
                </div>
            </div>

          </div>
        </div>
     );
}

export default Home;