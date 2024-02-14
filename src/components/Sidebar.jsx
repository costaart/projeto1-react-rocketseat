import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import backgroundSidebar from '../assets/background.png'
import imagemPerfil from '../assets/imagemPerfil.jpeg'
import { Avatar } from './Avatar';



export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img src={backgroundSidebar} className={styles.cover}/>

        <div className={styles.profile}>
            <Avatar src={imagemPerfil}/>
            <strong>Arthur Almeida</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href='#'>
                <PencilLine size={20}/>
                Editar seu perfil
            </a>

        </footer>
    </aside>
    );
}