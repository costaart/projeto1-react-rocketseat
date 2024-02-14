import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

import styles from './components/App.module.css'
import './global.css'



export function App() {

  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post author="Arthur Almeida" content="Primeiro Post" />
        <Post author="Tucao" content="Segundo Post" />
      </main>
    </div>

  </div>

  )
}
