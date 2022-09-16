import SimpleImageSlider from "react-simple-image-slider";

const images = [
  // local
  // { url: "../images/pretty-home-qr.png" },
  // remote
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWNruV_Zt8U_Rbtak1oqNRGer6SJb4UvBBE7YC3acTJrr-zVqHe02by-xsxTSCqG-S7P3VlQTuqVD0GjXT1hZaK5XEWuoBy0n5R0w9xmL5VlxG_ykoKjQXuaonS0zD1KlpAtb6NKgF5KGxpRMgtxuR33g=w920-h690-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEX3djJkRgGDzyurmV-n1oEOXtldPOEy_cREPtOdLGNgT-2XkQkqc6J8Ye_J4D0rRg5873UpdchHmS_n9L8Yn9IEW_7oYgqVsDYjIx91JcZ3qwO83wvHR4fj-1miw62BhxOK_jlSnTh7J932_sgW1yvfkw=w920-h690-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEUVnf3TLp8Gu_WAgrAvikToc6CgYBgPKS97fzd4mKRJN45Z35RBSDf4tGt7DykNHn9fbeuxqpSJESRRxoPbEd3IxXfMN2xUZsybbkKm-Ru2uZTc58xBpP44b2VPc_ZiXapp3Vy00Dq5JEA5PPBOouXF5g=w920-h690-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEX5e8sOdkA_Uj2QGzrZSVo32Cnr0zrpGKRCVSR_BRdqqvI7pMrycT8JUy0_hZH67S3tdb1eYeybvUsgKo2qUTHQuAhuHLpXACrxkPI6UqkJfqt-4wuZNDPEcJwWyLEc1Oc2QXHx9OrRcVnBBETW_Y9ioA=w920-h690-no?authuser=0" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEV5WI5VCZlsOSOXkhFB-zrW-RBN7K49_6HWqy9BWKDHb0xMEaFvA5A8jy6c1y9sGohl2hzYRX57fKcz4-HnpB8FZPvednZ-tVuPIoUnkfVz_2d1N3_zWnQQj9Kf9LzXFcKmOapuhNo-tJ-Zshz5NiDoxQ=w920-h690-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXSB6uvGwmCNg7gi9puNJ1yvEsbJyCIgvaRKvJowHeg5brSgbGaSEEYm0g8_699RwOXW9xDeHm0IM3ORseTbWt062w-FeJetg3u1P2UHKnn03fcrG-XwFXt5bBfvFUpO198zkrlvfQXV3RSxT5QGwHs5g=w920-h1227-no?authuser=0" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEV9O3YeEHADIWDAqLJzbo0R38jZYkFKWRv_QEWC9h4ui297SGns1nCYlymfW2e2rtfi79_2OHs4MGK_2-o9-yy1IRSIbBsqdOIJs6aaj7Gw8u5mbrR8zqbyN1-ArGlV5-r9YVem0u3adBYvw8Wh5GYv_A=w920-h1227-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEU-E9urJg95LLR4tMHjtK-JjUahOQD0_Pn4frPqcpMl_1lnw2YCWeaSI_qbwSuK38r0s5H3G0wwmr7xzsXN-X5DAyBItE-Ziy5s7nOXrf2A0epk1TSbmRU3ubvo9wGxuI8uhgxmYr7EaFhX20iF70ULrg=w920-h690-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWUi-cwV88jzAq8SwWiMzedUQ2N6L1S_S9CtOysckLQG5RorB8Hfem85mOuJsmlY_lOtB85e273CQLmyODKxqqD1dEOLvHAw1t6O0ir-yg1qmjue64PU6VFOF_vhK77bGsyZaeCNPH6tngLhQI2_C3S-Q=w920-h1227-no?authuser=0" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEU47DzpDk_hbEPFEcOy-dB8X1jgBj9wxvgqlmFapkQlPQgqAVZRrX8hRO80mMMQc00nShJr7zqQ54RICeHoMXfuUQOV9nAurYbYF0sBi0HyERHRlVdIU9IjfWibxxkPjasKTjyNqTm__BzMmbG0B2lYJw=w920-h690-no?authuser=0" },
];

export default function HouseSlider() {
  return (
    <>
      <SimpleImageSlider
        width={350}
        height={250}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <a href="https://photos.google.com/share/AF1QipMUWoRCOEdcHetNnGbk159XqivHN7q_sfcK7PZ7az1oMqh9_wNl90T27IRpunxJkQ?key=TVJhYmlzcUt5WmN0M0pWN1plM2lfZ0dBTGtrZDln">Full album</a>
      <br />
    </>
  )
}
