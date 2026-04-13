/**
 * Centralized SEO metadata for Mahak Studio.
 * Every page imports from here so titles/descriptions stay consistent.
 */

export const SITE = {
  name: "Mahak Studio",
  url: "https://mahakstudio.in",
  logo: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772374686/logo_d2is9d.png",
  ogImage: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772388347/_DSC5025_utsuw6.jpg",
  twitterHandle: "@mahakstudio",
};

export const PAGES = {
  home: {
    title: "Mahak Studio | Best Wedding Photographer in Karnal, Panipat & Haryana",
    description:
      "Mahak Studio — luxury wedding photography & cinematic films in Karnal, Panipat, Kurukshetra, Haryana & Delhi NCR. Capturing real emotions since 1995. Book now!",
    canonical: `${SITE.url}/`,
    ogImage: SITE.ogImage,
  },
  about: {
    title: "About Us | Mahak Studio — Wedding Photographers in Karnal",
    description:
      "Meet Satish and Sandeep Khurana of Mahak Studio. Over 30 years of experience capturing candid, emotional wedding photographs across Haryana, Punjab & Delhi NCR.",
    canonical: `${SITE.url}/aboutUs`,
    ogImage: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772443109/WhatsApp_Image_2026-02-26_at_8.22.48_PM_q5yqwq.jpg",
  },
  portfolio: {
    title: "Portfolio | Mahak Studio — Wedding & Pre-Wedding Photography",
    description:
      "Browse real weddings and pre-wedding shoots by Mahak Studio — cinematic, candid, and beautifully curated galleries from Haryana, Punjab & Delhi NCR.",
    canonical: `${SITE.url}/portfolio`,
    ogImage: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772474708/753_bzn068.jpg",
  },
  contact: {
    title: "Contact Mahak Studio | Book Your Wedding Photographer in Karnal",
    description:
      "Get in touch with Mahak Studio to book your wedding photographer in Karnal, Panipat or across Haryana. Fill the form or email mahakstudio2000@gmail.com.",
    canonical: `${SITE.url}/contact`,
    ogImage: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772900613/0P0A9756.JPG_im87u7.jpg",
  },
};

/**
 * Generate dynamic wedding blog page SEO metadata.
 * @param {{ title: string, slug: string, story: string[], image: string[] }} couple
 */
export function weddingPageSEO(couple) {
  return {
    title: `${couple.title} Wedding | Mahak Studio`,
    description:
      couple.story?.[0]?.slice(0, 155) ??
      `Beautiful wedding photography of ${couple.title} by Mahak Studio.`,
    canonical: `${SITE.url}/wedding/${couple.slug}`,
    ogImage: couple.image?.[0] ?? SITE.ogImage,
  };
}
