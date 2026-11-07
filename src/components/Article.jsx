// Article Component
// Displays an individual blog post.
// Receives title, date and preview props from ArticleList.jsx.

function Article({
  title,
  date = "January 1, 1970",
  preview
}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;