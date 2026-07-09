export const typography = {
  hero: {
    badge: "text-sm font-medium tracking-tight text-[#4F46C8]",

    title: `
      text-4xl
      font-extrabold
      leading-[1.05]
      tracking-[-0.04em]
      text-[#1F1F1F]

      sm:text-5xl
      md:text-6xl
      lg:text-7xl
    `,

    description: `
      mt-8
      max-w-2xl
      text-base
      leading-7
      text-[#6B7280]

      sm:text-lg
      sm:leading-8

      lg:max-w-3xl
    `,
  },

  section: {
    badge: `
      text-sm
      font-semibold
      uppercase
      tracking-[0.18em]
      text-[#4F46C8]
    `,

    title: `
      mt-4
      text-3xl
      font-bold
      leading-tight
      tracking-[-0.03em]
      text-[#1F1F1F]

      sm:text-4xl
      lg:text-5xl
    `,

    description: `
      mt-6
      max-w-3xl
      text-base
      leading-7
      text-[#6B7280]

      sm:text-lg
      sm:leading-8
    `,
  },

  card: {
    title: `
      text-lg
      font-semibold
      leading-7
      tracking-tight
      text-[#1F1F1F]

      sm:text-xl
    `,

    description: `
      mt-3
      text-sm
      leading-6
      text-[#6B7280]

      sm:text-base
      sm:leading-7
    `,
  },
} as const;
