'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className=" flex lg:w-[320px]   items-center md:gap-3 rounded-full bg-zinc-900 md:px-5 md:py-3 px-1 py-1 ring-zinc-700"
    >
      <Search className="w- h-5 text-zinc-500" />
      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="md:flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 focus:ring-0 border-none rounded-full px-1"
        required
      />
    </form>
  )
}