import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import BlurText from "./BlurText";

export default function Swiperimg() {
  const swiper = [
    {
    id: 1,
    color: "#ff0088",
    label: "Akshay & Neha",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772377772/042A9227_xzc5ob.jpg",
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Yover & Srishti",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772374699/042A3672.JPG_ojp1tn.jpg",
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Jaskaran singh & Navsheen",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772375061/042A7740.JPG_swbal4.jpg",
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "Ankush & Ritika",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772375134/042A7979.jpg_hbhpkj.jpg",
  },
  {
    id: 5,
    color: "#0cdcf7",
    label: "Taranveer Singh & Bhupinder Kaur",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772377744/042A6489_cp7dun.jpg",
  },
  {
    id: 6,
    color: "#0cdcf7",
    label: "Jashan & Komal",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772375218/3G4A3223.JPG_cmkfd7.jpg",
  },
  {
    id: 7,
    color: "#0cdcf7",
    label: "Amit & Tanvi",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772378529/10_mfzw64.jpg",
  },
  {
    id: 8,
    color: "#0cdcf7",
    label: " Pardeep & Renu",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772467635/042A0142.JPG_oo01b3.jpg",
  },
  {
    id: 9,
    color: "#0cdcf7",
    label: "Amandeep & Pooja",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772900625/0P0A9781.JPG_wma6no.jpg",
  },
  {
    id:10,
    color: "#0cdcf7",
    label: "Arpit & Vaishali",
    image:
      "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772378485/45_ckkuaf.jpg",
  },
  ]
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <>
      <div className="h-fit pt-15 pb-13 items-center bg-gray-900 overflow-hidden">
        <section className="intro-section h-10 mb-8 items-center text-center">
          <h1 className="font-cormorant w-45 md:w-60 lg:w-119 text-wrap text-lg md:text-2xl lg:text-5xl">
            <BlurText
              text="Crafting Timeless   Wedding Stories"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
        </section>

        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-75 h-110 md:w-120 md:h-160 overflow-hidden rounded-2xl shadow-xl"
        >
          {swiper.map((v, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center rounded-xl text-white text-xl font-bold overflow-hidden ">{v.image && (
              <img
                src={v.image}
                alt="logo"
                className="h-full w-full p-0  "
              />
            )}
              <div className="item-content">
                <span className="item-number">0{v.id}</span>
                <h2>{v.label}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className="  mt-8 w-full flex justify-center items-center ">
          <h5 className="w-55 md:w-105 lg:w-200 lg:text-3xl text-[#0EA5D9] font-cormorant">
            <BlurText
              text="Over the last decade we've worked with hundreds of happy couples."
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h5>
        </section>
      </div>
    </>
  );
}
