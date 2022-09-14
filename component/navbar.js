import css from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={css.body}>
      <nav className={css.nav}>
        Home
        <ul>
          <li><a href="#">House for Sale</a></li>
          <li><a href="#">Offroad driving lessons</a></li>
        </ul>
      </nav>
    </div>
  )
}
