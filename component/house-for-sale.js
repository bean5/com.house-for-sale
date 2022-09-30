import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import css from './house-for-sale.module.css'
import HouseSlider from './house-slider'

export default function HouseForSale() {
  return (
    <div className={css.body}>
      <br />
      <h3>For Sale by Owner <a style={{ 'margin-left': '5px' }} href="https://www.google.com/maps/place/3008+Ruby+Ct+SE,+Port+Orchard,+WA+98366/@47.5206364,-122.6281303,132m/data=!3m1!1e3!4m5!3m4!1s0x549037d567e0e0c9:0x8bcecd10a333fa05!8m2!3d47.5207542!4d-122.6282027"><Button type="Button" className="btn btn-primary">Aerial map</Button></a></h3>
      <p>Home Sweet Home</p>
      <HouseSlider />
      <br />
      <i>Attractive rambler in established, friendly neighborhood on nearly 0.25 acres, nestled in peaceful cul-de-sac with quick commute.</i>
      <br />
      <br />
      <i>1156 sq feet, 4 bedroom, 1 ½ bath</i>
      <br />
      <ul>
        <li>Short Commutes!</li>
        <ul>
          <li>18 minutes to Southworth Fast Ferry</li>
          <li>6 minutes to library</li>
          <li>5 minutes to delightful dog park</li>
          <li>5 minutes to the US post office</li>
          <li>2 minutes to calm kayaking</li>
          <li>2 minutes to Starbucks</li>
          <li>2 minutes to grocery store and banks and restaurants</li>
        </ul>
        <li>Amazing non-well water with strong pressure and refreshing taste</li>
        <li>Repurposed vintage wood gate</li>
        <li>Green per-room electric heating</li>
        <li>Modern LED lighting</li>
        <li>Newly remodeled</li>
        <li>Dog-friendly premium scratch resistant plank flooring</li>
        <li>Walk in closet</li>
        <li>Established community</li>
        <li>Relaxing cross breeze through the home</li>
        <li>Deep, finished garage with attic access</li>
        <li>Thick steel reinforced concrete driveway designed and built for parking a 36 foot motorhome</li>
        <li>There is also ample parking for you and your guests</li>
        <li>ADA friendly front door pathway, covered porch</li>
        <li>French doors</li>
        <li>Bright kitchen</li>
        <li>Room for separate washer/dryer units</li>
        <li>Remote controlled fan</li>
        <li>Archway feature overlooking wide</li>
        <li>Beautiful views of sunrise and double rainbows over lush garden and visits of wildlife ranging from deer to eagles to bunnies</li>
        <li>New roof with transferable warranty, newer energy efficient windows, new floors, neutral paint colors. fresh paint</li>
        <li>There are no houses visible from the home looking out into the back yard giving you privacy and an experience of nature</li>
        <li>Must see it to experience how bright this house is compared to others in this area!! Back yard is secluded and private.</li>
        <li>Reliable, fast internet. A programmer worked from home here and commuted to Seattle by ferry.</li>
        <li>HOA: None! Growing neighborhood with recently remodeled homes.</li>
        <li>Rental income: $2000+</li>
      </ul>
      <p><strong>Bonuses</strong>: blackberry bushes, mature trees, fridge, oven, dishwasher, amateur radio antenna post, nearby elementary school, churches, and open fields. Walking distance to shopping centers. No HOA. Retired neighbor next door who maintains his property like clock work.</p>

      <p>NMLS: TBD</p>
      <p><a href="https://docs.google.com/document/d/1y7-qZBAfFVPMxPI1rJ73ve4zwtq2DJ1amjQ05xZNc_0/edit?usp=sharing">Google doc</a></p>
    </div>
  )
}
