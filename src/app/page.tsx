import Hero from "../app/(components)/Hero";
import Programs from "../app/(components)/Programs";
import CTA from "../app/(components)/CTA";
import Services from "./(components)/Services";
import Results from "./(components)/Results";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Programs />
      <Services />
      <Results />
      <CTA />
    </main>
  );
}
