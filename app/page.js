import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.mainnav} id="navbar">
      <Image
              src="/Lemonwares.png"
              alt="Lemonware Logo"
              className={styles.vercelLogo}
              width={100}
              height={60}
              priority
            />
        <ul0>
          <li>OurServices</li>
        </ul0>
        <ul1>
          <li>About</li>
          <li>Blog&News</li>
          <li>Contact</li>
        </ul1>
        <ul2>
        <li>Account</li>
        <li>|</li>
        <Image
          className={styles.logo}
          src="/phone.png"
          alt="LOGO"
          width={40}
          height={50}
          priority
        />
        <li>+212246739020</li>
        </ul2>
      </nav>
      
      <div className={styles.center}>
      <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Premium Web Hosting
             for your Website
          </h2>
          <p>Blazing fast web hosting or individuals and businesses of all sizes backed by 24x7x365 Support.
          </p>
        </a>
        <Image
          className={styles.logo} 
          src="/laptop.jpeg"
          alt="Next.js Logo"
          width={500}
          height={400}
          priority
        />
      </div>
      <nav className={styles.button}>
        <ul>
          <li>
          <a href="https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp">Create an Account</a>
          </li>
          <li>
          <a href="https://www.netflix.com/signup/planform">Choose your plan</a>
          </li>
        </ul>
      </nav>

      <div className={styles.center}>
      <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           True Cloud Web Hosting
          </h2>
          <p>True cloud web hosting All of the hosting packages we offer deployed instantly on our SSD powered Cloud. We dont use dedicated servers tht operate on single peices of hardware. Our entire infrastructure is built to be reliable, secure and scalable
          </p>
        </a>
        <Image
          className={styles.logo1}
          src="/cpanel.png"
          alt="Logo"
          width={300}
          height={150}
          priority
        />
         <Image
          className={styles.logo1}
          src="/Immuntiy.png"
          alt="Logo"
          width={300}
          height={150}
          priority
        />
         <Image
          className={styles.logo1}
          src="/litespeed.png"
          alt="Next.js Logo"
          width={300}
          height={150}
          priority
        />
         <Image
          className={styles.logo2}
          src="/soft.png"
          alt="Logo"
          width={300}
          height={150}
          priority
        />
         <Image
          className={styles.logo2}
          src="/wordpress.png"
          alt="Logo"
          width={300}
          height={150}
          priority
        />
         <Image
          className={styles.logo2}
          src="/cloud flare.png"
          alt="LOGO"
          width={300}
          height={150}
          priority
        />
      </div>
    

      <div className={styles.grid}>
        <a

          className={styles.car}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
          className={styles.logo}
          src="/one.png"
          alt="LOGO"
          width={200}
          height={150}
          priority
        />
          <h2>
            99.9%Uptime
          </h2>
          <p>We keep your web build Online 24x7x365.
            Downtime not only cost you lost visitors but also damges your reputation and search engine rankings.
          </p>
        </a>

        <a
          className={styles.car}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
          className={styles.logo}
          src="/Blazing.png"
          alt="LOGO"
          width={200}
          height={150}
          priority
        />
          <h2>
            Blazing Fast Web Hosting
          </h2>
          <p>We keep your web build Online 24x7x365.
            Downtime not only cost you lost visitors but also damges your reputation and search engine rankings.</p>
        </a>

        <a
          className={styles.car}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
          className={styles.logo}
          src="/SSL.png"
          alt="LOGO"
          width={200}
          height={150}
          priority
        />
          <h2>
            Free SSL Certificates
          </h2>
          <p>We keep your web build Online 24x7x365.
            Downtime not only cost you lost visitors but also damges your reputation and search engine rankings.</p>
        </a>

        <a
         
          className={styles.car}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
          className={styles.logo}
          src="/24x7.png"
          alt="LOGO"
          width={200}
          height={150}
          priority
        />
          <h2>
            24x7 Friendly Support
          </h2>
          <p>
          We keep your web build Online 24x7x365.
            Downtime not only cost you lost visitors but also damges your reputation and search engine rankings.
          </p>
        </a>
      </div>
    </main>
  )
}
