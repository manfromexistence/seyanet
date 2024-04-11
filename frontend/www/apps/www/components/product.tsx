"use client"

import { Button } from "@/registry/default/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/registry/default/ui/card"
import { ChevronsUpDown, Ellipsis, Pencil, Trash2, X } from "lucide-react"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio";
import { Label } from "@/registry/default/ui/label"
import { Input } from "@/registry/default/ui/input"
import { Textarea } from "@/registry/default/ui/textarea"
import axios from 'axios'
import useSWR from 'swr';
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"


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
interface ContentResponse {
  map: any;
  data: any[];
  error?: Error;
}
// const products: { [key: string]: Product } = {
//   eidMubarakData: {
//     "title": "Eid Mubarak",
//     "description": "A joyous Islamic holiday celebrating the end of Ramadan (Eid al-Fitr) or honoring Abraham's sacrifice (Eid al-Adha).",
//     "variation": "Eid al-Fitr (End of Ramadan) or Eid al-Adha (Sacrifice)",
//     "price": "free!",
//     "exclusions": "free!",
//     "interests": ["Celebration", "Religion", "Community", "Family", "Food"],
//     "transportation": "Varies depending on location, but may involve visiting mosques or family gatherings.",
//     "guidance": "Greetings: 'Eid Mubarak'  | Traditional clothing encouraged  | Gift-giving (optional)",
//     "path": "as you wish!",
//     "requirements": "Varies depending on location and traditions, but may involve attending prayers or family gatherings."
//   },
//   kabah: {
//     "title": "Journey to Hajj: A pilgrimage to Kabah",
//     "description": "Hajj is a holy pilgrimage for Muslims to the holiest city of Islam, Mecca, Saudi Arabia. It's a mandatory pilgrimage for those who are physically and financially able.",
//     "variation": "One mounth",
//     "price": "Varies depending on travel arrangements, accommodation, and services.",
//     "exclusions": "Price may not include visa fees, personal expenses, and sacrificial animal (if applicable).",
//     "interests": ["Religion", "Pilgrimage", "Islam", "Cultural immersion"],
//     "transportation": "Varies depending on origin. Options include flights, buses, or joining organized Hajj groups with transportation included.",
//     "guidance": "Requires a valid Hajj visa.  |  Strict adherence to Hajj rituals.  |  Recommended to travel with a knowledgeable guide.",
//     "path": "Varies depending on origin, but ultimately leads to Mecca, Saudi Arabia.",
//     "requirements": "Physical and financial ability.  |  For some nationalities, a Hajj quota system may apply."
//   },
//   madian: {
//     "title": "Journey to Madina",
//     "description": "Embark on a spiritual pilgrimage to Madina, the second holiest city in Islam. Explore the Prophet's Mosque (Masjid النبوي) and other historical sites, experience the vibrant Islamic culture, and deepen your faith.",
//     "variation": "Individual travel or Guided tour (Umrah packages available)",
//     "price": "Varies depending on travel time, origin, accommodation, and inclusions. Expect a range of \$2,000 - \$10,000+.",
//     "exclusions": "Typically excludes international flights, meals beyond breakfast at some hotels, personal expenses, and Saudi Arabia visa fees.",
//     "interests": ["Religion", "Pilgrimage", "History", "Culture", "Architecture"],
//     "transportation": "Varies depending on your origin. Options include flights (consider nearby airports like Jeddah or Medina), buses (potentially long journeys depending on origin), or car travel (requires proper permits for international travel by car).",
//     "guidance": "Consult a trusted travel agency specializing in Islamic pilgrimages. Visa and vaccination requirements may apply (check with Saudi Arabian authorities). Consider travel insurance and appropriate Islamic attire for religious sites. Learn basic Arabic phrases for a more enriching experience.",
//     "path": "Varies depending on origin. Common routes involve flights to Jeddah or Medina airports, followed by ground transportation to Madina.",
//     "requirements": "Physical fitness for religious activities (walking, standing for prayers).  Appropriate clothing for Islamic sites (modest clothing that covers shoulders and knees for both men and women). Valid visa for Saudi Arabia (apply well in advance). Umrah pilgrimage may require additional permits depending on nationality."
//   }
// };

const desiredLanguages: Language[] = [
  { code: "ar", name: "Arabic" },
  { code: "bn", name: "Bengali" },
  { code: "de", name: "German" },
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "fa", name: "Persian" },
  { code: "gu", name: "Gujarati" },
  { code: "hi", name: "Hindi" },
  { code: "it", name: "Italian" },
  { code: "ko", name: "Korean" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "ps", name: "Pashto" },
  { code: "pa", name: "Punjabi" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "sw", name: "Swahili" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
  { code: "tr", name: "Turkish" },
  { code: "ur", name: "Urdu" },
  { code: "zh", name: "Chinese" },
];

let imageSrc: string[] = [
  "eid.jpg",
  "kabah.jpg",
  "madina.jpg"
]



const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};


export function productAction() {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Title" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Description" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea id="requirements" placeholder="Requirements" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="variant">Variant</Label>
        <Input id="variant" placeholder="Variant" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input id="price" placeholder="Price" type="number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guidance">Guidance</Label>
        <Textarea id="guidance" placeholder="Guidance" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="exclusions">Exclusions</Label>
        <Textarea id="exclusions" placeholder="Exclusions" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="path">Path</Label>
        <Input id="path" placeholder="Path" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="transportation">Transportation</Label>
        <Input id="transportation" placeholder="Transportation" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="interests">Interests</Label>
        <Input id="interests" placeholder="Interests" />
      </div>
    </div>
  )
}

// export function collapsibleCustomize() {
//   return (


//   )
// }

// export function productCard() {

// const { data, error } = useSWR("api/getAllData", fetcher);

// if (error) return <div>Failed to load data: {error.message}</div>;
// if (!data) return <div>Loading...</div>;

// const renderData = data.map((item: { data: { [key: string]: Product }; _id: React.Key | null | undefined; }) => {
//   const { title, description, variation, price, guidance, requirements, interests, path, transportation, exclusions } = item.data?.bn || {};;

//   return (
//     <div key={item._id}>
//       <span>{title}</span>
//       <span>{description}</span>
//       <span>{variation}</span>
//       <span>{price}</span>
//       <span>{guidance}</span>
//       <span>{requirements}</span>
//       <span>{interests}</span>
//       <span>{path}</span>
//       <span>{transportation}</span>
//     </div>
//   );
// });


//   // return (
//   //   <div>
//   //     {/* <code>{JSON.stringify(data)}</code> */}
//   //     {renderData}

//   //     {/* {data.map((item: any,index: any) => {
//   //       <div key={index} className="flex items-start justify-start space-y-3 flex-row">
//   //         <span>{item.title}</span>
//   //         <span>{item.description}</span>
//   //         <span>{item.variant}</span>
//   //         <span>{item.price}</span>
//   //         <span>{item.guidance}</span>
//   //         <span>{item.requirements}</span>
//   //         <span>{item.interests}</span>
//   //         <span>{item.path}</span>
//   //         <span>{item.transportation}</span>
//   //       </div>
//   //     })} */}
//   //   </div>
//   // );
// }
// export const productCard = ({ title, description, variation, price, guidance, requirements, interests, path, transportation, exclusions }: Product) => (
//   <div>
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );


// export default function SiteNFooter() {

//   const { data, error } = useSWR("api/getAllData", fetcher);

//   if (error) return <div>Failed to load data: {error.message}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="flex items-start justify-start space-x-3 flex-row">
//       {data.map((item: { data: { [key: string]: Product }; _id: React.Key | null | undefined; }, index: number) => (
//         <productCard key={index} {...item.data} />
//       ))}
//     </div>
//   )
// }
// export const productCard = ({
//   title,
//   description,
//   variation,
//   price,
//   guidance,
//   requirements,
//   interests,
//   path,
//   transportation,
//   exclusions,
// }) => (
//   <div>
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// export const productCard = () => (
//   <div>
//     <h3>Title</h3>
//     <p>Description</p>
//   </div>
// );

// // Define the SiteNFooter component with type annotations
// export default function SiteNFooter() {
//   const { data, error } = useSWR<Product[]>("api/getAllData", fetcher); // UseSWR with generic type

//   if (error) return <div>Failed to load data: {error.message}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="flex items-start justify-start space-x-3 flex-row">
//       {data.map((item: any, index: React.Key) => (
//         <productCard key={index}/>
//       ))}
//     </div>
//   );
// }



// Interface for JSON data structure (adapt as needed)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Products {
  _id?: string;
  __v: any;
  data: Product;
}

const MyComponent: React.FC = () => {
  // const [fetchData, setFetchData] = useState<Products[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://your-api.com/data');
  //       const fetchedData = await response.json();
  //       setFetchData(fetchedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const { data, error } = useSWR("api/getAllData", fetcher);

  if (error) return <div>Failed to load data: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex items-start justify-start space-x-3 flex-row">
      {data.map((item: Products, index: number) => (
        <ProductDetails key={item._id} index={index} dataObj={item.data} __v={item.__v} />
      ))}
    </div>
  );
};

const ProductDetails: React.FC<{ dataObj: any; __v: any, index: number }> = ({
  dataObj,
  __v, index
}) => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const [currentData, setCurrentData] = useState<any>({}); // Store data for current language
  function getLanguageName(code: string): string | undefined {
    const language = desiredLanguages.find((lang) => lang.code === code);
    return language?.name; // Use optional chaining for potential undefined language
  }
  
  // Fetch data on component mount (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchedData = dataObj || {}; // Use dataObj directly if already fetched
    setCurrentData(fetchedData[language] || {});
  }, [language, dataObj]); // Re-run when language or dataObj changes

  const handleLanguageChange = (newLanguage: string) => {
    if (desiredLanguages.find((lang) => lang.code === newLanguage)) {
      setLanguage(newLanguage);
    } else {
      console.warn(`Language "${newLanguage}" not found in desiredLanguages`);
    }
  };

  const { title, description, variation, price, guidance, requirements, interests, path, transportation, exclusions } = dataObj?.[language] || {};

  return (
    <Card className="flex-1 h-auto">
      <CardHeader className="pb-4 space-y-3">
        <nav className="w-full h-min min-lg:h-[565px] mb-0 flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="p-3 text-sm border rounded-md hover:bg[hsl(var(--primary))]">Selected ({getLanguageName(language)})</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse contents in your desired language</DropdownMenuLabel>
              <DropdownMenuSeparator />
  
              {desiredLanguages.map((language, index) => (
                <DropdownMenuItem onClick={() => handleLanguageChange(language.code)} key={index}>{language.name}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>


          <div className="actions w-auto h-auto flex items-end justify-center">
            <div className="p-3 flex items-center justify-center rounded-full border hover:bg-[hsl(var(--secondary))]">
              <Pencil className="h-3.5 w-3.5" />
            </div>
            <div className="p-3 flex items-center justify-center rounded-full border hover:bg-[hsl(var(--secondary))]">
              <Trash2 className="h-3.5 w-3.5" />
            </div>
            <div className="p-3 flex items-center justify-center rounded-full border hover:bg-[hsl(var(--secondary))]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Ellipsis className="h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem>
                    Like
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Save
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

        </nav>
        <AspectRatio ratio={16 / 9}>
          <Image src={`/${imageSrc[index]}`} alt={title} fill={true} className="rounded-md object-cover" />
        </AspectRatio>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* {desiredLanguages.map((lang) => (
          <button key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
            {lang.name}
          </button>
        ))} */}

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              See more...
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Variation: {variation}
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Price: {price}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Path: {path}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Exclusions: {exclusions}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Interesst: {interests}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Transportation: {transportation}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Guidence: {guidance}
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Requirements: {requirements}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default MyComponent;
