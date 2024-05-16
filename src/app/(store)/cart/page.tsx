'use client'
import { useCart } from '@/contexts/cart-context'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { items } = useCart()
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((product) => {
        return (
          <Link
            key={product.productId}
            href={`/product/${product.slug}`}
            className="group items-center flex-col rounded-lg bg-zinc-900 flex justify-center max-w-[45%]  "
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={480}
              height={480}
              alt=""
              quality={100}
            />
            <div className="md:h-12 h-8 z-20 flex my-2 items-center gap-2 max-w-[280px] w-[90%] justify-between rounded-full border-2 border-zinc-500 bg-black/60 p-1 ">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
