import { PostCard } from "../components/PostCard/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 60 }, 
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.slice(0, 10).map((post) => (
        <PostCard
          key={post.id}
          category="Front-end"
          date="1 месяц назад"
          title={post.title}
          description={post.body}
          readingTime="3 минуты"
          likes={Math.floor(Math.random() * 10)}
        />
      ))}
    </>
  );
}