import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

import styles from './components/App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/costaart.png',
      name: 'Arthur Almeida',
      role: 'Desenvolvedor Júnior @GrupoPZM'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-13 19:00:00'),
  }, 
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Aoba!' },
      { type: 'paragraph', content: 'Estou ensinando um novo curso de React na plataforma Rocketseat! Confira já: ' },
      { type: 'link', content: 'https://app.rocketseat.com.br/home' },
    ],
    publishedAt: new Date('2024-02-14 21:00:00')
  }, 
];

export function App() {

  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}          
          />
          )
        })}
      </main>
    </div>

  </div>

  )
}
