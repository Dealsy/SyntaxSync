import React from 'react'
import { fetchDoc } from '@/api/fetchDoc'
import { LanguageSelector } from '@/components/LanguageSelector/language-selector'

export default async function Home() {
  const languages = await fetchDoc({
    collection: 'languages',
    draft: false,
  })

  return (
    <div className="home-page">
      <LanguageSelector languages={languages} />
    </div>
  )
}
