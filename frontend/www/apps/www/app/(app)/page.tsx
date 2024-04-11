// "use client"
// import React from "react";
import Image from "next/image"
import Link from "next/link"
import translate from "@iamtraction/google-translate"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { CommandMenu } from "@/components/command-menu"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
// import SiteNFooter from "@/components/product"
import MyComponent from "@/components/product"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import { Input } from "@/registry/default/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"

// translate('Tu es incroyable!', { to: 'en' }).then((res: { text: any }) => {
//   console.log(res.text);
// }).catch((err: any) => {
//   console.error(err);
// });

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Project for Mostafa.</PageHeaderHeading>
        <PageHeaderDescription>
          {/* Translation Management for Seyaha Website. */}I am offering a
          comprehensive solution for your e-commerce business with a Translation
          Management System (TMS). This system will be capable of translating
          various aspects of your product listings into over 25 languages,
          thereby expanding your global reach and accessibility.
        </PageHeaderDescription>
        <PageActions>
          <Link
            href="https://www.upwork.com/freelancers/~01b52af7a84ded5239"
            className={cn(buttonVariants())}
          >
            Upwork
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/manfromexistence"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Link>
        </PageActions>
      </PageHeader>

      <div className="flex h-[100vh] w-full flex-col items-start justify-start space-y-5 rounded-md px-5">
        <div className="flex w-full flex-row items-start justify-start space-x-2">
          <Input className="w-full" placeholder="Search your products..." />
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select by activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Acitivites</SelectLabel>
                <SelectItem value="apple">Title</SelectItem>
                <SelectItem value="banana">Description</SelectItem>
                <SelectItem value="blueberry">Path</SelectItem>
                <SelectItem value="grapes">Price</SelectItem>
                <SelectItem value="pineapple">Requirement</SelectItem>
                <SelectItem value="pineapple">Variation</SelectItem>
                <SelectItem value="pineapple">Explusive</SelectItem>
                <SelectItem value="pineapple">Guidence</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="secondary">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <MyComponent />
      </div>
    </div>
  )
}
