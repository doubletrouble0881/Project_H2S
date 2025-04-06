import React from 'react';
import { ArrowRight, BarChart2, Briefcase, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Info from './Product'; // Importing Info page

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-3xl font-extrabold text-gray-900">OFUND</div>
          <div className="space-x-6 flex items-center">
            
            <button className="px-5 py-2 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Mutual Fund:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
                The New FD
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Revolutionize your investments with our AI-powered financial agent.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
              <button
                onClick={() => navigate("/info")}
                className="px-6 py-3 text-lg font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8 text-gray-800" />}
              title="Data-Driven Insights"
              description="Make informed decisions with our advanced analytics."
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 text-gray-800" />}
              title="Personalized Portfolio"
              description="Tailored investment strategies to meet your goals."
            />
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-gray-800" />}
              title="Maximize Returns"
              description="Optimize your investments for better financial growth."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 OFUND. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
