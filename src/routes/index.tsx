import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSplitLayout } from "@/components/HeroSplitLayout";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronForge — Premium Construction & Engineering" },
      {
        name: "description",
        content:
          "IronForge Construction Co. builds iconic skylines, bridges and landmarks across four continents. 32 years. 480+ projects. Get a quote.",
      },
      { property: "og:title", content: "IronForge — Premium Construction & Engineering" },
      {
        property: "og:description",
        content: "Forging skylines since 1992. Steel, glass and vision — built to outlast generations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <HeroSplitLayout />
        <ProjectsGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
