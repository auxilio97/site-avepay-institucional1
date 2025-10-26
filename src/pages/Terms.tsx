import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  const servicesList = t("terms.services_list", { returnObjects: true }) as string[];

  return (
    <>
      <Header />
      <main className="bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <article className="prose dark:prose-invert max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <h2 dangerouslySetInnerHTML={{ __html: t("terms.title") }} />
            <p>
              <strong dangerouslySetInnerHTML={{ __html: t("terms.last_updated") }} />
            </p>

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.definitions_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.definitions_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.definitions_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.definitions_p3") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.definitions_p4") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.definitions_p5") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.acceptance_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.acceptance_p1") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.eligibility_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.eligibility_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.eligibility_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.eligibility_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.services_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.services_p1") }} />
            <ul>
              {servicesList.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t("terms.services_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.services_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.fees_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fees_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fees_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fees_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.currency_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.currency_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.currency_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.currency_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.security_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.security_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.security_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.security_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.liability_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.liability_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.liability_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.liability_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.fraud_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fraud_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fraud_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.fraud_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.termination_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.termination_p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.termination_p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.termination_p3") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.changes_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.changes_p1") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.force_majeure_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.force_majeure_p1") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.ip_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.ip_p1") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.law_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.law_p1") }} />

            <h4 dangerouslySetInnerHTML={{ __html: t("terms.contact_title") }} />
            <p dangerouslySetInnerHTML={{ __html: t("terms.contact_p1") }} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;