'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Award, Download, Share2, Lock, CheckCircle, Calendar, TrendingUp } from 'lucide-react'

interface Certificate {
  id: string
  title: string
  description: string
  courseId: string
  issueDate: string
  expiryDate?: string
  credentialId: string
  verificationUrl: string
  skills: string[]
  earned: boolean
  progress?: number
}

export default function CertificationsPage() {
  const { user } = useUser()
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Master the core concepts of JavaScript programming',
      courseId: 'javascript',
      issueDate: '2024-01-15',
      credentialId: 'CERT-JS-001-2024',
      verificationUrl: 'https://verify.flavertown.com/CERT-JS-001-2024',
      skills: ['Variables', 'Functions', 'Arrays', 'Objects', 'ES6'],
      earned: true
    },
    {
      id: '2',
      title: 'React Developer',
      description: 'Build modern web applications with React',
      courseId: 'react',
      issueDate: '',
      credentialId: '',
      verificationUrl: '',
      skills: ['Components', 'Hooks', 'State Management', 'Routing'],
      earned: false,
      progress: 65
    },
    {
      id: '3',
      title: 'Full-Stack Web Development',
      description: 'Complete certification covering frontend and backend',
      courseId: 'fullstack',
      issueDate: '',
      credentialId: '',
      verificationUrl: '',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Databases', 'Deployment'],
      earned: false,
      progress: 40
    },
    {
      id: '4',
      title: 'Python Programming',
      description: 'Comprehensive Python programming certification',
      courseId: 'python',
      issueDate: '2024-02-20',
      credentialId: 'CERT-PY-002-2024',
      verificationUrl: 'https://verify.flavertown.com/CERT-PY-002-2024',
      skills: ['Python Basics', 'OOP', 'Data Structures', 'File Handling'],
      earned: true
    },
    {
      id: '5',
      title: 'Advanced Algorithms',
      description: 'Master data structures and algorithms',
      courseId: 'algorithms',
      issueDate: '',
      credentialId: '',
      verificationUrl: '',
      skills: ['Sorting', 'Searching', 'Trees', 'Graphs', 'Dynamic Programming'],
      earned: false,
      progress: 25
    },
    {
      id: '6',
      title: 'Cloud Computing (AWS)',
      description: 'AWS Cloud Practitioner level certification',
      courseId: 'aws',
      issueDate: '',
      credentialId: '',
      verificationUrl: '',
      skills: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'Security'],
      earned: false,
      progress: 15
    }
  ]

  const earnedCerts = certificates.filter(c => c.earned)
  const inProgressCerts = certificates.filter(c => !c.earned)

  const downloadCertificate = (cert: Certificate) => {
    // In real app, generate PDF
    alert(`Downloading certificate: ${cert.title}`)
  }

  const shareCertificate = (cert: Certificate) => {
    if (navigator.share) {
      navigator.share({
        title: cert.title,
        text: `I earned ${cert.title} certification on Flaver Town!`,
        url: cert.verificationUrl
      })
    } else {
      navigator.clipboard.writeText(cert.verificationUrl)
      alert('Certificate link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Certifications</h1>
              <p className="text-yellow-100">Showcase your achievements and skills</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">{earnedCerts.length}</div>
              <div className="text-yellow-100">Earned</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{earnedCerts.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certificates Earned</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{inProgressCerts.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.round((earnedCerts.length / certificates.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Earned Certificates */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Earned Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earnedCerts.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <Award className="w-6 h-6" />
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Issued: {new Date(cert.issueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadCertificate(cert)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button
                      onClick={() => shareCertificate(cert)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCerts.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-gray-500" />
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cert.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{cert.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
