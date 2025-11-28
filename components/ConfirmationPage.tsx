import React from 'react';
import { Button } from './Button';
import { CheckCircle, Home } from 'lucide-react';

interface ConfirmationPageProps {
  onGoHome: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen bg-brand-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-105 duration-300">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
          <CheckCircle className="h-14 w-14 text-green-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          感謝您的訂閱！
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          您的毛孩將會愛上我們的服務。<br/>
          我們已發送確認信至您的電子郵件。
        </p>
        <div className="space-y-4">
           <Button onClick={onGoHome} fullWidth>
            <Home className="mr-2 h-5 w-5" />
            返回首頁
          </Button>
        </div>
      </div>
    </div>
  );
};