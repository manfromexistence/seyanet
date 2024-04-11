import { Schema, model, connect } from 'mongoose';
import translate from "@iamtraction/google-translate";

interface Product {
  title: string;
  description: string;
  variation: string;
  price: string;
  exclusions: string;
  interests: string[];
  transportation: string;
  guidance: string;
  path: string;
  requirements: string;
}
interface Language {
  code: string;
  name: string;
}

let title: string = "Eid Mubarak";
let description: string = "A joyous Islamic holiday celebrating the end of Ramadan Eid al-Fitr or honoring Abraham's sacrifice Eid al-Adha.";
let variation: string = "Eid al-Fitr (End of Ramadan) or Eid al-Adha (Sacrifice)";
let price: string = "free!"; 
let exclusions: string = "free!";
let interests: any = "Celebration";
let transportation: string = "Varies depending on location, but may involve visiting mosques or family gatherings.";
let guidance: string = "Greetings: Eid Mubarak | Traditional clothing encouraged | Gift-giving (optional)";
let path: string = "as you wish!";
let requirements: string = "Varies depending on location and traditions, but may involve attending prayers or family gatherings.";


const products: { [key: string]: Product } = {
  eidMubarakData: {
    "title": "Eid Mubarak",
    "description": "A joyous Islamic holiday celebrating the end of Ramadan (Eid al-Fitr) or honoring Abraham's sacrifice (Eid al-Adha).",
    "variation": "Eid al-Fitr (End of Ramadan) or Eid al-Adha (Sacrifice)",
    "price": "free!",
    "exclusions": "free!",
    "interests": ["Celebration", "Religion", "Community", "Family", "Food"],
    "transportation": "Varies depending on location, but may involve visiting mosques or family gatherings.",
    "guidance": "Greetings: 'Eid Mubarak'  | Traditional clothing encouraged  | Gift-giving (optional)",
    "path": "as you wish!",
    "requirements": "Varies depending on location and traditions, but may involve attending prayers or family gatherings."
  },
  kabah: {
    "title": "Journey to Hajj: A pilgrimage to Kabah",
    "description": "Hajj is a holy pilgrimage for Muslims to the holiest city of Islam, Mecca, Saudi Arabia. It's a mandatory pilgrimage for those who are physically and financially able.",
    "variation": "One mounth",
    "price": "Varies depending on travel arrangements, accommodation, and services.",
    "exclusions": "Price may not include visa fees, personal expenses, and sacrificial animal (if applicable).",
    "interests": ["Religion", "Pilgrimage", "Islam", "Cultural immersion"],
    "transportation": "Varies depending on origin. Options include flights, buses, or joining organized Hajj groups with transportation included.",
    "guidance": "Requires a valid Hajj visa.  |  Strict adherence to Hajj rituals.  |  Recommended to travel with a knowledgeable guide.",
    "path": "Varies depending on origin, but ultimately leads to Mecca, Saudi Arabia.",
    "requirements": "Physical and financial ability.  |  For some nationalities, a Hajj quota system may apply."
  },
  madian: {
    "title": "Journey to Madina",
    "description": "Embark on a spiritual pilgrimage to Madina, the second holiest city in Islam. Explore the Prophet's Mosque (Masjid النبوي) and other historical sites, experience the vibrant Islamic culture, and deepen your faith.",
    "variation": "Individual travel or Guided tour (Umrah packages available)",
    "price": "Varies depending on travel time, origin, accommodation, and inclusions. Expect a range of \$2,000 - \$10,000+.",
    "exclusions": "Typically excludes international flights, meals beyond breakfast at some hotels, personal expenses, and Saudi Arabia visa fees.",
    "interests": ["Religion", "Pilgrimage", "History", "Culture", "Architecture"],
    "transportation": "Varies depending on your origin. Options include flights (consider nearby airports like Jeddah or Medina), buses (potentially long journeys depending on origin), or car travel (requires proper permits for international travel by car).",
    "guidance": "Consult a trusted travel agency specializing in Islamic pilgrimages. Visa and vaccination requirements may apply (check with Saudi Arabian authorities). Consider travel insurance and appropriate Islamic attire for religious sites. Learn basic Arabic phrases for a more enriching experience.",
    "path": "Varies depending on origin. Common routes involve flights to Jeddah or Medina airports, followed by ground transportation to Madina.",
    "requirements": "Physical fitness for religious activities (walking, standing for prayers).  Appropriate clothing for Islamic sites (modest clothing that covers shoulders and knees for both men and women). Valid visa for Saudi Arabia (apply well in advance). Umrah pilgrimage may require additional permits depending on nationality."
  }
};

export interface LanguageSchema {
    imageUrl?: string;
    title: string;
    description: string;
    variation: string;
    price: string;
    exclusions: string;
    interests: string;
    transportation: string;
    guidance: string;
    path: string;
    requirements: string;
}

export const languageSchema: Schema<LanguageSchema> = new Schema({
    imageUrl: { type: String },
    title: { type: String, require: true },
    description: { type: String, require: true },
    variation: { type: String, require: true },
    price: { type: String, require: true },
    exclusions: { type: String, require: true },
    interests: { type: String, require: true },
    transportation: { type: String, require: true },
    guidance: { type: String, require: true },
    path: { type: String, require: true },
    requirements: { type: String, require: true },
});

const contentSchema: Schema<{ translations: Map<string, LanguageSchema> }> = new Schema({
    translations: {
        type: Map,
        of: languageSchema,
    },
});

const Content = model('content', contentSchema);

run().catch(err => console.log(err));

async function run() {

    await connect("mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha");

      async function translateAndSaveContent(languages: string[]) {
        const translations: { [key: string]: LanguageSchema } = {};
        for (const lang of languages) {
          try {
            const translatedTitle = await translate(title, { to: lang });
            const translatedDescription = await translate(description, { to: lang });
            const translatedVariation = await translate(variation, { to: lang });
            const translatedPrice = await translate(price, { to: lang });
            const translatedExclusions = await translate(exclusions, { to: lang });
            const translatedInterests = await translate(interests, { to: lang });
            const translatedTransportation = await translate(transportation, { to: lang });
            const translatedGuidance = await translate(guidance, { to: lang });
            const translatePath = await translate(path, { to: lang });
            const translateRequirements = await translate(requirements, { to: lang });

            translations[lang] = {
                title: translatedTitle.text,
                description: translatedDescription.text,
                variation: translatedVariation.text,
                price: translatedPrice.text,
                exclusions: translatedExclusions.text,
                interests: translatedInterests.text,
                transportation: translatedTransportation.text,
                guidance: translatedGuidance.text,
                path: translatePath.text,
                requirements: translateRequirements.text,
            };
          } catch (err) {
            console.error(`Error translating to ${lang}: ${err}`);
          }
        }

        const dataResult = await Content.find({});
        console.log(`all translations=${translations} and all dataResult=${dataResult}`);

        const newContent = new Content({ data: translations });
        await newContent.save()
          .then(() => console.log("Content saved successfully"))
          .catch((err) => console.error("Error saving content:", err));

      }

    const desiredLanguages: string[] = ["ar", "bn", "de", "en", "es", "fr", "fa", "gu", "hi", "it", "hi", "ko", "ms", "ml", "ps", "pa", "pt", "ru", "sw", "te", "ta", "tr", "ur", "zh-cn"];

    translateAndSaveContent (desiredLanguages);
}
