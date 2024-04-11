import { Schema, model, connect } from 'mongoose';
import translator from "./translator-by-manfromexistence/index.js";

let title = "Eid Mubarak";
let description = "A joyous Islamic holiday celebrating the end of Ramadan (Eid al-Fitr) or honoring Abraham's sacrifice (Eid al-Adha).";
let variation = "Eid al-Fitr (End of Ramadan) or Eid al-Adha (Sacrifice)";
let price = "free!";
let exclusions = "free!";
let interests = "Celebration";
let transportation = "Varies depending on location, but may involve visiting mosques or family gatherings.";
let guidance = "Greetings: 'Eid Mubarak' | Traditional clothing encouraged | Gift-giving (optional)";
let path = "as you wish!";
let requirements = "Varies depending on location and traditions, but may involve attending prayers or family gatherings.";


const languageSchema = new Schema({
  code: {
    type: String,
    minlength: 2,
    maxlength: 2,
  },
  title: { type: "string", require: true },
  description: { type: "string", require: true },
  variation: { type: "string", require: true },
  price: { type: "string", require: true },
  exclusions: { type: "string", require: true },
  interests: { type: "string", require: true },
  transportation: { type: "string", require: true },
  guidance: { type: "string", require: true },
  path: { type: "string", require: true },
  requirements: { type: "string", require: true },
});

const contentSchema = new Schema({
  data: {
    type: Map,
    of: languageSchema,
  },
});

const Content = model('content', contentSchema);

run().catch(err => console.log(err));

async function run() {

  await connect("mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList01?retryWrites=true&w=majority&appName=seyaha");

  async function translateAndSaveContent(languages) {
    const translations = {};
    for (const lang of languages) {
      try {
        const translatedTitle = await translator(title, { to: lang });
        const translatedDescription = await translator(description, { to: lang });
        const translatedVariation = await translator(variation, { to: lang });
        const translatedPrice = await translator(price, { to: lang });
        const translatedExclusions = await translator(exclusions, { to: lang });
        const translatedInterests = await translator(interests, { to: lang });
        const translatedTransportation = await translator(transportation, { to: lang });
        const translatedGuidance = await translator(guidance, { to: lang });
        const translatePath = await translator(path, { to: lang });
        const translateRequirements = await translator(requirements, { to: lang });

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

    console.log(translations);

    const newContent = new Content({ data: translations });
    await newContent.save()
      .then(() => console.log("Content saved successfully"))
      .catch((err) => console.error("Error saving content:", err));
  }

  const desiredLanguages = ["ar", "bn", "de", "en", "es", "fr", "fa", "gu", "hi", "it", "hi", "ko", "ms", "ml", "ps", "pa", "pt", "ru", "sw", "te", "ta", "tr", "ur", "zh"];

  translateAndSaveContent(desiredLanguages);

}
