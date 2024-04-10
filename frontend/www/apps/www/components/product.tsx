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

  const products = {
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
    }
    
};
  
export default function SiteNFooter() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="products grid">

      <Card className="lg:w-[400px] h-auto ">
        <CardHeader className="pb-4 space-y-3">
          <AspectRatio ratio={16 / 9}>
            <Image src="/eid.jpg" alt="Image" fill={true} className="rounded-md object-cover" />
          </AspectRatio>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
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
              Variation: {variation}
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                Price: {price}
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
          {/* <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium tracking-wide uppercase sm:text-base">Path</h3>
                  <p className="text-sm leading-6">Running track or treadmill</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium tracking-wide uppercase sm:text-base">Requirements</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Comfortable clothing</li>
                    <li>Hydration</li>
                    <li>Proper form</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wide uppercase sm:text-base">Variations</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Trail running shoes</li>
                  <li>Sprint spikes</li>
                  <li>Minimalist running shoes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wide uppercase sm:text-base">Guidance</h3>
                <p className="text-sm leading-6">
                  Warm-up before running. Choose the right shoes for your running style. Maintain a proper running posture.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium tracking-wide uppercase sm:text-base">Price</h3>
                <p className="text-2xl font-semibold">$89.99</p>
              </div> */}
        </CardContent>
      </Card>


    </div>
  )
}
