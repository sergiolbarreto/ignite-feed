import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <>
     <Header/>

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis, doloribus magnam fugiat explicabo ipsam vitae obcaecati repudiandae recusandae error libero aut delectus itaque laboriosam dolorem molestiae? Ut, tempore nesciunt?"
        />
        <Post 
          author="Gabriel Buzzi" 
          content="Um novo post muito legal"
        />
      </main>

     </div>
   
    </>
  )
}

export default App

