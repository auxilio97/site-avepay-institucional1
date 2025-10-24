import { CheckCircle, PlusCircle } from "lucide-react";
import { PythonIcon } from "@/components/icons/PythonIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { NodeJsIcon } from "@/components/icons/NodeJsIcon";
import { JavaIcon } from "@/components/icons/JavaIcon";
import { CSharpIcon } from "@/components/icons/CSharpIcon";
import { useTranslation } from "react-i18next";

export const Integration = () => {
  const { t } = useTranslation();
  const languages = [
    { name: "Python", icon: <PythonIcon className="h-8 w-8 mb-2" /> },
    { name: "PHP", icon: <PhpIcon className="h-8 w-8 mb-2" /> },
    { name: "Node.js", icon: <NodeJsIcon className="h-8 w-8 mb-2" /> },
    { name: "Java", icon: <JavaIcon className="h-8 w-8 mb-2" /> },
    { name: "C#", icon: <CSharpIcon className="h-8 w-8 mb-2" /> },
    { name: t("integration.more"), icon: <PlusCircle className="h-8 w-8 mb-2" /> },
  ];
  const features = t("integration.features", { returnObjects: true }) as string[];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("integration.title")}</h2>
            <p className="text-slate-300 text-lg">
              {t("integration.subtitle")}
            </p>
          </div>
          <div className="bg-slate-950/30 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-white">{t("integration.docs_title")}</h3>
            <div className="space-y-3 mb-8">
              {features.map(feature => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {languages.map(lang => (
                <div key={lang.name} className="bg-slate-800/50 p-4 rounded-md flex flex-col items-center justify-center hover:bg-slate-700/50 transition-colors">
                  {lang.icon}
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};