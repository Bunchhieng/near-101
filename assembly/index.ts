import {
  PersistentUnorderedMap, u128, context
} from "near-sdk-as";
import { listedProducts, Product } from "./model";

export const products = new PersistentUnorderedMap<string, string>("PRODUCTS");

export function setProduct(product: Product): void {
  let storedProduct = listedProducts.get(product.id);
  if (storedProduct !== null) {
    throw new Error(`Product ${product.id} already exists`);
  }
  listedProducts.set(product.id, Product.fromPayload(product));
}

export function getProduct(id: string): Product | null {
  return listedProducts.get(id);
}

export function getProducts(): Product[] {
  return listedProducts.values();
}
