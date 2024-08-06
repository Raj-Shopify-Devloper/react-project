import squre from "../assets/squre.png";
function Organize() {
  return (
    <>
      <div className="container">
        <div className="organize-section">
          <div className="organize-top-image">
            <img src={squre} alt="" />
          </div>
          <div className="organize-content">
            <div className="organize-title">
              <h2>Organize an Event</h2>
            </div>
            <form action="#">
              <div className="organize-massage-text">
                <div className="organize-name-mail">
                  <div className="organize-name">
                    <label>Your Name</label>
                    <input type="text" name="name" className="organize-name" />
                  </div>
                  <div className="organize-mail">
                    <label>Your Email Address</label>
                    <input type="text" name="name" />
                  </div>
                </div>
                <div className="organize-textarea">
                  <label>Your Massage</label>
                  <textarea name="name"></textarea>
                </div>
              </div>
              <div className="organize-button btn">
                <button type="submit" value="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Organize;
