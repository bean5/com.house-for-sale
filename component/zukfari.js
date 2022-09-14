import css from './zukfari.module.css'

export default function Zukfari() {
  return (
    <div className={css.body}>
      <h1>Zukfari</h1>
      <marquee width="202" bgcolor="#00FFFF">Welcome to SUV123</marquee>
      <p>Even the trainers need practice!  These photos were taken near Moab, Utah.</p>
      <table border="1" width="100%" height="750" bordercolordark="#990066" bordercolorlight="#990066">
        <tr>
          <td width="50%" height="196">
            <img src="images/BRIDGE.jpg" alt="BRIDGE.jpg (25251 bytes)" WIDTH="234" HEIGHT="331" />
            <p>Parked on top of Gemini Bridge, a natural arch. If you look close, you can see a Jeep below us through the arch at the end of the drawn in red arrow! The roads in the picture to the right lead to the bottom of the arch.</p>
          </td>
          <td width="50%" height="196">
            <img src="images/CLIFF.jpg" alt="CLIFF.jpg (25308 bytes)" WIDTH="234" HEIGHT="302" />
            <p>Half a dozen Zukis on the cliff near Gemini Bridges. No, I couldn't muster the guts to drive out there.</p>
          </td>
        </tr>
        <tr>
          <td width="50%" height="292">
            <img src="images/HOLE.jpg" alt="HOLE.jpg (31625 bytes)" WIDTH="346" HEIGHT="244" />
            <p>Another view of us parked on top of the arches. It isn't real evident, but between the dark hardtop in the background and the green bush in the foreground is the split between the two arches, and it goes the way to the bottom.</p>
          </td>
          <td width="50%" height="292">
            <img src="images/TRAIL.jpg" alt="TRAIL.jpg (27409 bytes)" WIDTH="339" HEIGHT="244" />
            <p>Numerous Suzukis and a few Jeeps thrown in for good measure near the beginning of the trail Hell's Revenge.</p>
          </td>
          <tr>
            <td width="100%" colspan="2" height="244"><p align="center">
              <img src="images/VALLEY.jpg" alt="VALLEY.jpg (24578 bytes)" WIDTH="346" HEIGHT="244" /></p>
              <p align="center">Yet another view of us parked on the arches.</p></td>
          </tr>
        </tr>
      </table>
    </div>
  )
}
