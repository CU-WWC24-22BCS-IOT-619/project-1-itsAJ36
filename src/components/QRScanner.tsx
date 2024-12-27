import React from 'react';
import { Scan } from 'lucide-react';

export function QRScanner() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
      <Scan className="w-12 h-12 text-green-600 mb-4" />
      <h2 className="text-xl font-bold text-gray-800 mb-4">Scan QR Code</h2>
      <p className="text-gray-600 text-center mb-6">
        Scan the QR code on your product to trace its journey from farm to table
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
        Open Scanner
      </button>
    </div>
  );
}