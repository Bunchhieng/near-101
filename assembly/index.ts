import {
  PersistentUnorderedMap, u128, context, ContractPromiseBatch
} from "near-sdk-as";
import { listedProducts, Product } from "./model";

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

export function buyProduct(productId: string): void {
  const product = getProduct(productId);
  if (product === null) {
    throw new Error(`Product ${productId} does not exist`);
  }
  if (product.price.toString() != context.attachedDeposit.toString()) {
    throw new Error(`Product ${productId} price is ${product.price.toString()} but deposit is ${context.attachedDeposit.toString()}`);
  }
  ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit);
  product.incrementSoldAmount();
  listedProducts.set(productId, product);
}
