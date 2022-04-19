import Head from 'next/head'
import style from '../styles/Signin.module.css'

export default function Signin() {
  return (
    <div className="container d-flex justify-content-center align-content-center flex-wrap main-container">
      <style jsx>{`
        .main-container {
          min-height: 100vh;
        }
      `}</style>
      
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
      
      <div className="align-content-center p-3">
        <img className='img-responsive' src='http://projecoesengenharia.com.br/logo1.jpg'></img>
        <form>
        <label>Nome de usuário:</label>
          <div className="mt-1 input-group">            
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username"></input>
          </div>
                    
          <div className="mt-2">
            <div className="form-group">
              <label>Senha</label>
              <input type="password" className="mt-1 form-control" id="password" placeholder="Senha"></input>
            </div>
          </div>
          
          <div className="mt-3 d-grid">
            <button className="form-login" type="submit" className="btn btn-primary">Login</button>
          </div>
          
        </form>
      </div>
      
      
      
    </div>
  
  )
}