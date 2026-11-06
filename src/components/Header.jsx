// Header Component
// Displays the blog name.
// Connected to App.jsx through props.


function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;