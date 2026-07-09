export const typography = {
  hero: {
    badge: `
      text-sm
      font-medium
      tracking-tight
      text-primary
    `,

    title: `
      text-4xl
      font-extrabold
      leading-[1.05]
      tracking-[-0.04em]
      text-foreground

      sm:text-5xl
      md:text-6xl
      lg:text-7xl
    `,

    description: `
      mt-8
      max-w-2xl
      text-base
      leading-7
      text-muted-foreground

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
      text-primary
    `,

    title: `
      mt-4
      text-3xl
      font-bold
      leading-tight
      tracking-[-0.03em]
      text-foreground

      sm:text-4xl
      lg:text-5xl
    `,

    description: `
      mt-6
      max-w-3xl
      text-base
      leading-7
      text-muted-foreground

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
      text-foreground

      sm:text-xl
    `,

    description: `
      mt-3
      text-sm
      leading-6
      text-muted-foreground

      sm:text-base
      sm:leading-7
    `,
  },
} as const;
