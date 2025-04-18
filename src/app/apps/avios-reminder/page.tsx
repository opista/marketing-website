"use client";

import LinkButton from "@/components/link-button";
import PageLayout from "@/components/page-layout";
import PageTitle from "@/components/page-title";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import Image from "next/image";
import Link from "next/link";

export default function AviosReminderPage() {
  const { isBelowSm } = useBreakpoint("sm");
  return (
    <PageLayout className="prose dark:prose-invert" tag="article">
      <div className="flex flex-col sm:flex-row items-center">
        <Image
          alt="Avios Reminder logo"
          className="my-0 mb-2 sm:mb-0 sm:mr-2"
          height={isBelowSm ? 40 : 70}
          src="/apps/avios-reminder/logo.png"
          width={isBelowSm ? 40 : 70}
        />
        <PageTitle className="mb-0">Avios Reminder</PageTitle>
      </div>
      <p className="font-bold">
        Effortless Rewards with Avios Reminder - Your Key to Accumulating Points
        Faster
      </p>
      <p>
        Welcome to a world where every online shopping experience becomes more
        rewarding. Introducing Avios Reminder, the browser extension designed to
        turbocharge your Avios point collection.
      </p>

      <div className="text-center">
        <LinkButton
          className="mx-auto"
          href="https://chromewebstore.google.com/detail/avios-reminder/lkcogehgaekpbdgbhalkdijfdbgliecl"
        >
          Try Avios Reminder
        </LinkButton>
      </div>

      <p className="font-bold">Key Features:</p>
      <ul>
        <li>
          <p>
            <span className="inline-block font-bold">
              Shop and Earn Automatically:
            </span>{" "}
            With Avios Reminder, you&apos;re seamlessly connected to hundreds of
            online retailers. Shop as usual, and earn Avios points without any
            extra steps.
          </p>
          <Image
            alt="An image demonstrating a notification alerting the user that they're automatically earning Avios"
            className="mx-auto"
            height={280}
            src="/apps/avios-reminder/screenshot-1.png"
            width={440}
          />
        </li>
        <li>
          <p>
            <span className="font-bold">Easily Discover Deals:</span> Looking
            for the best offers? Our extension&apos;s intuitive search feature
            lets you effortlessly find retailers with attractive Avios deals,
            making it simple to maximize your rewards.
          </p>
          <Image
            alt="An image demonstrating how to search for Avios-rewarding retailers"
            className="mx-auto"
            height={280}
            src="/apps/avios-reminder/screenshot-3.png"
            width={440}
          />
        </li>
        <li>
          <p>
            <span className="font-bold">
              Instant Alerts for Savvy Shoppers:
            </span>{" "}
            Never miss an opportunity to earn points. Get immediate
            notifications when you visit a website offering Avios, ensuring
            every shopping trip is as rewarding as possible.
          </p>
        </li>
        <Image
          alt="An image demonstrating a notification alerting the user that they can earn Avios and need to click through to the Avios website"
          className="mx-auto"
          height={280}
          src="/apps/avios-reminder/screenshot-2.png"
          width={440}
        />
      </ul>
      <p>
        Transform your online shopping into a rewarding journey. Add Avios
        Reminder to your browser today and start turning your everyday purchases
        into exciting rewards!
      </p>

      <div className="text-center">
        <LinkButton
          className="mx-auto"
          href="https://chromewebstore.google.com/detail/avios-reminder/lkcogehgaekpbdgbhalkdijfdbgliecl"
        >
          Try Avios Reminder
        </LinkButton>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>
      <h3>Are you collecting my data?</h3>

      <p>No! Your personal data is never sent to us.</p>

      <h3>Why haven&apos;t Avios appeared in my account after a purchase?</h3>

      <p>
        Please make sure that you aren&apos;t blocking cookies! These are
        important to ensure that Avios and the retailer can link the purchase to
        your account. This won&apos;t resolve missing Avios for existing
        purchases, but Avios offer the ability to claim for missing Avios{" "}
        <Link href="https://shopping.ba.com/my-account/missing-avios/">
          here
        </Link>
        .
      </p>

      <p>
        If that doesn&apos;t solve your issue for future purchases, Avios offer
        more suggestions on their{" "}
        <Link href="https://www.avios.com/en-GB/help">
          &quot;Help&quot; page
        </Link>
        .
      </p>

      <h2 id="updates">Updates</h2>

      <h3>1.6.1 - 2025-03-27</h3>

      <ul>
        <li>Migrates from BA URLs to Avios</li>
        <li>Small styling tweaks</li>
      </ul>

      <h3>1.6.0 - 2024-11-04</h3>

      <ul>
        <li>Introduces &quot;minimised&quot; tab to be less intrusive</li>
        <ul>
          <li>Position of tab is maintained across websites</li>
          <li>
            Closing a popup will prevent the tab & popup from appearing again on
            that website until the browser is closed
          </li>
        </ul>
        <li>Resolves bug with CSP Issue on Chrome 130+</li>
      </ul>

      <h3>1.5.0 - 2024-03-20</h3>

      <ul>
        <li>
          Increases cookie lifetime. Once a reward has been activated, it
          won&apos;t be re-activated for another 5 days.
        </li>
        <li>Displays multiple offes per website if they exist</li>
      </ul>

      <h3>1.4.0 - 2024-03-07</h3>

      <ul>
        <li>Introduces better retailer source</li>
        <li>Code optimisations</li>
      </ul>

      <h3>1.3.0 - 2024-01-07</h3>

      <ul>
        <li>Improves domain identification</li>
        <li>Automatically applies for Avios on websites where possible</li>
        <li>Auto-focuses search input when opening popup</li>
      </ul>

      <h3>1.2.0 - 2023-09-16</h3>

      <ul>
        <li>Code optimisations</li>
      </ul>

      <h3>1.1.5 - 2023-09-14</h3>

      <ul>
        <li>Fix issue with incorrect URL when clicking popup link</li>
      </ul>

      <h3>1.1.4 - 2023-09-11</h3>

      <ul>
        <li>Bug fix: API endpoint has changed</li>
        <li>
          Bug fix: Retailer list is fetched on installation/update, rather than
          on every page load
        </li>
      </ul>

      <h3>1.1.3 - 2023-08-15</h3>

      <ul>
        <li>Bug fix: API endpoint has changed</li>
        <li>
          Bug fix: Retailer list is fetched on installation/update, rather than
          on every page load
        </li>
      </ul>

      <h3>1.1.2 - 2022-07-28</h3>

      <ul>
        <li>Upgrade chrome extension to latest manifest version</li>
      </ul>

      <h3>1.1.0 - 2020-12-15</h3>

      <ul>
        <li>Added popup to search through existing list of retailer deals</li>
        <li>Bug fix: Fixes URL that BA changed</li>
      </ul>
    </PageLayout>
  );
}
