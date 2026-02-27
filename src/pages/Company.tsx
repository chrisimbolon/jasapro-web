import { useTranslation } from "react-i18next"

export default function Company() {
  const { t } = useTranslation()

  const approachItems = t("company.approach.items", {
    returnObjects: true,
  }) as string[]

  const principleItems = t("company.principles.items", {
    returnObjects: true,
  }) as any[]

  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
            {t("company.eyebrow")}
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight tracking-tight mb-6">
            {t("company.titleLine1")}
            <br />
            {t("company.titleLine2")}
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed">
            {t("company.description")}
          </p>
        </div>

        {/* Philosophy */}
        <section className="grid md:grid-cols-2 gap-20 py-20 border-t border-neutral-200/60">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {t("company.philosophy.title")}
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              {t("company.philosophy.intro")}
            </p>
          </div>

          <div className="text-neutral-600 leading-relaxed space-y-6">
            <p>{t("company.philosophy.paragraph1")}</p>
            <p>{t("company.philosophy.paragraph2")}</p>
          </div>
        </section>

        {/* Approach */}
        <section className="grid md:grid-cols-2 gap-20 py-20 border-t border-neutral-200/60">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {t("company.approach.title")}
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              {t("company.approach.intro")}
            </p>
          </div>

          <div className="text-neutral-500 text-sm space-y-4 border-l border-neutral-200 pl-8">
            {approachItems.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 border-t border-neutral-200/60">
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            {t("company.principles.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {principleItems.map((item, i) => (
              <div key={i}>
                <h3 className="font-medium mb-4">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}