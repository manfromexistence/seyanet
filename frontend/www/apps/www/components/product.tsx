"use client"

import React from "react";
import { Button } from "@/registry/default/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/registry/default/ui/card"
import { ChevronsUpDown, Ellipsis, Pencil, Trash2, X } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import Image from "next/image"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio";
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
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

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
let imageSrc: string[] = [
  "eid.jpg",
  "kabah.jpg",
  "madina.jpg"
]
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

import useSWR from 'swr';

interface ContentResponse {
  data: any[];
  error?: Error;
}

const fetcher = async (): Promise<ContentResponse> => {
  const response = await fetch('/api/getAllData');
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return await response.json();
};

function MyComponent() {
  const { data, error } = useSWR<ContentResponse>('/api/getAllData', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  // Use the fetched data (data.data is an array of LanguageSchema objects)
  return (
    <div>
      {data.data.map((language) => (
        <div key={language.title}>
          <h2>{language.title}</h2>
          <p>{language.description}</p>
        </div>
      ))}
    </div>
  );
}



export default function SiteNFooter() {

  return (
    <div className="products flex items-start justify-start space-x-3 flex-row">
      {Object.keys(products).map((productId) => {
        const product: Product = products[productId];
        const imageIndex = Object.keys(products).indexOf(productId);
        const [isOpen, setIsOpen] = React.useState(false);

        return (
          <Card key={productId} className="lg:w-[400px] h-auto ">
            <CardHeader className="pb-4 space-y-3">
              <nav className="w-full h-auto mb-0 flex items-center justify-between">
                <Select>
                  <SelectTrigger className="w-[175px]">
                    <SelectValue placeholder="Language(English)" />
                  </SelectTrigger>
                  <SelectContent>
                    {desiredLanguages.map((language) => (
                      <SelectItem value={language.code}>{language.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <Image src={`/${imageSrc[imageIndex]}`} alt={product.title} fill={true} className="rounded-md object-cover" />
              </AspectRatio>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-[350px] space-y-2"
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
                  Variation: {product.variation}
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Price: {product.price}
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Exclusions: {product.exclusions}
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Interesst: {product.interests}
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Transportation: {product.transportation}
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Guidence: {product.guidance}
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Requirements: {product.requirements}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        )
      })}

      <MyComponent />
    </div>
  )
}

