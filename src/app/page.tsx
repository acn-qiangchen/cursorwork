'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [imageError, setImageError] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            The AI-First Code Editor
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Write better code faster with AI-powered features. Experience the future of coding today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Download Now
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-purple-500 transition-colors">
              Try Online
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative w-full max-w-6xl"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800">
            {imageError ? (
              // Fallback UI when image fails to load
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">👨‍💻</div>
                  <div className="text-xl font-semibold text-gray-300">
                    AI-Powered Code Editor
                  </div>
                  <p className="text-gray-400 mt-2">
                    Intelligent code completion and refactoring
                  </p>
                </div>
              </div>
            ) : (
              <Image
                src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Cursor+Editor"
                alt="Cursor Editor Preview"
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'AI Code Completion',
    description: 'Get intelligent code suggestions as you type, powered by advanced AI models.',
  },
  {
    title: 'Smart Refactoring',
    description: 'Automatically improve your code structure with AI-powered refactoring suggestions.',
  },
  {
    title: 'Natural Language Commands',
    description: 'Transform your ideas into code using simple English commands.',
  },
]
