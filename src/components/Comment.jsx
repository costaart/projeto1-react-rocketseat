import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/costaart.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Almeida</strong>
                            <time title='13 de Fevereiro às 23:40h' dateTime='2024-02-13'>Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                
                <footer>  
                    <button>
                        <ThumbsUp />
                       Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>

        </div>
    )
}