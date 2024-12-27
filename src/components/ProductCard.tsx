import React from 'react';
import { Leaf, MapPin, Calendar, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-green-700">{product.name}</h2>
        <Leaf className="text-green-500 w-6 h-6" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-500 w-5 h-5" />
          <span className="text-gray-700">{product.farmName} - {product.farmLocation}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="text-gray-500 w-5 h-5" />
          <span className="text-gray-700">Harvested: {product.harvestDate}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {product.certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <Award className="w-4 h-4" />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}