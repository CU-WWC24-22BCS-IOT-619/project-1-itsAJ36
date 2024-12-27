export interface Product {
  id: string;
  name: string;
  farmName: string;
  farmLocation: string;
  harvestDate: string;
  processingSteps: ProcessingStep[];
  certifications: string[];
  qrCode: string;
}

export interface ProcessingStep {
  id: string;
  stage: string;
  location: string;
  date: string;
  description: string;
  temperature?: number;
}