import React, { useState } from 'react';
import { Plan } from '../types';
import { Button } from './Button';
import { Input } from './Input';
import { ArrowLeft, CreditCard } from 'lucide-react';

interface CheckoutPageProps {
  plan: Plan;
  onBack: () => void;
  onComplete: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ plan, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    petName: '',
    petBreed: '',
    cardNum: '',
    expiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validation and API calls would happen here
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回首頁
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-600 px-6 py-8 text-center">
            <h2 className="text-2xl font-bold text-white">結帳</h2>
            <p className="mt-2 text-brand-100">您選擇了：{plan.name}</p>
            <p className="text-3xl font-extrabold text-white mt-4">NT$ {plan.price} <span className="text-lg font-medium text-brand-200">/月</span></p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">聯絡資訊</h3>
              <Input 
                label="您的姓名"
                name="name"
                placeholder="王小明"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input 
                label="完整地址"
                name="address"
                placeholder="台北市信義區..."
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">寵物資料</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="寵物名稱"
                  name="petName"
                  placeholder="小白"
                  required
                  value={formData.petName}
                  onChange={handleChange}
                />
                <Input 
                  label="品種"
                  name="petBreed"
                  placeholder="黃金獵犬"
                  required
                  value={formData.petBreed}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">付款資訊</h3>
              <div className="relative">
                <Input 
                  label="信用卡號"
                  name="cardNum"
                  placeholder="0000 0000 0000 0000"
                  required
                  maxLength={19}
                  value={formData.cardNum}
                  onChange={handleChange}
                />
                <CreditCard className="absolute right-3 top-9 h-5 w-5 text-gray-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <Input 
                  label="有效期限"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                  maxLength={5}
                  value={formData.expiry}
                  onChange={handleChange}
                />
                 <Input 
                  label="CVC"
                  name="cvc"
                  placeholder="123"
                  required
                  maxLength={3}
                  type="password"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth className="h-14 text-lg">
                完成購買
              </Button>
              <p className="mt-4 text-center text-xs text-gray-500">
                點擊完成購買即表示您同意我們的服務條款與隱私權政策。
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};