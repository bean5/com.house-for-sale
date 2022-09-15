import css from './navbar.module.css'

export default function NavBar() {
  return (
    <div className={css.body}>
      <nav className={css.nav}>
        {/* <a href="/"><img src="images/logo2.jpg" alt="image of a vehicle ascending a steep slope" border="0" width="105" height="95" /></a> */}
        <ul>
          <li><a href="/">House for Sale</a></li>
          {/* <li><a href="mission">Mission</a></li>
          <li><a href="lessons">Lessons</a></li> */}
          <li><a href="contact">Contact</a></li>
        </ul>
        <p></p>
        {/* <img src="images/titlea.gif" alt="suv" border="0" width="172" height="125" />
        <img src="images/titleb.gif" alt="123" border="0" width="141" height="125" />
        <p className={css.slogan}>Off Road Instruction for New and Experienced Sport Utility Vehicle (SUV) owners.</p> */}
      </nav>
    </div>
  )
}
