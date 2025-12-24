import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">
            Your <span className="text-gradient">Achievements</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Track your learning milestones and unlock rewards
          </p>
          
          <div className="card-gradient p-12 rounded-2xl border border-gray-700 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">Coming Soon!</h2>
            <p className="text-gray-400">
              Achievement system is being developed.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
