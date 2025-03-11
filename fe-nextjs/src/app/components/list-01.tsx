"use client";
import React, { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Laptop, Smartphone, Headphones, Tv } from "lucide-react";
import { useAuth } from "@/app/AuthProvider";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  imageUrl: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const categoryIcons: Record<string, JSX.Element> = {
  "d94f2730-e9cf-44e8-8e7a-f1fa129dc463": (
    <Laptop className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
  ),
  "a83d9782-621f-4da3-8aca-05ad7d461213": (
    <Smartphone className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
  ),
  "eb17be2b-6809-4811-83a6-173ede6c46d0": (
    <Headphones className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
  ),
  "ac85a058-48b1-44b4-8883-8c7e99e2d5a6": (
    <Tv className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
  ),
};

interface ListProductProps {
  arrayProduct: ProductItem[];
}
const MockProducts = [
  {
    id: "4001e44e-a6a7-4fcd-94af-7f151f0148fe",
    name: "Ali Estrada",
    description: "Rerum commodi animi",
    price: 782,
    stock: 79,
    imageUrl: null,
    categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
    status: "ACTIVE",
    createdAt: "2025-03-01T06:37:45.232Z",
    updatedAt: "2025-03-01T06:37:45.232Z",
  },
  {
    id: "89f55501-2f9c-4fd4-b757-98267bc05107",
    name: "Caroline Davis",
    description: "Quisquam labore qui",
    price: 467,
    stock: 48,
    imageUrl: null,
    categoryId: "79b1224f-6a3c-4069-a171-9b6b56730f31",
    status: "INACTIVE",
    createdAt: "2024-04-28T14:13:40.104Z",
    updatedAt: "2024-04-28T14:13:40.104Z",
  },
  {
    id: "172f7d4f-9652-4abe-a834-4d207270221e",
    name: "Cameron Williamson",
    description: "Est corporis et",
    price: 285,
    stock: 95,
    imageUrl: null,
    categoryId: "9d08796a-b13e-4165-a566-073be6089641",
    status: "ACTIVE",
    createdAt: "2024-05-08T16:03:04.476Z",
    updatedAt: "2024-05-08T16:03:04.476Z",
  },
  {
    id: "9f46119a-e79f-458c-9900-a3403776d9f7",
    name: "Jamie Wolfe",
    description: "Et et voluptatem",
    price: 782,
    stock: 62,
    imageUrl: null,
    categoryId: "6292c443-f70a-4429-9533-a66406700f64",
    status: "PENDING",
    createdAt: "2024-07-20T14:34:28.562Z",
    updatedAt: "2024-07-20T14:34:28.562Z",
  },
  {
    id: "655f9391-0707-4b75-b8cf-65566534f79d",
    name: "Raymond Wagner",
    description: "Quia doloribus molestiae",
    price: 916,
    stock: 84,
    imageUrl: null,
    categoryId: "71533583-875d-4bb1-8a94-1b333725967e",
    status: "ACTIVE",
    createdAt: "2024-09-23T19:33:53.717Z",
    updatedAt: "2024-09-23T19:33:53.717Z",
  },
];
export default function ListProduct({ arrayProduct }: ListProductProps) {
  const list = arrayProduct.slice(0, 5);
  const [products, setProducts] = useState<ProductItem[]>(list ?? MockProducts);

  useEffect(() => {
    setProducts(arrayProduct.slice(0, 5));
  }, [arrayProduct]);

  // Tính tổng giá trị sản phẩm
  const totalBalance = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Total Value</p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          ${totalBalance.toFixed(2)}
        </h1>
      </div>

      {/* Product List */}
      <div className="p-3">
        <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          Your Products
        </h2>

        <div className="space-y-1">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="group flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                    {categoryIcons[product.categoryId] || (
                      <Tv className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center py-2">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
