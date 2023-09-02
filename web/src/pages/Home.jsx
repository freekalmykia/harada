import { useState, useEffect } from "react"
import Post from "../components/Post";

export default function Home() {

  const [posts, setPosts] = useState([]);

  const getPosts = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  const renderPosts = posts => {
    return posts.map(post => <Post key={post.id} post={post} />)
  }

  useEffect(() => {
    getPosts('http://localhost:3000/mockdata/posts.json')
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      { renderPosts(posts) }
    </div>
  )
}