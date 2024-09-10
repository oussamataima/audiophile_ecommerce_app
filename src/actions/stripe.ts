import { CartItem } from "@/types";

export async function Checkout(data: CartItem[]) {
  try {
    const res = await fetch("/api/stripe", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
      const { url } = res;
      window.open(url, "_self");
      console.log(url)
  } catch (error) {
    throw error;
  }
}
