import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface product {
  name: string;
  email: string;
  avatar?: string;
  title?: string;
  description?: string;
  variation?: string;
  price_include?: string;
  contents_and_exclusions?: string;
  interests?: string;
  transportation?: string;
  guidance_and_assistance?: string;
  path?: string;
  requirements?: string;
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<product>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  title: {type: "string",require:true},
  description: {type: "string",require:true},
  variation: {type: "string",require:true},
  price_include: {type: "string",require:true},
  contents_and_exclusions: {type: "string",require:true},
  interests: {type: "string",require:true},
  transportation: {type: "string",require:true},
  guidance_and_assistance: {type: "string",require:true},
  path: {type: "string",require:true},
  requirements: {type: "string",require:true},
});
const languageSchema = new Schema({
  // code: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  //   maxlength: 2,
  // },
  title: {type: "string",require:true},
  description: {type: "string",require:true},
  variation: {type: "string",require:true},
  price_include: {type: "string",require:true},
  contents_and_exclusions: {type: "string",require:true},
  interests: {type: "string",require:true},
  transportation: {type: "string",require:true},
  guidance_and_assistance: {type: "string",require:true},
  path: {type: "string",require:true},
  requirements: {type: "string",require:true},
});

const contentSchema = new Schema({
  translations: {
    type: Map,
    of: languageSchema,
  },
});

// 3. Create a Model.
const Content = model<any>('content', contentSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect("mongodb+srv://sumon:sumon1234@seyaha.pzour3n.mongodb.net/ProductList?retryWrites=true&w=majority&appName=seyaha");

  const content = new Content({
    translations: {
      en: {
        title: "English Title",
        description: "English Description",
      },
      bn: {
        title: "বাংলা শিরোনাম",
        description: "বাংলা বিবরণ",
      },
    },
  });


  // const user = new User({
  //   name: 'Sumon',
  //   email: 'ajju40959@gmail.com',
  //   avatar: 'https://i.imgur.com/dM7Thhn.png',
  //   title: "Amazing Day Trip to Sundarbans National Forest",
  //   description: "Explore the natural wonders of the Sundarbans, the largest mangrove forest in the world, on this exciting day trip. Cruise through the lush waterways, spot diverse wildlife, and learn about the unique ecosystem.",
  //   variation: "Private Tour or Group Tour",
  //   price_include: "Boat transportation, park entrance fees, experienced guide, and lunch.",
  //   contents_and_exclusions: "Includes boat ride, park entry, guide, and lunch. Excludes travel to and from Khulna, personal expenses, and gratuities.",
  //   interests: "Wildlife, nature, photography, boat tours",
  //   transportation: "Local boat transportation within the Sundarbans",
  //   guidance_and_assistance: "Experienced English-speaking guide throughout the tour",
  //   path: "Khulna - Sundarbans National Forest - Khulna",
  //   requirements: "Comfortable clothing and shoes suitable for walking and boating. Binoculars recommended for wildlife viewing."
  // });
  await content.save();

  console.log(content.title);
}
