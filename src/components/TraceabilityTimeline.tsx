import React from 'react';
import { ProcessingStep } from '../types';
import { Clock, Truck, Factory, Store } from 'lucide-react';

interface TimelineProps {
  steps: ProcessingStep[];
}

export function TraceabilityTimeline({ steps }: TimelineProps) {
  const getIcon = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'harvest': return Clock;
      case 'transport': return Truck;
      case 'processing': return Factory;
      case 'retail': return Store;
      default: return Clock;
    }
  };

  return (
    <div className="py-8">
      <div className="relative">
        {steps.map((step, index) => {
          const Icon = getIcon(step.stage);
          return (
            <div key={step.id} className="mb-8 flex items-center">
              <div className="flex flex-col items-center mr-4">
                <div className="bg-green-500 rounded-full p-2">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="h-full w-0.5 bg-green-200 my-2" />
                )}
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 flex-1">
                <h3 className="font-bold text-lg text-green-700">{step.stage}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <p>{step.location}</p>
                  <p>{step.date}</p>
                  {step.temperature && (
                    <p>Temperature: {step.temperature}°C</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}