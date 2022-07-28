import * as comp from "react-bootstrap";
import './Home.css';
import i6 from '../images/i6.jpeg';
import im8 from '../images/im8.png';
import img7 from '../images/img7.png';
import im6 from '../images/im6.jpg';
import img0 from '../images/img0.png';
// import i6 from '../images/i6.jpeg';
import i7 from '../images/i7.jpeg';
import i8 from '../images/i8.jpeg';
function Home() {
    return ( 
        <div>
        <comp.Navbar bg="dark" variant="dark" sticky="top">
        <comp.Container>
          <comp.Navbar.Brand href="#home">BlueShoulder</comp.Navbar.Brand>
          <comp.Nav className="justify-content-end">
            <comp.Nav.Link href="#home">Home</comp.Nav.Link>
            <comp.Nav.Link href="#features">Features</comp.Nav.Link>
            <comp.Nav.Link href="#pricing">Pricing</comp.Nav.Link>
          </comp.Nav>
        </comp.Container>
      </comp.Navbar>

            <div className="bod">
            <comp.Carousel className="mt-1" style={{position: ""}}>
                <comp.Carousel.Item>
                    <comp.Image
                    className="d-block w-100"
                    src={im6}
                    // style={{height:"70vh"}}
                    alt="First slide"
                    fluid
                    />
                    <comp.Carousel.Caption>
                    <h1 className="justify-content-end" id="cap">Night Time Story</h1>
                    <div className="underline8 mx-auto"></div>

                                    <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="mx-auto" id="accom">
                                                Sunset views and evening group times create great bonds and memories. The facility provides for night bornfires,
                                                 stories and family union.
                                                One is able to view the sunset creating the nice evening sensation and relaxation
                                                to the our visitors. 
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                    <comp.Image
                    className="d-block  w-100"
                    src={im8}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
                    <comp.Carousel.Caption>
                    <h1 id="cap">Enough Field Environment</h1>
                    <div className="underline8 mx-auto"></div>

                                    <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="mx-auto" id="accom">
                                                 Recreational activities such as games require a good and large
                                                 emough space to perfom. At our Resort, we offer enough field space for 
                                                 gaming, running and several recreational activities both for kids and the 
                                                 mature guests.
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                    <comp.Image
                    className="d-block  w-100"
                    src={img0}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
                    <comp.Carousel.Caption>
                    <h1 id="cap">Ample Parking Space</h1>
                    <div className="underline8 mx-auto"></div>

                                    <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="mx-auto" id="accom">
                                                Good packing and enough guaranteed security is our top most priority
                                                as a facility. We offer enough packing space for the guests vehicles
                                                with adequate security for their safety. #YourSafetyOurPriority.
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>


                <comp.Carousel.Item>
                    <comp.Image
                    className="d-block  w-100"
                    src={img7}
                    // style={{height:"70vh"}}
                    alt="Third slide"
                    fluid
                    />
                    <comp.Carousel.Caption>
                    <h1 id="cap">Forest Touring</h1>
                    <div className="underline8 mx-auto"></div>
                    <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="mx-auto" id="accom">
                                                Come get the chance to adventure in the scenic Kakamega Forest
                                                and experience the beauty of nature. The forest is also known for its wild snakes, monkeys
                                                and baboons together with the inflow of river Yala in its Center.
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>

                    </comp.Carousel.Caption>
                </comp.Carousel.Item>
             </comp.Carousel>
            </div>

             <div >
                <comp.Container >
                    <comp.Row style={{}} >
                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto">
                                        Accommodation
                                        <div className="underline7 mx-auto"></div>
                                   </comp.Card.Title>
                                        <comp.Card.Body>
                                            Our Cortages are characterized by their spacious well maintained rooms
                                            and ammenities that range from different sizes incuding rooms for one, for two and
                                            even For a whole family. 
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>


                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto">
                                        Forest Tour guide
                                        <div className="underline7 mx-auto"></div>
                                   </comp.Card.Title>
                                        <comp.Card.Body>
                                            The Cortage is in close proximity to the very vast Kakamega forest. Still we offer
                                            adventure guides to and throught the forest to guests for hiking and recreation. view 
                                            of wild animals and nature are also experienced. 
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>


                    <comp.Col lg={4} >
                                <comp.Card className="mb-4, mt-5">
                                   <comp.Card.Title className="mx-auto">
                                        Spacious Meals
                                        <div className="underline7 mx-auto"></div>
                                   </comp.Card.Title>
                                        <comp.Card.Body>
                                            We are endowed with highly skilled cheffs who prepare the best
                                            of both international and local delicacies for the guests. Our meals range from breakfast, lunch, dinner and to supper. We offer the best catering Services.
                                            
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>
                    </comp.Row>
                </comp.Container>

                <comp.Container className="mt-5" id="section3">
                   <comp.Row>
                   <comp.Col lg={6}>
                    <comp.Card >
                    <comp.Card.Body>
                        <comp.Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of
                        </comp.Card.Text>
                    </comp.Card.Body>
                    </comp.Card>
                    </comp.Col>
                    <comp.Col lg={6}>
                             <comp.Card.Title className="mx-auto">
                                        About Us
                                        {/* <div className="underline7 mx-auto"></div> */}
                             </comp.Card.Title>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of
                    </comp.Col>
                   </comp.Row>
                </comp.Container>

            <div className="mainsec">
                <div className="section3">
                   
                    <comp.Container>
                            <comp.Row>
                                <comp.Col className="md-12 text-center">
                                   <h3 className="head">Adventure in the forest</h3>
                                   <div className="underline mx-auto"></div>
                                   <p className="para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of
                                   </p>
                                   <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={7} className="mx-auto">
                                            <comp.Image
                                        className="d-block  w-100"
                                        src={img7}
                                        style={{height:"30vh"}}
                                        alt="Third slide"
                                        fluid
                                        />
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>
                                        
                                </comp.Col>
                            </comp.Row>
                        </comp.Container>
                </div>
            </div>

            <div className="Section4">
            <comp.Container>
                <comp.Row>
                    <comp.Col className="md-12 text-center">
                        <h3 className="">Accommodation</h3>
                       <div className="underline1 mx-auto"></div>
                       <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="mx-auto" id="accom">
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged. It was popularised
                                                in the 1960s with the release of
                                            </comp.Col>
                                        </comp.Row>
                                   </comp.Container>
                    </comp.Col>
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
                                        <comp.Card.Body className="mb-3">
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
                                        <comp.Card.Body className="mb-3">
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
                                   
                                        <comp.Card.Body className="mb-3">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley
                                        </comp.Card.Body>
                                </comp.Card>
                            </comp.Col>
                        </comp.Row>
                        
                </comp.Row>
                <button className="btn btn-danger" id="btn">Book us now</button>
            </comp.Container>
            </div>


            <div className="">
                <div className="section5">
                   
                    <comp.Container>
                            <comp.Row>
                                <comp.Col className="md-12 text-center">
                                   <h3 className="head">Take a look with us</h3>
                                   <div className="underline mx-auto"></div>
                                   <p className="para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of
                                   </p>
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
                        <h3 className="head">Accommodation</h3>
                       <div className="underline1 mx-auto"></div>
                       <p className="para">
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the release of
                        </p>
                    </comp.Col>
                        
                </comp.Row>
                <button className="btn btn-danger" id="btn">Book us now</button>
            </comp.Container>
        </div>
         <div className="">
                <div className="section5">
                   
                    <comp.Container>
                            <comp.Row>
                                <comp.Col className="md-12 text-center">
                                   <h3 className="head">Contact Us</h3>
                                   <div className="underline3 mx-auto"></div>
                                   <comp.Container>
                                        <comp.Row>
                                            <comp.Col lg={6} className="">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged. It was popularised
                                                in the 1960s with the release of
                                            </comp.Col>
                                            <comp.Col lg={6} className="justify-content-end">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged. It was popularised
                                                in the 1960s with the release of
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