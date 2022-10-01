import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import css from './house-for-sale.module.css'
import HouseSlider from './house-slider'

export default function HouseForSale() {
  return (
    <div className={css.body}>
      <br />
      <h3>For Sale (NMLS: <strong>2002774</strong>)<a style={{ 'margin-left': '5px' }} href="https://www.google.com/maps/place/3008+Ruby+Ct+SE,+Port+Orchard,+WA+98366/@47.5206364,-122.6281303,132m/data=!3m1!1e3!4m5!3m4!1s0x549037d567e0e0c9:0x8bcecd10a333fa05!8m2!3d47.5207542!4d-122.6282027"><Button type="Button" className="btn btn-primary">Aerial map</Button></a></h3>
      <p>Home Sweet Home</p>
      <HouseSlider />
      <br />
      <i>Attractive remodeled four bedroom and one and a half bathrooms rambler in an established, friendly neighborhood on 0.26 acre. The living space is just shy of 1,200 square feet.</i>
      <br />
      <br />
      <p>New roof with premium ridge venting and transferable warranty.  Energy efficient windows, new floors, neutral paint colors, new heaters and lighting.</p>
      <i>1156 sq feet, 4 bedroom, 1 ½ bath</i>
      <br />
      <ul>
        <li>Nestled in a peaceful cul-de-sac with quick commute:</li>
        <ul>
          <li>18 minutes to Southworth Fast Ferry</li>
          <li>5 minutes to delightful dog park</li>
          <li>6 minutes to kayaking</li>
          <li>3 minutes to Starbucks</li>
          <li>6 minutes to library</li>
          <li>5 minutes to the US post office</li>
          <li>3 minutes to grocery store, banks and restaurants.</li>
        </ul>
        <li>ADA friendly front door pathway under a covered porch. </li>
        <li>Bright kitchen with beautiful views of sunrise.  Archway </li>entry into the kitchen with ceiling fan.
        <li>Great tasting and refreshing public water from the West </li>Sound Utility District.
        <li>Green electric heating, modern LED lighting, allergy free </li>plank flooring.
        <li>Appliances included: refrigerator, stove, microwave, and </li>roll around dishwasher.
        <li>Relaxing cross breeze through the home. </li>
        <li>Must see it to experience how bright this house is </li>compared to others in this area!
        <li>Deep garage with a workbench and shelving. </li>
        <li>Thick, steel reinforced concrete driveway designed and </li>built for parking a motorhome. There is also ample parking for you and your guests.
        <li>Reliable, fast cable internet available. A programmer once </li>worked from home here and commuted to Seattle by ferry.
        <li>Potential rental income: $2,200+</li>
        <li>Bonus: blackberry bushes, mature trees, shaded nearly </li>level back yard.
        <li>In the backyard we have visits of wildlife ranging from </li>deer to eagles to bunnies. There are no houses visible from the home looking out into the back yard giving you privacy and an experience of nature.
        <li>Walking distance to elementary school, churches, open </li>fields and to shopping centers.
        <li>West Sound Utility District sewer.</li>
        <li>No HOA :) </li>
        <li>Ready for you to buy and move in!</li>
        {/* <li>Give us a call at 360-689-0181</li> */}
        <li>Buyer to verify details</li>
        <li>Information deemed reliable but not guaranteed</li>
      </ul>

      {/* <p><a href="https://docs.google.com/document/d/1y7-qZBAfFVPMxPI1rJ73ve4zwtq2DJ1amjQ05xZNc_0/edit?usp=sharing">Google doc</a></p> */}
    </div>
  )
}
