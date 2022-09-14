import css from './lessons.module.css'
import Modal, { closeStyle } from 'simple-react-modal'
import React from "react"

function Modal1() {
  return (
    <div className={css.body}>
      <div className="modal" role="dialog">
        <p>Considering purchasing a SUV? Want to try your hand at trail driving before your buy? We can help you out! Please call (360) 689-0181 for rates and availability.</p>

        <h3>Key Benefits</h3>
        <ul>
          <li>Guided introduction to the possibilities</li>
          <li>Opportunity to try 4x4 before you buy</li>
          <li>Convenient FUN!</li>
          <li>No long term commitment</li>
        </ul>

        <h3>Vehicles</h3>
        <p>You have your choice of 4x4 to take on your exploration test drive</p>

        <dl>
          <dt><strong>1986 Suzuki Samurai Convertible</strong></dt>
          <dd>Stick shift and lots of sunshine</dd>
          <dt>
            <i>Short </i>wheel base and nimble enough to fit through the tight trails
          </dt>
          <dd>&nbsp;</dd>
          <dt><strong>Or bring your own!</strong></dt>
        </dl>
      </div>
    </div>
  )
}

function Modal2() {
  return (
    <div className={css.body}>
      <div className="modal" role="dialog">
        <p>This is were we go out in small groups to put your training to the test. We will
          be using public paved roads and publicly accessible 4x4 trails.</p>

        <h3>Put into practice:</h3>

        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr><td>Water Crossings</td></tr>
          <tr><td>Trail Ethics</td></tr>
          <tr><td>Vehicle Recovery (better yet how not to need it)</td></tr>
          <tr><td>Approaches Departures</td></tr>
          <tr><td>Map Reading GPS use</td></tr>
        </table>
      </div>
    </div>
  )
}

export default class Lessons extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle1: false,
      toggle2: false,
    }
  }

  toggle1() {
    this.setState({ toggle1: !this.state.toggle1 })
  }

  toggle2() {
    this.setState({ toggle2: !this.state.toggle2 })
  }

  render() {
    return (
      <div className={css.body}>
        <Modal
          closeOnOuterClick={true}
          onClose={this.toggle1.bind(this)}
          show={this.state.toggle1}
        >
          <Modal1 />
          <a style={closeStyle} onClick={this.toggle1.bind(this)}>X</a>
        </Modal>
        <Modal
          closeOnOuterClick={true}
          onClose={this.toggle2.bind(this)}
          show={this.state.toggle2}
        >
          <Modal2 />
          <a style={closeStyle} onClick={this.toggle2.bind(this)}>X</a>
        </Modal>

        <p align="left">
          <strong><a href="#" onClick={this.toggle1.bind(this)}>Outdoor "Classroom" Instruction</a></strong>
        </p>

        <dl>
          <dd>Personalized instructions for <em>you in your</em> vehicle:<dl>
            <dd>Handling Characteristics</dd>
            <dd>Braking system</dd>
            <dd>Power train components and function</dd>
            <dd>Center of Gravity</dd>
            <dt>Stopping distances</dt>
            <dd>Tire considerations</dd>
            <dt>Approach and Departure angles</dt>
            <dd>More!</dd>
            <dt>
              <a href="http://www.worldoffroad.com/begin/begcont.asp">Click Here for beginner 4x4 information</a>
            </dt>
          </dl>
          </dd>
          <dt><a href="#" onClick={this.toggle2.bind(this)}><strong>Hands on Instruction</strong></a></dt>
          <dd>Off-Highway (trail) training:
            <dt>Water crossings</dt>
            <dd>Trail Ethics</dd>
            <dt>Vehicle recovery</dt>
            <dt>More!</dt>
            <dt>&nbsp;</dt>
          </dd>
          <dt><strong>Exploration</strong></dt>
          <dd>Are you considering
            purchasing a SUV? Want to try your hand at trail driving before you
            purchase? We can help you out! Please call (360) 689-0181 for rates and availability.</dd>
        </dl>
      </div>
    )
  }
}
