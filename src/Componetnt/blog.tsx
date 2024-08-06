import blog_first from "../assets/blog-1.avif";
import blog_secound from "../assets/blog-2.avif";
import blog_third from "../assets/blog-3.avif";
import circal from "../assets/circel.png";
import align_secound from "../assets/align-2.png";
var Blog_first = blog_first;
var Blog_secound = blog_secound;
var Blog_third = blog_third;
const BlogContent = [
  {
    image: Blog_first,
    title: "Event Tips",
    heading: "Finding Amazing Events Near You - Fast, Cheap & Free",
  },
  {
    image: Blog_secound,
    title: "Reviews",
    heading: "The Top Rated Musical Concerts Worldwide in 2019",
  },
  {
    image: Blog_third,
    title: "Discover",
    heading: "This female band is making buzz all over the world",
  },
];
function BlogPost() {
  return (
    <>
      <div className="blog-top-image">
        <img className="align-first" src={align_secound} />
        <img className="circal-secound" src={circal} />
      </div>
      <div className="container">
        <div className="blog-section">
          <div className="section-heading">
            <h2>Popular Blog Posts</h2>
            <p>
              Some amazing blog posts that are written by even more amazing
              people.
            </p>
          </div>
          <div className="blog-content">
            {BlogContent.map((content, index) => (
              <div className="blog-image" key={index}>
                <img src={content.image} />
                <h4>{content.title}</h4>
                <h3>{content.heading}</h3>
                <div className="blog-button">
                  <a className="btn">Read Post</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogPost;
