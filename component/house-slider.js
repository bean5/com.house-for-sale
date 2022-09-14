import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVtl-VNKAuYVXerGXiE77Mgt74NsCpuD78okC11XE31uccg7nxxC9kuvR9_hxX_Rl22emxGaM1m4avejv6jh4eP1SoM7qcGz8aCJbxlglUJjKNUEyr5JfgnrCoV3OVyJabg783AL7VnEUS5aad1VFHJAg=w1600-h1200-no" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVtl-VNKAuYVXerGXiE77Mgt74NsCpuD78okC11XE31uccg7nxxC9kuvR9_hxX_Rl22emxGaM1m4avejv6jh4eP1SoM7qcGz8aCJbxlglUJjKNUEyr5JfgnrCoV3OVyJabg783AL7VnEUS5aad1VFHJAg=w1600-h1200-no" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVtl-VNKAuYVXerGXiE77Mgt74NsCpuD78okC11XE31uccg7nxxC9kuvR9_hxX_Rl22emxGaM1m4avejv6jh4eP1SoM7qcGz8aCJbxlglUJjKNUEyr5JfgnrCoV3OVyJabg783AL7VnEUS5aad1VFHJAg=w1600-h1200-no" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVtl-VNKAuYVXerGXiE77Mgt74NsCpuD78okC11XE31uccg7nxxC9kuvR9_hxX_Rl22emxGaM1m4avejv6jh4eP1SoM7qcGz8aCJbxlglUJjKNUEyr5JfgnrCoV3OVyJabg783AL7VnEUS5aad1VFHJAg=w1600-h1200-no" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVtl-VNKAuYVXerGXiE77Mgt74NsCpuD78okC11XE31uccg7nxxC9kuvR9_hxX_Rl22emxGaM1m4avejv6jh4eP1SoM7qcGz8aCJbxlglUJjKNUEyr5JfgnrCoV3OVyJabg783AL7VnEUS5aad1VFHJAg=w1600-h1200-no" },
];

export default function HouseSlider() {
  return (
    <>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  )
}
