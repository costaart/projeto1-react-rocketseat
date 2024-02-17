import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [applauseCount, setApplauseCount] = useState(0)

    function handleDeleteComment() {
        console.log("teste");

        onDeleteComment(content)
    }

    function addApplause() {
        setApplauseCount(applauseCount+1)
    }

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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>

                    </header>
                    <p> {content}</p>
                </div>
                
                <footer>  
                    <button onClick={addApplause}>
                        <ThumbsUp />
                       Aplaudir <span>{applauseCount}</span>
                   </button>
                </footer>
            </div>

        </div>
    )
}