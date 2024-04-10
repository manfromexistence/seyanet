"use client"

import React from "react";
import { Button } from "@/registry/default/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/registry/default/ui/card"
import { ChevronsUpDown, X } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import Image from "next/image"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio";
let title = "Amazing Day Trip to Sundarbans National Forest",
  description = "Explore the natural wonders of the Sundarbans, the largest mangrove forest in the world, on this exciting day trip. Cruise through the lush waterways, spot diverse wildlife, and learn about the unique ecosystem.",
  variation = "Private Tour or Group Tour",
  price = "Boat transportation, park entrance fees, experienced guide, and lunch.",
  exclusions = "Includes boat ride, park entry, guide, and lunch. Excludes travel to and from Khulna, personal expenses, and gratuities.",
  interests = "Wildlife, nature, photography, boat tours",
  transportation = "Local boat transportation within the Sundarbans",
  guidance = "Experienced English-speaking guide throughout the tour",
  path = "Khulna - Sundarbans National Forest - Khulna",
  requirements = "Comfortable clothing and shoes suitable for walking and boating. Binoculars recommended for wildlife viewing.";

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
    "price": "Varies depending on travel time, origin, accommodation, and inclusions. Expect a range of \$2,000 - \$10,000+.",  // Placeholder for price range
    "exclusions": "Typically excludes international flights, meals beyond breakfast at some hotels, personal expenses, and Saudi Arabia visa fees.",  // Placeholder for common exclusions
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

export default function SiteNFooter() {

  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

  return (
    <div className="products flex items-start justify-start space-x-3 flex-row">
      {Object.keys(products).map((productId) => {
        const product: Product = products[productId];
        const imageIndex = Object.keys(products).indexOf(productId);
        const [isOpen, setIsOpen] = React.useState(false);

        return (
          <Card key={productId} className="lg:w-[400px] h-auto ">
            <CardHeader className="pb-4 space-y-3">
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

      }
      )}


    </div>
  )
}
