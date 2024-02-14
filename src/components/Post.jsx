import styles from './Post.module.css'
import imagemPerfil from '../assets/imagemPerfil.jpeg'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={imagemPerfil}/>
                <div className={styles.authorInfo}>
                    <strong>Arthur Almeida</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='13 de Fevereiro às 16:40h' dateTime='2024-02-13'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>

            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 {' '} <a>jane.design/doctorcare</a></p>
            <p><a>#novoprojeto {' '} #nlw {' '}#rocketseat</a></p>      
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Deixe um comentário'/>

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>


    </article>
    )
}