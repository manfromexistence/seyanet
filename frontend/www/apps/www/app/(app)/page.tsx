import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"
import translate from "@iamtraction/google-translate";
import { CommandMenu } from "@/components/command-menu"
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
import { Button } from "@/registry/default/ui/button"
import { Plus } from "lucide-react"

translate('Tu es incroyable!', { to: 'en' }).then((res: { text: any }) => {
  console.log(res.text);
}).catch((err: any) => {
  console.error(err);
});

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Project for Mostafa.</PageHeaderHeading>
        <PageHeaderDescription>
          {/* Translation Management for Seyaha Website. */}
          I am offering a comprehensive solution for your e-commerce business with a Translation Management System (TMS).
          This system will be capable of translating various aspects of your product listings into over 25 languages, thereby expanding your global reach and accessibility.
        </PageHeaderDescription>
        <PageActions>
          <Link href="https://www.upwork.com/freelancers/~01b52af7a84ded5239" className={cn(buttonVariants())}>
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

      <div className="w-full h-[100vh] rounded-md flex items-start justify-start px-5 space-x-2">
        <Input className="w-full" placeholder="Search your products..." />
        <Select>
          <SelectTrigger className="w-[180px]">
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

      {/* <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section> */}
    </div>
  )
}
