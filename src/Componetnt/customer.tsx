import Slider from "react-slick";
import customer_1 from "../assets/customer-1.avif";
import customer_2 from "../assets/customer-2.avif";
import customer_3 from "../assets/customer-3.avif";
import align from "../assets/align.png";
import circal from "../assets/circel.png";
import coma from "../assets/coma.png";
var Customer_1 = customer_1;
var Customer_2 = customer_2;
var Customer_3 = customer_3;
const CustomData = [
  {
    image: Customer_1,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    name: "Charlotte Hale",
    post: "CEO, Delos Inc.",
  },
  {
    image: Customer_2,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    name: "Adam Cuppy",
    post: "Founder, EventsNYC",
  },
  {
    image: Customer_3,
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    name: "Steven Marcetti",
    post: "Event Manager, Brite",
  },
];
function Customer() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="coustmer-top-image">
        <img className="circal-third" src={circal} />
        <img className="align-four" src={align} />
      </div>
      <div className="customer-section">
        <div className="section-heading">
          <h2>Our Awesome Customers</h2>
        </div>
        <div className="customer-slider container">
          <Slider {...settings}>
            {CustomData.map((data, index) => (
              <div className="customer-review" key={index}>
                <div className="slider-review">
                  <div className="customer-image">
                    <img src={data.image} />
                  </div>
                  <div className="customer-content">
                    <div className="cusomer-review-text">
                      <img className="first-image" src={coma} />
                      <h3>{data.title}</h3>
                      <img className="secound-image" src={coma} />
                    </div>
                    <div className="customer-data">
                      <h4>{data.name}</h4>
                      <p>{data.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Customer;
