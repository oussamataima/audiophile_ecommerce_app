export type Product = {
    id: number,
    slug: string,
    name: string,
    image: string,
    category: string,
    isNew: boolean,
    price: number,
    description: string,
    features: string,
    gallery: {
      mobile: string,
      tablet: string,
      desktop: string
    }
    includes: {
      quantity: number,
      item: string
    }[]
    others: {
      slug: string,
      name: string,
      image: {
        mobile: string,
        tablet: string,
      }
    }[]
  };
