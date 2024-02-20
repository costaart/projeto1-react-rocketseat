import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale' 
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState, ChangeEvent } from 'react'


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
     'Post muito top!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelateToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value); // Atualiza o texto do novo comentário
    }

    function createNewComment(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        // Utilize newCommentText, que já foi atualizado pelo handleNewCommentChange
        setComments([...comments, newCommentText]); // Adiciona o novo comentário ao estado
        setNewCommentText(''); // Limpa o texto do novo comentário
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne)
    }

    return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={post.author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelateToNow}</time>
        </header>

        <div className={styles.content}>
            {post.content.map(line => {
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