import React from "react"
import css from './footer.module.css'

export default function Footer() {
  return (
    <div className={css.body}>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>WE SUPPORT LOCAL SEARCH AND RESCUE TEAMS.</h4>
      <h5>
        Send mail to <a href="mailto:service@suv123.com">service@suv123.com</a> with questions or comments.
        <br />
        Copyright Ⓒ 1999-2022 SUV123
        <br />
        Last modified:
        September 14, 2022
      </h5>
    </div>
  )
}
