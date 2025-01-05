import WhoAreWe from "@/src/components/modules/about/WhoAreWe";
import Faq from "@/src/components/modules/home/Faq";
import Landing from "@/src/components/modules/home/Landing";
import Services from "@/src/components/modules/services/Services";
import { title } from "@/src/components/primitives";

export default function HomePage() {
  return (
    <div>
      <h1 className={title()}>
        <Landing />
      </h1>
      <WhoAreWe />
      <Services />
      <Faq />
    </div>
  );
}
