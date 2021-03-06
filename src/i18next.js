import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        translations: {
          "FirstHeader": "We Are",
          "Header": "Raphael",
          "SubHeader": "Frames & Art",

          "MenuToggleBtn": "Menu ",

          "clickMe": "QQQ Click N Me",
          "aboutMe": "QQQ For more info about the author",
          "buttonClicked": "QQQ You clicked to button!",

          "OurServicesNav": "Our Services",
          "GalleryNav": "Gallery",
          "AboutUsNav": "About Us",
          "ContactUsNav": "Contact Us",
          "OurServices": "Our Services",
          "AboutUsP": "Engaged in art framing, pictures, photos and images since 1966",
          "AboutUsP2": "We maintain the highest quality of work. We work with the best materials on the market. We strive to give the best personal attention to each of our clients, professional advices and adjust the art and frames according to the client's requirements.",

          "OurServicesH1": "Framing art and photos",
          "OurServicesH2": "Buy art",
          "OurServicesH3": "Advice about art and photos for every place",
          "OurServicesH4": "Private customers",
          "OurServicesH5": "Photographers",
          "OurServicesH6": "Art galleries",

          "OurServicesP1": "We are experts in art framing. We offer photos and pictures framing, restoration for art photos, canvas painting framing, mirror framing, oil painting framing and more.",
          "OurServicesP2": "Purchase from a variety of styles, sizes and themes of our art and paintings. You can come and be impressed by the variety of frames, pictures, mirrors, oil paintings, paintings on canvas and abstract paintings.",
          "OurServicesP3": "Over the years we advise our clients about our art, colors, theme, artist and how locate in the client's place.",
          "OurServicesP4": "For about 55 years, we have been advising and selling art and pictures to the private customers audience. We have also clientele that understands art and acquires from us a variety of art over the years.",
          "OurServicesP5": "We collaborate with individual photographers and production companies, from selecting the images for framing, adjusting frames to the selected images and provide professional advices in order to achieve the optimal and the best quality product.",
          "OurServicesP6": "We collaborate with art galleries, from framing art works, provide advising about the frames, colors, matching frames to several images with a common theme.",

          "Modal1Head": "Special wood art framed paintings.",
          "Modal2Head": "Part of our place, variety of art.",
          "Modal3Head": "Framed mirrors for your home and office decor.",
          "Modal4Head": "Art for public places and restaurants.",
          "Modal5Head": "Vintage and special framed art.",
          "Modal6Head": "Collaborations with art galleries and artist exhibitions.",
          "Modal7Head": "Special framed art.",
          "Modal8Head": "Canvas framed paintings for office and open spaces.",
          "Modal9Head": "Variety of unique framed art in our place.",
          "Modal10Head": "Variety of frames.",
          "Modal11Head": "Framed art for home decor.",
          "Modal12Head": "Variety of frames and art for places with modern and young design style.",

          "ContactFormInfo": "Contact Info",
          "ContactFormInfoPhone": "Phone",
          "ContactFormInfoEmail": "Email",
          "ContactFormInfoAddress": "Address",
          "ContactFormInfoAddress1": "Havatzelet 3 St.",
          "ContactFormInfoAddress2": "Jerusalem",
          "ContactFormInfoAddress3": "Israel",

          "ContactFormHeader": "Send a Message",

          "ContactFormName": "Full Name",
          "ContactFormPhone": "Phone Number",
          "ContactFormEmail": "Email",
          "ContactFormMsg": "Message",

          "buttonTextSendMsgFirst": "Send a Message",
          "buttonTextSendMsg": "Send a Message",
          "buttonTextIsSending": "Is sending...",
          "buttonTextFailed": "Failed, Try again",
          "buttonTextMsgSent": "Message just sent",

          "FooterRight1": "About Raphael",
          "FooterRight2": "Art, Frames design experts, Photos, Images",
          "FooterRight3": ".Wall art for your place",

          "FooterCenter": "Around the Web",

          "FooterLeft1": "Opening Hours",
          "FooterLeft2": "Sunday to Thursday",
          "FooterLeft3": "18:00 - 09:00",
          "FooterLeft4": "Friday",
          "FooterLeft5": "13:00 - 09:00",

          "AccessibilityP": "Accessibility adjustments have been made on this site for people with disabilities"
        }
      },
      ??????????: {
        translations: {
          "FirstHeader": "???????????? ??????????",
          "Header": "????????",
          "SubHeader": "???????????? ??????????????",

          "MenuToggleBtn": "?????????? ",

          "clickMe": "???????? ??????????",
          "aboutMe": "??????????",
          "buttonClicked": "?????????? ????????",

          "OurServicesNav": "???????????????? ????????",
          "GalleryNav": "??????????",
          "AboutUsNav": "??????????",
          "ContactUsNav": "?????????? ??????",
          "OurServices": "???????????????? ????????",
          "AboutUsP": "?????????????? ??????????????, ???????????? ?????????????? ???????? 1966,",
          "AboutUsP2": "?????????? ?????????????? ???? ?????????? ???????????? ???????????? ??????????. ???????????? ???? ?????????????? ???????????? ?????????? ????????. ???????????? ?????? ???? ???????? ?????????? ???????? ?????????? ?????? ?????? ???????? ????????????????????, ?????????? ???????????? ?????????????? ???? ?????????????? ???????????????? ?????????? ?????????????? ??????????.",

          "OurServicesH1": "?????????? ???????????? ??????????????",
          "OurServicesH2": "?????????? ???????????? ??????????????",
          "OurServicesH3": "?????????? ?????????????? ?????????????? ?????? ????????",
          "OurServicesH4": "???????????? ????????????",
          "OurServicesH5": "??????????",
          "OurServicesH6": "????????????",

          "OurServicesP1": "?????????? ???????????? ???????????? ????????????, ????????????, ???????????????? ?????????????? ????????????, ?????????? ?????????? ????????, ?????????? ??????????????, ?????????? ??????????, ?????????? ?????????? ?????? ????????",
          "OurServicesP2": "?????????? ???????????? ??????????????, ?????????? ?????????????? ???? ?????????????? ???????????????? ????????.???????? ?????????? ?????????????? ???????????? ??????????????, ????????????, ??????????, ?????????? ??????, ???????????? ???? ???? ???????? ???????????? ??????????????",
          "OurServicesP3": "?????????? ?????????? ?????? ?????????????? ???????????????????? ?????? ???????????? ??????????????, ????????????, ??????????, ???????? ?????? ???????????? ???????????? ?????????????? ???????? ??????????",
          "OurServicesP4": "?????? ??-55 ???????? ???????????? ?????????????? ?????????????? ???????????? ?????????????? ?????????????? ????????????. ???? ?????? ?????? ???????????? ?????????? ?????????????? ?????????? ?????????? ???????????? ?????????????? ?????????? ??????????",
          "OurServicesP5": "?????????? ?????????? ???????????? ?????????? ???? ?????????? ???????????? ????????, ?????? ???????????? ?????????????? ????????????, ?????????? ???????????? ?????????????? ???????????? ???????????? ???????????? ???? ?????? ?????????? ???????????? ?????????? ?????????????????????? ???????????? ??????????",
          "OurServicesP6": "?????????? ?????????? ???????????? ?????????? ???? ????????????, ?????? ???????????? ???????????? ????????????, ?????????? ???????????? ??????????????, ??????????, ?????????? ???????????? ?????????? ???????????? ???? ???????? ??????????",

          "Modal1Head": ".???????????? ?????????? ???????????? ????????????",
          "Modal2Head": ".?????? ?????????? ?????????????? ?????????? ??????????",
          "Modal3Head": ".?????????? ???????????????? ???????????? ???????? ????????????",
          "Modal4Head": ".?????????? ??????????????, ??????????, ?????? ?????? ?????????????? ???????????????? ",
          "Modal5Head": ".???????????? ?????????????? ????????????' ?????????? ???????????? ??????????",
          "Modal6Head": ".???????????? ?????????? ???? ???????????? ???????????????? ??????????",
          "Modal7Head": ".?????????? ?????????????? ????????????",
          "Modal8Head": ".???????????? ???????????????? ???? ???????? ??????????????",
          "Modal9Head": ".?????????? ?????????? ?????????????? ?????????????? ??????????????",
          "Modal10Head": ".???????? ????????????",
          "Modal11Head": ".?????????? ?????????????? ???????????? ????????",
          "Modal12Head": ".?????????? ???????????? ???????????? ?????????????? ???? ?????????? ?????????? ???????????? ??????????",

          "ContactFormInfo": "?????????? ????????????",
          "ContactFormInfoPhone": "??????????",
          "ContactFormInfoEmail": "????????????",
          "ContactFormInfoAddress": "??????????????",
          "ContactFormInfoAddress1": "???????? ???????????? 3",
          "ContactFormInfoAddress2": "??????????????",
          "ContactFormInfoAddress3": "??????????",

          "ContactFormHeader": "???????? ?????????? ??????????",

          "buttonTextSendMsgFirst": "??????",
          "buttonTextSendMsg": "??????",
          "buttonTextIsSending": "...????????",
          "buttonTextFailed": "??????????, ??????/?? ??????",
          "buttonTextMsgSent": ".???????? ????????????",

          "FooterRight1": "?????????? ????????",
          "FooterRight2": "???????????? ???????????? ???????????? ??????,",
          "FooterRight3": "????????????, ????????????, ?????????? ????????????????, ?????????? ??????, ????????, ??????????????, ????????????????",

          "FooterCenter": "?????????? ????????????",

          "FooterLeft1": "???????? ????????????",
          "FooterLeft2": "???????? ??' - ??'",
          "FooterLeft3": "18:00 - 09:00",
          "FooterLeft4": "?????? ????????",
          "FooterLeft5": "13:00 - 09:00",

          "AccessibilityP": "???????? ???? ?????????? ???????????? ???????????? ???????? ?????????? ???? ??????????????????"
        }
      }
    },
    fallbackLng: "??????????",
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;