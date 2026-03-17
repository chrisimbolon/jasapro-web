import { useTranslation } from "react-i18next"

export default function Company() {
  const { t } = useTranslation()

  const approachItems = t("company.approach.items", {
    returnObjects: true,
  }) as string[]

  const principleItems = t("company.principles.items", {
    returnObjects: true,
  }) as any[]

  const members = t("company.leadership.members", {
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


        {/* Company Profile Download */}
        <section className="py-12 border-t border-neutral-200/60">
          <div className="max-w-2xl">

            <h3 className="text-lg font-medium mb-3">
              {t("company.profile.title")}
            </h3>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {t("company.profile.description")}
            </p>

            <a
              href="/documents/company-profile-ID.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 px-5 py-3 hover:border-neutral-900 transition-colors"
            >
              ↓ {t("company.profile.download")}
            </a>

          </div>
        </section>


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


        {/* Leadership */}
        <section className="py-24 border-t border-neutral-200/60">

          <div className="max-w-3xl mb-16">

            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              {t("company.leadership.title")}
            </h2>

            <p className="text-neutral-600 leading-relaxed">
              {t("company.leadership.description")}
            </p>

          </div>


          {/* Leadership Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">

            {members.map((member, i) => {

              const imageName =
                member.name === "Abdul Halik Nasution"
                  ? "A-Halik.jpeg"
                  : member.name === "Prasetyo Hardi"
                  ? "Hardy.jpeg"
                  : member.name === "Christyan Simbolon"
                  ? "Chris.jpeg"
                  : "Siswanto.jpeg"

              return (
                <div key={i} className="group">

                  <div className="mb-6 overflow-hidden rounded-sm">

                    <img
                      src={`/images/founders/${imageName}`}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />

                  </div>

                  <h3 className="font-medium text-lg">
                    {member.name}
                  </h3>

                  <p className="text-sm text-neutral-500 mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>

                </div>
              )
            })}

          </div>

        </section>

      </div>
    </main>
  )
}