import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    crossorigin="anonymous"
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/carousel-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <LinkContainer to="product-details">
                        <h3>Bestseller in Laptops category</h3>
                    </LinkContainer>                    
                    <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/carousel-2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/carousel-3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default ProductCarouselComponent;