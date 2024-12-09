'use client'

import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Zap, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from '@/hooks/use-toast'

type Language = {
  id: string
  name: string
  slug: string
  logo?: string
}

export const LanguageSelector: React.FC<{ languages: Language[] }> = ({ languages }) => {
  const [firstLanguage, setFirstLanguage] = useState<string>('')
  const [secondLanguage, setSecondLanguage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const compareButtonRef = useRef<HTMLButtonElement>(null)

  const handleCompare = async () => {
    if (firstLanguage && secondLanguage) {
      setIsLoading(true)
      try {
        await router.push(`/compare/${firstLanguage}-vs-${secondLanguage}`)
      } catch (error) {
        console.error('Navigation error:', error)
        toast({
          title: 'Error',
          description: 'Failed to load comparison. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const getLanguageBySlug = (slug: string) => languages.find((lang) => lang.slug === slug)

  const handleReset = () => {
    setFirstLanguage('')
    setSecondLanguage('')
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && firstLanguage && secondLanguage) {
      handleCompare()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
            Compare Frontend Frameworks
          </CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-300">
            Select two frameworks to see a detailed comparison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <LanguageCard
                title="First Framework"
                languages={languages}
                selectedLanguage={firstLanguage}
                onSelect={setFirstLanguage}
                disabled={false}
              />
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <LanguageCard
                title="Second Framework"
                languages={languages.filter((lang) => lang.slug !== firstLanguage)}
                selectedLanguage={secondLanguage}
                onSelect={setSecondLanguage}
                disabled={!firstLanguage}
              />
            </div>
            <div className="flex justify-center space-x-4">
              {firstLanguage && secondLanguage && (
                <Button
                  ref={compareButtonRef}
                  size="lg"
                  onClick={handleCompare}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Compare {getLanguageBySlug(firstLanguage)?.name} vs{' '}
                      {getLanguageBySlug(secondLanguage)?.name}
                    </>
                  )}
                </Button>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleReset}
                      className="rounded-full"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset selections</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const LanguageCard: React.FC<{
  title: string
  languages: Language[]
  selectedLanguage: string
  onSelect: (lang: string) => void
  disabled: boolean
}> = ({ title, languages, selectedLanguage, onSelect, disabled }) => (
  <Card className="language-card w-full md:w-64 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Select onValueChange={onSelect} value={selectedLanguage} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.id} value={lang.slug}>
              <div className="flex items-center gap-2">
                {lang.logo ? (
                  <Image
                    src={lang.logo}
                    alt={lang.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                ) : (
                  <Code className="w-5 h-5 text-gray-500" />
                )}
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </CardContent>
  </Card>
)

export default LanguageSelector
