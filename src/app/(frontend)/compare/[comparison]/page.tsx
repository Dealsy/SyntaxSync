import { fetchDoc } from '@/api/fetchDoc'
import { ComparisonView } from '@/components/ComparisonView/ComparisonView'
import React from 'react'

export default async function ComparisonPage(props: { params: Promise<{ comparison: string }> }) {
  const params = await props.params
  const data = await params.comparison.split('-vs-')

  const [firstLang, secondLang] = data

  const comparisons = await fetchDoc({
    collection: 'comparisons',
    where: {
      'languages.slug': {
        in: [firstLang, secondLang],
      },
    },
    draft: false,
  })

  // Find the comparison that has exactly these two languages
  const exactMatch = comparisons.find((comparison) => {
    const slugs = comparison.languages.map((lang) => lang.slug)
    return slugs.includes(firstLang) && slugs.includes(secondLang) && slugs.length === 2
  })

  if (!exactMatch) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          No comparison found for {firstLang} vs {secondLang}
        </h1>
      </div>
    )
  }

  return (
    <div className="comparison-page">
      <ComparisonView
        firstLanguage={firstLang}
        secondLanguage={secondLang}
        comparisons={exactMatch.sections}
      />
    </div>
  )
}
