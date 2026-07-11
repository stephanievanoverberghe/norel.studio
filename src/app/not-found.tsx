import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/brand/BrandMark";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <BrandMark />
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Erreur 404</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold text-white">Cette page n’existe pas.</h1>
        <Link href="/" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white">
          <ArrowLeft aria-hidden="true" size={16} />
          Revenir à l’accueil
        </Link>
      </div>
    </main>
  );
}
