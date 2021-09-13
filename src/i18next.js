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
      עברית: {
        translations: {
          "FirstHeader": "ברוכים הבאים",
          "Header": "רפאל",
          "SubHeader": "מסגרות ותמונות",

          "MenuToggleBtn": "תפריט ",

          "clickMe": "תלחץ עכשיו",
          "aboutMe": "אודות",
          "buttonClicked": "כפתור נלחץ",

          "OurServicesNav": "השירותים שלנו",
          "GalleryNav": "גלריה",
          "AboutUsNav": "אודות",
          "ContactUsNav": "יצירת קשר",
          "OurServices": "השירותים שלנו",
          "AboutUsP": "מתעסקים באומנות, מסגרות ותמונות משנת 1966,",
          "AboutUsP2": "אנחנו מקפידים על איכות העבודה הגבוהה ביותר. עובדים עם החומרים הטובים ביותר בשוק. שואפים לתת את היחס האישי הטוב ביותר לכל אחד ואחת מלקוחותינו, ייעוץ מקצועי ולהתאים את האומנות והמסגרות בהתאם לדרישות הלקוח.",

          "OurServicesH1": "מסגור אומנות ותמונות",
          "OurServicesH2": "רכישת אומנות ותמונות",
          "OurServicesH3": "ייעוץ באומנות ותמונות לכל מקום",
          "OurServicesH4": "לקוחות פרטיים",
          "OurServicesH5": "צלמים",
          "OurServicesH6": "גלריות",

          "OurServicesP1": "אנחנו מומחים למסגור אומנות, תמונות, רסטורציה לעבודות אומנות, מסגור ציורי קנבס, מסגור צילומים, מסגור מראות, מסגור ציורי שמן ועוד",
          "OurServicesP2": "רכישה ממגוון סגנונות, גדלים ונושאים של האומנות והתמונות שלנו.ניתן להגיע ולהתרשם ממגוון המסגרות, תמונות, מראות, ציורי שמן, ציורים על בד קנבס וציורי אבסטרקט",
          "OurServicesP3": "לאורך השנים אנו מייעצים ללקוחותינו החל מבחירת האומנות, הצבעים, הנושא, האמן ועד להתקנת העבודה ומיקומה בבית הלקוח",
          "OurServicesP4": "כבר כ-55 שנים שאנחנו מייעצים ומוכרים אומנות ותמונות ללקוחות פרטיים. יש לנו קהל לקוחות שמבין באומנות ורוכש אצלנו ממגוון האומנות לאורך השנים",
          "OurServicesP5": "אנחנו עושים שיתופי פעולה עם צלמים וחברות הפקה, החל מבחירת התמונות למסגור, התאמת מסגרות לתמונות שנבחרו וייעוץ מקצועי על מנת להגיע לאיכות המוצר האופטימליות והטובה ביותר",
          "OurServicesP6": "אנחנו עושים שיתופי פעולה עם גלריות, החל ממסגור יצירות אומנות, ייעוץ בבחירת המסגרות, צבעים, התאמת מסגרות למספר תמונות עם נושא משותף",

          "Modal1Head": ".עבודות מסגור אומנות מיוחדת",
          "Modal2Head": ".חלק ממבחר האומנות אצלנו במקום",
          "Modal3Head": ".מראות ממוסגרות לעיצוב הבית והמשרד",
          "Modal4Head": ".אמנות למסעדות, עסקים, בתי ספר ומקומות ציבוריים ",
          "Modal5Head": ".אומנות ממוסגרת וינטאג' בהתאם לעיצוב המקום",
          "Modal6Head": ".שיתופי פעולה עם גלריות ותערוכות אמנים",
          "Modal7Head": ".אמנות ממוסגרת מיוחדת",
          "Modal8Head": ".ציורים ממוסגרים על קנבס למשרדים",
          "Modal9Head": ".מגוון אמנות ממוסגרת ייחודית במקומנו",
          "Modal10Head": ".מבחר מסגרות",
          "Modal11Head": ".אמנות ממוסגרת לעיצוב הבית",
          "Modal12Head": ".מגוון מסגרות ואמנות למקומות עם סגנון עיצוב מודרני וצעיר",

          "ContactFormInfo": "פרטים נוספים",
          "ContactFormInfoPhone": "טלפון",
          "ContactFormInfoEmail": "אימייל",
          "ContactFormInfoAddress": "כתובתנו",
          "ContactFormInfoAddress1": "רחוב החבצלת 3",
          "ContactFormInfoAddress2": "ירושלים",
          "ContactFormInfoAddress3": "ישראל",

          "ContactFormHeader": "ניתן לשלוח הודעה",

          "buttonTextSendMsgFirst": "שלח",
          "buttonTextSendMsg": "שלח",
          "buttonTextIsSending": "...שולח",
          "buttonTextFailed": "שגיאה, לחצ/י שוב",
          "buttonTextMsgSent": ".נשלח בהצלחה",

          "FooterRight1": "אודות רפאל",
          "FooterRight2": "מומחים למסגור אומנות קיר,",
          "FooterRight3": "מסגרות, תמונות, מראות ממוסגרות, ציורי שמן, קנבס, אבסטרקט, רסטורציה",

          "FooterCenter": "תעקבו אחרינו",

          "FooterLeft1": "שעות פעילות",
          "FooterLeft2": "ימים א' - ה'",
          "FooterLeft3": "18:00 - 09:00",
          "FooterLeft4": "ימי שישי",
          "FooterLeft5": "13:00 - 09:00",

          "AccessibilityP": "באתר זה בוצעו התאמות נגישות עבור אנשים עם מוגבלויות"
        }
      }
    },
    fallbackLng: "עברית",
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;