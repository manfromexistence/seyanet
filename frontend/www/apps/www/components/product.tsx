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
} from "@/registry/default/ui/dropdown-menu"
import { Label } from "@/registry/default/ui/label"
import { Input } from "@/registry/default/ui/input"
import { Textarea } from "@/registry/default/ui/textarea"
import axios from 'axios'
import useSWR from 'swr';


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
        <Textarea id="description" placeholder="Description"/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea id="requirements" placeholder="Requirements"/>
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
        <Textarea id="guidance" placeholder="Guidance"/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="exclusions">Exclusions</Label>
        <Textarea id="exclusions" placeholder="Exclusions"/>
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
// export function MyComponent() {
//   const { data, error } = useSWR("api/getAllData", fetcher);

//   if (error) return <div>Failed to load data: {error.message}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       <code>{JSON.stringify(data)}</code>
//       {data.map((item: any,index: any) => {
//         <div key={index} className="flex items-start justify-start space-y-3 flex-row">
//           <span>{item.title}</span>
//           <span>{item.description}</span>
//           <span>{item.variant}</span>
//           <span>{item.price}</span>
//           <span>{item.guidance}</span>
//           <span>{item.requirements}</span>
//           <span>{item.interests}</span>
//           <span>{item.path}</span>
//           <span>{item.transportation}</span>
//         </div>
//       })}
//     </div>
//   );
// }
export default function SiteNFooter() {

  const { data, error } = useSWR("api/getAllData", fetcher);

  if (error) return <div>Failed to load data: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex items-start justify-start space-x-3 flex-row">
      {data.map((item: any,index: any) => {

        const product: any = data[index];
        const imageIndex = Object.keys(data).indexOf(index);
        // const [isOpen, setIsOpen] = React.useState(false);

        return (
          <Card key={index} className="flex-1 h-auto ">
            <CardHeader className="pb-4 space-y-3">
              <nav className="w-full h-min min-lg:h-[565px] mb-0 flex items-center justify-between">
                <Select>
                  <SelectTrigger className="w-[175px]">
                    <SelectValue placeholder="Default(English)" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
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
                <Image src="/eid.jpg" alt="hi" fill={true} className="rounded-md object-cover" />
                {/* <Image src={`/${imageSrc[imageIndex]}`} alt={product.data.en.title} fill={true} className="rounded-md object-cover" /> */}
              </AspectRatio>
              <CardTitle>op</CardTitle>
              <CardDescription>op</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
