'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Book,
  Clipboard,
  Lightbulb,
  FileText,
  Settings,
  Search,
} from 'lucide-react';
import { HeaderComponent } from '@/components/seo-pages/header';
import { FooterComponent } from '@/components/seo-pages/footer';
import { ParticlesEffect } from '@/components/mouse-particles';

export function LandingPageComponent() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer'),
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer'),
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer'),
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ParticlesEffect />
      <HeaderComponent />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20 relative py-16 md:py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 lg:mb-6 text-gray-900">{t('tagline')}</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 lg:mb-16 max-w-3xl mx-auto">{t('description')}</p>
          <Link
            href="/chat"
            className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition duration-300 mb-4 lg:mb-6"
          >
            {t('startMapping')}
          </Link>
          <p className="text-sm text-gray-500 mb-16 lg:mb-24 mt-2">{t('noSignupNeeded')}</p>

          {/* Window Frame for Demo */}
          <div className="mt-16 lg:mt-24 bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto relative">
            <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-grow text-center text-sm text-gray-600">conceptmap.ai</div>
            </div>
            <div className="bg-gray-100">
              <Image 
                src="/conceptmap-demo.png" 
                alt="Concept Map Demo" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50 mb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('useCases')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Book className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseEducation')}</h3>
                <p className="text-gray-600">{t('useCaseEducationDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clipboard className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseProjectPlanning')}</h3>
                <p className="text-gray-600">{t('useCaseProjectPlanningDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Lightbulb className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseBrainstorming')}</h3>
                <p className="text-gray-600">{t('useCaseBrainstormingDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseContentCreation')}</h3>
                <p className="text-gray-600">{t('useCaseContentCreationDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseProcessMapping')}</h3>
                <p className="text-gray-600">{t('useCaseProcessMappingDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Search className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('useCaseResearch')}</h3>
                <p className="text-gray-600">{t('useCaseResearchDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t('keyFeatures')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('aiPoweredMapping')}</h3>
              <p className="text-gray-600">{t('aiPoweredMappingDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('realTimeCollaboration')}</h3>
              <p className="text-gray-600">{t('realTimeCollaborationDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('extensiveTemplateLibrary')}</h3>
              <p className="text-gray-600">{t('extensiveTemplateLibraryDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('exportIntegration')}</h3>
              <p className="text-gray-600">{t('exportIntegrationDesc')}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t('frequentlyAskedQuestions')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-100 py-20 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('readyToStartMapping')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('joinOurUserGroup')}</p>
            <Link href="/chat" className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition duration-300">
              {t('signUpNow')}
            </Link>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  )
}
