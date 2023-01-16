import React, {useState, useEffect} from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Music = () => {
  
  const [artists, setArtists] = useState([])
  
  const loadSongs = async () => {
    const response = await axios.get(
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":5000/artists"
    );
    setArtists(response.data.items);
  };

  useEffect(() => {
    loadSongs();
  }, []);



  return (
    <Container >
      {/* <Image
        fluid
        style={{
          maxHeight: "50vh",
          maxWidth: "90vw",
          padding: "1vh",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/jimmy-page-robert-plant-freddie-mercury.jpg"
      /> */}
<Row>

      <Carousel>
<Carousel.Item><div></div></Carousel.Item>
        {
          artists.map((artist=> {
            console.log(artist.name)
            console.log(artist.images[2].url)
            return (
              <Carousel.Item >
                
                <Col fluid className="align-items-center" style={{ backgroundColor: "lightblue"}}>
              <Image style={{height:"90vh"}} src={artist.images[0].url}/>
              {/* <Carousel.Caption>{artist.name}</Carousel.Caption> */}
                </Col>
          </Carousel.Item>
          )
        }))
        
      }
      <Carousel.Item><div></div></Carousel.Item>
      </Carousel>
      </Row>
      {/* <button onClick={()=>console.log(artists)}>test</button> */}
    </Container>
  );
};

export default Music;
