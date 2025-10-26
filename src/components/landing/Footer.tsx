import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface FooterLink {
  name: string;
  href: string;
}

export const Footer = () => {
  const { t } = useTranslation();
  const products = t("footer.products.items", { returnObjects: true }) as FooterLink[];
  const company = t("footer.company.items", { returnObjects: true }) as FooterLink[];
  const resources = t("footer.resources.items", { returnObjects: true }) as FooterLink[];

  const renderLink = (link: FooterLink) => {
    if (link.href.startsWith('/')) {
      return <Link to={link.href} className="hover:text-white">{link.name}</Link>;
    }
    return <a href={link.href} className="hover:text-white">{link.name}</a>;
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-2 inline-block mb-2">
              <img src="/logo.png" alt="AvePay Logo" className="h-12" />
            </div>
            <p className="text-sm mb-4 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="space-y-2 text-sm">
              <p>avepay@avenatec.it.com</p>
              <p>+244 935325003</p>
              <p>Luanda, Angola</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.products.title")}</h4>
            <ul className="space-y-2 text-sm">
              {products.map(p => <li key={p.name}>{renderLink(p)}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2 text-sm">
              {company.map(c => <li key={c.name}>{renderLink(c)}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.resources.title")}</h4>
            <ul className="space-y-2 text-sm">
              {resources.map(r => <li key={r.name}>{renderLink(r)}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>{t("footer.copyright")}</p>
            <div className="flex space-x-4 mt-4 sm:mt-0 items-center">
              <Link to="/terms" className="hover:text-white underline">Termos & Condições</Link>
              <span>PCI DSS</span>
              <span>SOC1</span>
              <span>SOC2</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-center sm:text-left">
            {t("footer.legal")}
          </p>
        </div>
      </div>
    </footer>
  );
};