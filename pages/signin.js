import Head from 'next/head'
import styles from '../styles/Signin.module.css'

export default function Signin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login page</title>
        <meta name="description" content="pagina de login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous" 
      />
      
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      
      <div className={styles.login}>
        <img src='http://projecoesengenharia.com.br/logo1.jpg'></img>
        <form>
        
          <div className="form-group">
            <label>Nome de usuário:</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="@nome_usuario"></input>
          </div>
          
          <div className={styles.formlogin}>
            <div className="form-group">
              <label>Senha</label>
              <input type="password" className="form-control" id="password" placeholder="Senha"></input>
            </div>
          </div>
          
          <div className={styles.formlogin}>
            <button className="form-login" type="submit" className="btn btn-primary">Login</button>
          </div>
          
        </form>
      </div>
      
    </div>
  
  )
}