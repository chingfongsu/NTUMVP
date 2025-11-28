import React, { useState } from 'react';
import { AppView, Plan } from './types';
import { LandingPage } from './components/LandingPage';
import { CheckoutPage } from './components/CheckoutPage';
import { ConfirmationPage } from './components/ConfirmationPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setCurrentView(AppView.CHECKOUT);
    window.scrollTo(0, 0);
  };

  const handleBackToLanding = () => {
    setSelectedPlan(null);
    setCurrentView(AppView.LANDING);
    window.scrollTo(0, 0);
  };

  const handleCompletePurchase = () => {
    setCurrentView(AppView.CONFIRMATION);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setSelectedPlan(null);
    setCurrentView(AppView.LANDING);
    window.scrollTo(0, 0);
  };

  return (
    <div className="antialiased text-gray-900">
      {currentView === AppView.LANDING && (
        <LandingPage onSelectPlan={handleSelectPlan} />
      )}
      
      {currentView === AppView.CHECKOUT && selectedPlan && (
        <CheckoutPage 
          plan={selectedPlan} 
          onBack={handleBackToLanding}
          onComplete={handleCompletePurchase}
        />
      )}

      {currentView === AppView.CONFIRMATION && (
        <ConfirmationPage onGoHome={handleGoHome} />
      )}
    </div>
  );
};

export default App;