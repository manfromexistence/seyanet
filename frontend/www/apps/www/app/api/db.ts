import { Schema, model, connect } from 'mongoose';
import translate from "@iamtraction/google-translate";

let title: string = "Amazing Day Trip to Sundarbans National Forest";
let description: string = "Explore the natural wonders of the Sundarbans, the largest mangrove forest in the world, on this exciting day trip. Cruise through the lush waterways, spot diverse wildlife, and learn about the unique ecosystem.";
let variation: string = "Private Tour or Group Tour";
let price: string = "Boat transportation, park entrance fees, experienced guide, and lunch.";
let exclusions: string = "Includes boat ride, park entry, guide, and lunch. Excludes travel to and from Khulna, personal expenses, and gratuities.";
let interests: string = "Wildlife, nature, photography, boat tours";
let transportation: string = "Local boat transportation within the Sundarbans";
let guidance: string = "Experienced English-speaking guide throughout the tour";
let path: string = "Khulna - Sundarbans National Forest - Khulna";
let requirements: string = "Comfortable clothing and shoes suitable for walking and boating. Binoculars recommended for wildlife viewing.m,/";

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

async function run() {

    await connect("mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha");

    //   async function translateAndSaveContent(languages: string[]) {
    //     const translations: { [key: string]: LanguageSchema } = {};
    //     for (const lang of languages) {
    //       try {
    //         const translatedTitle = await translate(title, { to: lang });
    //         const translatedDescription = await translate(description, { to: lang });
    //         const translatedVariation = await translate(variation, { to: lang });
    //         const translatedPrice = await translate(price, { to: lang });
    //         const translatedExclusions = await translate(exclusions, { to: lang });
    //         const translatedInterests = await translate(interests, { to: lang });
    //         const translatedTransportation = await translate(transportation, { to: lang });
    //         const translatedGuidance = await translate(guidance, { to: lang });
    //         const translatePath = await translate(path, { to: lang });
    //         const translateRequirements = await translate(requirements, { to: lang });

    //         translations[lang] = {
    //             title: translatedTitle.text,
    //             description: translatedDescription.text,
    //             variation: translatedVariation.text,
    //             price: translatedPrice.text,
    //             exclusions: translatedExclusions.text,
    //             interests: translatedInterests.text,
    //             transportation: translatedTransportation.text,
    //             guidance: translatedGuidance.text,
    //             path: translatePath.text,
    //             requirements: translateRequirements.text,
    //         };
    //       } catch (err) {
    //         console.error(`Error translating to ${lang}: ${err}`);
    //       }
    //     }

    //     const dataResult = await Content.find({});
    //     console.log(dataResult);

    //     const newContent = new Content({ data: translations });
    //     await newContent.save()
    //       .then(() => console.log("Content saved successfully"))
    //       .catch((err) => console.error("Error saving content:", err));

    //   }

    const dataResult = await Content.find({});
    console.log(dataResult);

    const desiredLanguages: string[] = ["ar", "bn", "de", "en", "es", "fr", "fa", "gu", "hi", "it", "hi", "ko", "ms", "ml", "ps", "pa", "pt", "ru", "sw", "te", "ta", "tr", "ur", "zh-cn"];

    // translateAndSaveContent (desiredLanguages);
}

run()

export default Content;