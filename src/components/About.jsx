// About Component
// Displays the blog logo and a short description.
// Receives image and about as props from App.jsx.



function About({
  image = "https://via.placeholder.com/215",
  about
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;