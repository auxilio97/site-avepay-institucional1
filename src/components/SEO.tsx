import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, children }) => {
  const { i18n } = useTranslation();
  const siteName = "AvePay - Plataforma Global de Pagamentos e Finanças";
  const defaultDescription = "Aceite pagamentos em múltiplas moedas e gerencie suas finanças em uma única plataforma integrada.";
  const defaultKeywords = "AvePay, pagamentos, finanças, API, gateway de pagamento, Angola, Kwanza, cartões internacionais";
  const siteUrl = "https://avepay.avenatec.it.com";
  const logoUrl = `${siteUrl}/logo.png`;

  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const currentPath = window.location.pathname;
  const canonicalUrl = `${siteUrl}${currentPath}`;

  const supportedLanguages = ["pt", "en", "fr", "es", "zh", "ar"];

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language,
        dir: document.documentElement.dir,
      }}
    >
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={logoUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={logoUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang links for multilingual SEO */}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      {supportedLanguages.map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={canonicalUrl} />
      ))}

      {children}
    </Helmet>
  );
};