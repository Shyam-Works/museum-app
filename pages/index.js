/**************************************************************************** 
* I declare that this assignment is my own work in accordance with the Seneca Academic 
* Policy. No part of this assignment has been copied manually or electronically from 
* any other source (including web sites) or distributed to other students. 
* 
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
* 
* Assignment: 2247 / 6 
* Student Name:  Shyam Patel
* Student Email: spatel695@myseneca.ca 
* Course/Section: WEB422/ZAA 
* Vercel URL:  https://museum-app-jade.vercel.app/
* 
*****************************************************************************/ 
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            fluid
            rounded
            alt="Metropolitan Museum of Art"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          {/* First part of description */}
          The Metropolitan Museum of Art of New York City, colloquially "the Met", is the largest art museum in the Americas. Its permanent collection contains over two million works, divided among 17 curatorial departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan's Upper East Side, is by area one of the world's largest art museums. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from medieval Europe.
          <br/>
        </Col>
        <Col lg={4}>
        {/* second */}
          The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art education to the American people. The museum's permanent collection consists of works of art from classical antiquity and ancient Egypt, paintings, and sculptures from nearly all the European masters, and an extensive collection of American and modern art. The Met maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic art. The museum is home to encyclopedic collections of musical instruments, costumes, and accessories, as well as antique weapons and armor from around the world. Several notable interiors, ranging from 1st-century Rome through modern American design, are installed in its galleries.
        </Col>
        {/* third */}
        <Col lg={4}>
          The Fifth Avenue building opened on March 30, 1880. In 2021, despite the COVID-19 pandemic in New York City, the museum attracted 1,958,000 visitors, ranking fourth on the list of most-visited art museums in the world.
          <br/>
          <a
            href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
            target="_blank"
            rel="noreferrer"
          >
            Click for more information at Wikipedia page
          </a>.
        </Col>
      </Row>
    </Container>
  );
}
