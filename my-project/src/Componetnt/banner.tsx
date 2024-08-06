import banner_image from "../assets/banner-image.jpg";
function Banner() {
  return (
    <>
      <div className="banner-section">
        <img src={banner_image} className="banner-image" />
      </div>
      <div className="banner-content container">
        <div className="banner-text">
          <h3>Book Music & Comedy Events anywhere in New York</h3>
          <div className="banner-button">
            <a>Search Events Near Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
