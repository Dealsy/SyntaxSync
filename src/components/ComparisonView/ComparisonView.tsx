'use client'

import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { CodeComparison } from '../CodeComparison/CodeComparison'

// Helper function to extract text from Payload's rich text structure
const extractText = (richTextObj: any): string => {
  if (!richTextObj || !richTextObj.root || !richTextObj.root.children) return ''

  return richTextObj.root.children
    .map((block: any) => block.children?.map((child: any) => child.text).join(''))
    .join('\n')
}

type ComparisonSection = {
  type: 'code' | 'feature'
  title: string
  description: any
  firstLanguageContent: {
    code?: string
    explanation?: any
  }
  secondLanguageContent: {
    code?: string
    explanation?: any
  }
}

type ComparisonViewProps = {
  firstLanguage: string
  secondLanguage: string
  comparisons: ComparisonSection[]
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  firstLanguage,
  secondLanguage,
  comparisons,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {firstLanguage} vs {secondLanguage}
        </h1>

        <p className="text-xl text-center mb-12 text-gray-300">
          Master {secondLanguage} by comparing it with {firstLanguage}
        </p>

        {comparisons.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-white flex items-center">
              <span className="mr-2">{section.title}</span>
            </h2>
            <div className="mb-6 text-gray-300 prose prose-invert max-w-none">
              {extractText(section.description)}
            </div>

            {section.type === 'code' && (
              <CodeComparison
                firstLanguage={{
                  name: firstLanguage,
                  code: section.firstLanguageContent?.code || '',
                  explanation: extractText(section.firstLanguageContent?.explanation),
                }}
                secondLanguage={{
                  name: secondLanguage,
                  code: section.secondLanguageContent?.code || '',
                  explanation: extractText(section.secondLanguageContent?.explanation),
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
