const EMAIL = "carrestyle.dev@gmail.com";
const PHONE = "+33 6 61 02 48 14";
const ADDRESS = "Haut-Rhin, Alsace";
const POSTAL_CODE = "67000";
const INSTAGRAM = "@carrestyle_carrelage";
const OPENING_HOURS = "Du lundi au vendredi, 8h-19h";

export const INFO = {
  EMAIL,
  PHONE,
  ADDRESS,
  POSTAL_CODE,
  INSTAGRAM,
  OPENING_HOURS,
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  throw new Error(
    "Les variables d'environnement ne sont pas configurées correctement."
  );
}

export const ENVIRONNEMENT_VARIABLES = {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
};
