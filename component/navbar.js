import css from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={css.body}>
      <nav className={css.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="contact">Tour</a></li>
          {/* <li><a href="tel:3606890181">(360) 689-0181</a></li>
          <li><a href="mailto:info@suv123.com">email</a></li> */}
        </ul>
        {/* <img src="images/pretty-home-qr.png" width="125" /> */}
      </nav>
    </div>
  )
}
