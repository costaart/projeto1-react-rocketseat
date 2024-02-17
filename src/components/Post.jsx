import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
     'Post muito top!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function createNewComment() {
        event.preventDefault();
        const textArea = event.target.commentTextArea;

        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelateToNow}</time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={createNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea required name="commentTextArea" placeholder='Deixe um comentário' onChange={handleNewCommentChange} value={newCommentText}/>

            <footer>
                <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
            })}
        </div>


    </article>
    )
}