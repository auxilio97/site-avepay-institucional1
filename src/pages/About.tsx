import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const About = () => {
  const { t } = useTranslation();
  const valuesList = t("about.values_list", { returnObjects: true }) as string[];
  const servicesList = t("about.services_list", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("about.title").replace(/<[^>]*>?/gm, '')}
        description={t("about.mission_text")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <article className="prose dark:prose-invert max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <h2 dangerouslySetInnerHTML={{ __html: t("about.title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.p3") }} />

            <h3 dangerouslySetInnerHTML={{ __html: t("about.mission_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.mission_text") }} />

            <h3 dangerouslySetInnerHTML={{ __html: t("about.vision_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.vision_text") }} />

            <h3 dangerouslySetInnerHTML={{ __html: t("about.values_title") }} />
            <ul>
              {valuesList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <h3 dangerouslySetInnerHTML={{ __html: t("about.services_title") }} />
            <ul>
              {servicesList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <h3 dangerouslySetInnerHTML={{ __html: t("about.who_we_are_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.who_we_are_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.who_we_are_p2") }} />

            <h3 dangerouslySetInnerHTML={{ __html: t("about.contact_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.contact_text") }} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;