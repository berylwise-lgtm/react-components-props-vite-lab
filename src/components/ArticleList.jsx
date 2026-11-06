// ArticleList Component
// Displays all blog posts.
// Uses map() to create an Article component for every post.
// Connected to Article.jsx.



import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;