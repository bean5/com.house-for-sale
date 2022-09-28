import SimpleImageSlider from "react-simple-image-slider";

const images = [
  // local
  // { url: "../images/pretty-home-qr.png" },
  // remote
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWNruV_Zt8U_Rbtak1oqNRGer6SJb4UvBBE7YC3acTJrr-zVqHe02by-xsxTSCqG-S7P3VlQTuqVD0GjXT1hZaK5XEWuoBy0n5R0w9xmL5VlxG_ykoKjQXuaonS0zD1KlpAtb6NKgF5KGxpRMgtxuR33g=w920-h690-no?authuser=0", type: "master bed from front" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEX3djJkRgGDzyurmV-n1oEOXtldPOEy_cREPtOdLGNgT-2XkQkqc6J8Ye_J4D0rRg5873UpdchHmS_n9L8Yn9IEW_7oYgqVsDYjIx91JcZ3qwO83wvHR4fj-1miw62BhxOK_jlSnTh7J932_sgW1yvfkw=w920-h690-no?authuser=0", type: "master angle" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEW7fwj-Be7sm3Q1Esh7JHT1rJj5woEFROXYRLHlmjhfSRcSjkv5y0FkXSSWoCyUb-t9F_ybW1Y69gubPInv-WvgZgoMp7C1njgOTUle8b3SyeBqTr4nez_d7_OKx2RLQxwjcbGJ1k-rM4vHypJ9HGLJ1w=w1823-h1367-no?authuser=0", type: "master angle" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEUVnf3TLp8Gu_WAgrAvikToc6CgYBgPKS97fzd4mKRJN45Z35RBSDf4tGt7DykNHn9fbeuxqpSJESRRxoPbEd3IxXfMN2xUZsybbkKm-Ru2uZTc58xBpP44b2VPc_ZiXapp3Vy00Dq5JEA5PPBOouXF5g=w920-h690-no?authuser=0", type: "master angle more window" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWtu4JS_kDHPmKHLeNwKRqnJpKcIRbCm_8GzAfi8qvGbS6BOQs_deADhYilW8MEXQpLDol8YZikjjGYSPGqaqFKleNH2Isu8FKYd_UQpv4JuvYzOe8vbF6qpiT97iRuZSKv8kRiF1McCKdckqOIAvlbqQ=w1744-h1308-no?authuser=0", type: "master" },
  
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXwNPAqVVom_CPvs5yDnh-rflUGwbikKnZBkbSGlYqqZsLGDqxV3gktdRpJE-3qj86aWErcaapFkTJe_OXfHrfWpdpzuPsa4w2fms2qTmUXJOFXT9j0eS4RiLxIEe6Y8fLKlUn1wvR8DdSLZGDYcdItMw=w1823-h1367-no?authuser=0", type: "vanity" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEUWKsOiBdblHW4oHKQ75YMWAFi1W7EKGM1-CadLsTdIj1OVkipWcZJ1dGwtQqS0H1duoAVuNUDr1olWFEh6pgafzZE1M-i8Xax_NHxfBV4Kqy5ZCs-s8AI5TSqOrmcN3qmg-s_yBg1y_wEox_OUTJNJGQ=w1744-h1308-no?authuser=0", type: "vanity" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEXSB6uvGwmCNg7gi9puNJ1yvEsbJyCIgvaRKvJowHeg5brSgbGaSEEYm0g8_699RwOXW9xDeHm0IM3ORseTbWt062w-FeJetg3u1P2UHKnn03fcrG-XwFXt5bBfvFUpO198zkrlvfQXV3RSxT5QGwHs5g=w920-h1227-no?authuser=0", type: "vanity" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWuYuZ0SNGldurtbAYME36j343GzqXV9vMKDLdDjQng-v3jogXD7ygE8YJpGt-YW2cu1TyZ7Zr4w89GzJ-NowZqwk59Qv53dIocJaYfE9BKGWPe6ChKhKJgjIzdL9tn5lkWX-6hFUvLFa0Rp2Rre9FwFg=w1744-h1308-no?authuser=0", type: "living room super wide shot" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEUfDA3W2AHclkyPaaUpd_wNewG_3YQjz1kOe9UuPP5OWS-BFL1QQB-if_C-gd7Wo1so2nD3ih-H73xbhMsrfq_5OsJGj5po1zQp2NL6O8QlExGVt3MxqIjwP5yR01RR4I70aMSFqgoKPlNLuTJK9a_Jkw=w1744-h1308-no?authuser=0", type: "living room angle" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEU-E9urJg95LLR4tMHjtK-JjUahOQD0_Pn4frPqcpMl_1lnw2YCWeaSI_qbwSuK38r0s5H3G0wwmr7xzsXN-X5DAyBItE-Ziy5s7nOXrf2A0epk1TSbmRU3ubvo9wGxuI8uhgxmYr7EaFhX20iF70ULrg=w920-h690-no?authuser=0", type: "living sofa" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXx8CwTvdmod3BI3ByTvzbaeVvWLKn4y-TVVk4M-PWFZji6YsuPHpEQjcaSvS5z5VoFO06eX8PsMjkNde9t9KAlayN3hhZjs3Sy8np6btnA3MWqoM0AY0mnjMYUfSw60_A74dyppi_TCAEde1NSZIEJpg=w1744-h1308-no?authuser=0", type: "room-2" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEX5e8sOdkA_Uj2QGzrZSVo32Cnr0zrpGKRCVSR_BRdqqvI7pMrycT8JUy0_hZH67S3tdb1eYeybvUsgKo2qUTHQuAhuHLpXACrxkPI6UqkJfqt-4wuZNDPEcJwWyLEc1Oc2QXHx9OrRcVnBBETW_Y9ioA=w920-h690-no?authuser=0", type: "room-3" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXX-khxEIgtlZjemtNPPOxZU9iAMJoexZaO9zVr392CajUWPMfiv4LZNeVVJkCkfbQdYmdthAChdwKybIrzxP2oMQXIlFEMVCBXK12fMT4UIAs61iACS6wm7uQPuSJR3906y9izMSJI8Mv-lL4l2T3Nuw=w1800-h1350-no?authuser=0", type: "room-3" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXG-oPpWKu7hbwGRb2WBDhkU410OlgLOBa7HjHv6oHFQm_eiaik1PDEkUHLUqC9g4KWJPCdBN3_sbUY_vtzsQ26i0HUm37NEc7lIMlF3vUilyJkoS5YGlr3Wsc089lICzlGLnClrRlHIFf6Kdj-gjnciQ=w1744-h1308-no?authuser=0", type: "room 1" },

  // { url: "", type: "house front" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEVFvsqLVLCAYCWI-xDTTyX8UlJdsXAr1Gd9frlhz9zy2WGHkeCCBhHY41uGKiYLuW0MiPHHdP332uAEn1w2M7WNht6vFuWiArIcKUSrWQMr7JhQhVgdI8NOnCY7FzHSQzVzFcw5Vh8YzSZsv4KujbePLw=w1823-h1367-no?authuser=0", type: "house front lawn chairs" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEXAQMtXyRdHkRCwmOe3JvgcHy8pGVGWGZn90_yGM1CXAn7M96qIVGUrhT2sy1YXhLc7fwpMliI4MfU69-yId5ep7qb03bM-4mI4rl5dyvo6ogAguPi4nSZhTzaEY_pzAJtv5NMrZ9NFuTvqzrJSteyQkw=w1744-h1308-no?authuser=0", type: "front-dark" },

  { url: "https://lh3.googleusercontent.com/pw/AL9nZEWUi-cwV88jzAq8SwWiMzedUQ2N6L1S_S9CtOysckLQG5RorB8Hfem85mOuJsmlY_lOtB85e273CQLmyODKxqqD1dEOLvHAw1t6O0ir-yg1qmjue64PU6VFOF_vhK77bGsyZaeCNPH6tngLhQI2_C3S-Q=w920-h1227-no?authuser=0", type: "roses" },
  { url: "https://lh3.googleusercontent.com/pw/AL9nZEU47DzpDk_hbEPFEcOy-dB8X1jgBj9wxvgqlmFapkQlPQgqAVZRrX8hRO80mMMQc00nShJr7zqQ54RICeHoMXfuUQOV9nAurYbYF0sBi0HyERHRlVdIU9IjfWibxxkPjasKTjyNqTm__BzMmbG0B2lYJw=w920-h690-no?authuser=0", type: "rose" },


  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEV5WI5VCZlsOSOXkhFB-zrW-RBN7K49_6HWqy9BWKDHb0xMEaFvA5A8jy6c1y9sGohl2hzYRX57fKcz4-HnpB8FZPvednZ-tVuPIoUnkfVz_2d1N3_zWnQQj9Kf9LzXFcKmOapuhNo-tJ-Zshz5NiDoxQ=w920-h690-no?authuser=0" },
  // { url: "https://lh3.googleusercontent.com/pw/AL9nZEV9O3YeEHADIWDAqLJzbo0R38jZYkFKWRv_QEWC9h4ui297SGns1nCYlymfW2e2rtfi79_2OHs4MGK_2-o9-yy1IRSIbBsqdOIJs6aaj7Gw8u5mbrR8zqbyN1-ArGlV5-r9YVem0u3adBYvw8Wh5GYv_A=w920-h1227-no?authuser=0" },
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
      {/* <a href="https://photos.google.com/share/AF1QipMUWoRCOEdcHetNnGbk159XqivHN7q_sfcK7PZ7az1oMqh9_wNl90T27IRpunxJkQ?key=TVJhYmlzcUt5WmN0M0pWN1plM2lfZ0dBTGtrZDln">Full album</a> */}
      {/* First album */}
      {/* <a href="https://photos.app.goo.gl/jS47qK238mA72Mk6A">Full album</a> */}
      {/* <a href="https://photos.app.goo.gl/8jRyhvbNJ3kzSD4U8">Full album</a> */}
      <a href="https://photos.app.goo.gl/NreyP7rqUbFrVVTbA">Full album</a>
      <br />
    </>
  )
}
