import Hero from "../app/(components)/Hero";
import Programs from "../app/(components)/Programs";
import Testimonials from "../app/(components)/Testimonials";
import CTA from "../app/(components)/CTA";
import Services from "./(components)/Services";
import Results from "./(components)/Results";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Programs />
      <Testimonials />
      <Services />
      <Results />
      <CTA />
    </main>
  );
}
