import Header from "./components/Headers";
import Sidebar from "./components/Sidebar";
import Post, { PostProps } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/lucasandrade52.png",
      name: "Lucas Andrade",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 lucas.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de produzir mais um projeto para você colocar no seu portifa. É um projeto que entrará no NLW Return, evento da Rocketseat. O nome do projeto é nlwFeed 🚀",
      },
      { type: "link", content: "👉 diego.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-07 10:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
