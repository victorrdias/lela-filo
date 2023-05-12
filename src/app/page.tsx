"use client";

import Hero from "@/components/hero/Hero";
import Subhero from "@/components/subhero/Subhero";
import { Main } from "@/layout/Main";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Subhero />
    </Main>
  );
}
