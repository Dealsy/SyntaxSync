'use client'

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type LanguageContent = {
  name: string
  code: string
  explanation: string
}

type CodeComparisonProps = {
  firstLanguage: LanguageContent
  secondLanguage: LanguageContent
}

export const CodeComparison: React.FC<CodeComparisonProps> = ({
  firstLanguage,
  secondLanguage,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LanguageColumn content={firstLanguage} />
        <LanguageColumn content={secondLanguage} />
      </div>
    </div>
  )
}

const LanguageColumn: React.FC<{
  content: LanguageContent
}> = ({ content }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white">{content.name}</h3>
      <SyntaxHighlighter
        language={'javascript'}
        style={vscDarkPlus}
        className="rounded-md text-sm mb-4"
      >
        {content.code}
      </SyntaxHighlighter>
      <div className="bg-gray-700 p-4 rounded-md text-gray-300">
        <h4 className="text-lg font-semibold mb-2 text-white">Explanation</h4>
        <p>{content.explanation}</p>
      </div>
    </div>
  )
}
