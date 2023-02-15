import styles from './Footer.modules.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
       
        <h3>Acompanhe assuntos sobre tecnologias e desenvolvimento de software.</h3>
        <p>GREGORIO HyperDev &copy; 2023.</p>
        <div>
            <a href="https://www.linkedin.com/in/gregorio-santos/">
              <img src="img/linkedin.jpg" alt="linkedin" width="32" height="32" />
            </a>
          <a href="https://github.com/gregoriohd">
            <img src="img/github.png" alt="github" width="32" height="32" />
          </a>   
        </div>
          
    </footer>
  )
}

export default Footer