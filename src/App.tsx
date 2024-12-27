import React from 'react';
import { QRScanner } from './components/QRScanner';
import { ProductCard } from './components/ProductCard';
import { TraceabilityTimeline } from './components/TraceabilityTimeline';
import { Sprout } from 'lucide-react';

// Sample data
const sampleProduct = {
  id: '1',
  name: 'Organic Tomatoes',
  farmName: 'Green Valley Farm',
  farmLocation: 'California, USA',
  harvestDate: '2024-03-15',
  certifications: ['Organic', 'Non-GMO', 'Sustainable'],
  qrCode: 'sample-qr',
  processingSteps: [
    {
      id: '1',
      stage: 'Harvest',
      location: 'Green Valley Farm',
      date: '2024-03-15',
      description: 'Hand-picked at peak ripeness',
      temperature: 22
    },
    {
      id: '2',
      stage: 'Transport',
      location: 'En Route',
      date: '2024-03-16',
      description: 'Temperature-controlled transport to processing facility',
      temperature: 4
    },
    {
      id: '3',
      stage: 'Processing',
      location: 'Fresh Foods Facility',
      date: '2024-03-17',
      description: 'Quality check and packaging',
      temperature: 3
    },
    {
      id: '4',
      stage: 'Retail',
      location: 'Local Market',
      date: '2024-03-18',
      description: 'Available for purchase',
      temperature: 4
    }
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Sprout className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Farm-to-Table Tracker</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <QRScanner />
            <div className="mt-8">
              <ProductCard product={sampleProduct} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Product Journey</h2>
            <TraceabilityTimeline steps={sampleProduct.processingSteps} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;