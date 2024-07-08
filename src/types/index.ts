export type Product = {
    id: number,
    slug: string,
    name: string,
    image: string,
    category: string,
    categoryImage: {
      mobile: string,
      tablet: string,
      desktop: string
    },
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
  };
