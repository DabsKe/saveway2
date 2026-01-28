import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-blue-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Trusted Logistics
            <span className="text-blue-400"> Solutions</span>
            <br />
            Across East Africa
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
            We deliver efficient, safe, and reliable transport solutions
            tailored to your business needs. Join us on the journey towards
            better trade and supply chain efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/50 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">10+</h3>
              <p className="text-slate-200">Years of Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">500+</h3>
              <p className="text-slate-200">Successful Deliveries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">24/7</h3>
              <p className="text-slate-200">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
