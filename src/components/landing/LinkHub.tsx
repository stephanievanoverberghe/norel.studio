import { ArrowUpRight, Camera, Clock3, Globe2, Mail, Music2, Phone, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

import { BrandMark } from "@/components/brand/BrandMark";
import { getTrackedFutureSiteUrl, siteConfig, type SocialDestination, type SocialPlatform } from "@/config/site";
import type { LandingContent } from "@/content/landing";

import heroImage from "../../../public/images/norel-hero.webp";

const icons: Record<SocialPlatform, LucideIcon> = {
  instagram: Camera,
  facebook: UsersRound,
  tiktok: Music2,
};

function SocialLink({ destination }: { destination: SocialDestination }) {
  const Icon = icons[destination.platform];

  return (
    <a
      href={destination.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[3.15rem] items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] px-3.5 text-left text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.11] hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.99] focus-visible:bg-white/[0.11] sm:h-14 sm:px-4"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/8 bg-accent/28 text-white shadow-[0_4px_14px_rgba(158,0,49,0.2)] transition duration-300 group-hover:bg-accent/48 sm:size-9">
        <Icon aria-hidden="true" size={16} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.82rem] font-semibold leading-none sm:text-sm">{destination.label}</span>
        <span className="mt-1 block truncate text-[0.58rem] text-white/55 sm:text-[0.62rem]">{destination.handle}</span>
      </span>
      <ArrowUpRight aria-hidden="true" size={16} className="text-white/46 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      <span className="sr-only">(ouvre un nouvel onglet)</span>
    </a>
  );
}

export function LinkHub({ content }: { content: LandingContent }) {
  return (
    <section className="relative isolate h-dvh overflow-hidden" aria-labelledby="page-title">
      <Image
        src={heroImage}
        alt="Peinture de Norel Art représentant un visage voilé dans une palette rouge et noire"
        fill
        priority
        placeholder="blur"
        quality={85}
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(3,7,13,0.55)_0%,rgba(3,7,13,0.76)_46%,rgba(3,7,13,0.94)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(32rem_26rem_at_50%_45%,rgba(158,0,49,0.13),transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(3,7,13,0.46))]" />
      <div className="art-grain absolute inset-0 -z-10 opacity-35" />

      <div className="site-container flex h-full items-center justify-center py-2.5 sm:py-5">
        <div className="link-panel relative w-full max-w-[28rem] overflow-hidden rounded-[1.75rem] border border-white/10 px-4 py-4 text-center shadow-[0_24px_80px_rgba(0,0,0,0.44)] backdrop-blur-[22px] sm:rounded-[2rem] sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-20 size-44 rounded-full bg-accent/10 blur-3xl" />

          <BrandMark className="relative justify-center" />

          <p className="mt-2.5 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-white/62 sm:mt-3 sm:text-[0.62rem]">
            {content.eyebrow}
          </p>
          <h1 id="page-title" className="mx-auto mt-1.5 max-w-[12ch] font-heading text-[clamp(1.8rem,6.4vh,3rem)] leading-[0.92] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
            {content.title}
          </h1>
          <p className="compact-hide mx-auto mt-2 max-w-[34rem] text-[0.65rem] leading-5 text-white/62 sm:text-[0.72rem]">{content.description}</p>

          <nav className="mt-3 sm:mt-4" aria-label="Liens Norel Art">
            <ul className="grid gap-1.5 sm:gap-2">
              {siteConfig.social.map((destination) => (
                <li key={destination.platform}>
                  <SocialLink destination={destination} />
                </li>
              ))}
              <li>
                {siteConfig.futureSiteLive ? (
                  <a href={getTrackedFutureSiteUrl()} className="group flex h-[3.15rem] items-center gap-3 rounded-2xl border border-white/22 bg-white px-3.5 text-left text-background shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/92 active:translate-y-0 active:scale-[0.99] sm:h-14 sm:px-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent text-white sm:size-9">
                      <Globe2 aria-hidden="true" size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-none">{content.websiteLabel}</span>
                      <span className="mt-1 block text-[0.62rem] text-background/62">norel-art.fr</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                ) : (
                  <div className="flex h-[3.15rem] items-center gap-3 rounded-2xl border border-dashed border-white/14 bg-black/20 px-3.5 text-left text-white/62 backdrop-blur-xl sm:h-14 sm:px-4" aria-disabled="true">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/6 bg-white/[0.055] text-accent sm:size-9">
                      <Globe2 aria-hidden="true" size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-none text-white/72">{content.websiteLabel}</span>
                      <span className="mt-1 block text-[0.62rem] text-white/46">{content.websiteStatus}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-white/52">
                      <Clock3 aria-hidden="true" size={9} />
                      Bientôt
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <div className="mt-3 flex items-center justify-center gap-4 text-[0.6rem] text-white/62 sm:mt-4 sm:text-[0.66rem]">
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex min-h-6 items-center gap-1.5 transition hover:text-white">
              <Mail aria-hidden="true" size={13} />
              Email
            </a>
            <span className="h-3 w-px bg-white/18" aria-hidden="true" />
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="inline-flex min-h-6 items-center gap-1.5 transition hover:text-white">
              <Phone aria-hidden="true" size={13} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <p data-testid="link-hub-footer" className="mt-1.5 text-[0.48rem] uppercase tracking-[0.16em] text-white/34 sm:mt-2">Norel Art · Hauts-de-France</p>
        </div>
      </div>
    </section>
  );
}
