import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/sergiolbarreto.png"/>

           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Sérgio Barreto</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-08-27 08:00:00">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
           </div>
        </div>
    )
}