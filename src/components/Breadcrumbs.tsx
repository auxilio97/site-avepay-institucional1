import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';
import { useTranslation } from 'react-i18next';

interface Breadcrumb {
  name: string;
  path: string;
}

const pageTitles: { [key: string]: string } = {
  '/about': 'about.title',
  '/contact': 'contact.title',
  '/terms': 'terms.title',
  '/product': 'header.product',
  '/services': 'header.services',
  '/solutions': 'header.solutions',
  '/how-it-works': 'header.howItWorks',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs: Breadcrumb[] = [
    { name: 'Início', path: '/' },
  ];

  pathnames.forEach((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const titleKey = pageTitles[to];
    if (titleKey) {
      breadcrumbs.push({ name: t(titleKey).replace(/<[^>]*>?/gm, ''), path: to });
    }
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': `https://avepay.avenatec.it.com${crumb.path}`,
    })),
  };

  return (
    <>
      <SEO>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </SEO>
      <nav aria-label="breadcrumb" className="bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <ol className="flex items-center space-x-2 py-3 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-semibold text-foreground">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="hover:underline hover:text-primary">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};