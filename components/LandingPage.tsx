import React, { useState } from 'react';
import { Plan } from '../types';
import { Button } from './Button';
import { Heart, Activity, Phone, Check, Star, Quote } from 'lucide-react';

interface LandingPageProps {
  onSelectPlan: (plan: Plan) => void;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: '基本方案',
    price: 699,
    features: ['每月一次線上諮詢', '年度疫苗接種提醒', '基本健康記錄 App', '寵物相關電子報'],
  },
  {
    id: 'premium',
    name: '尊榮方案',
    price: 1299,
    features: ['包含所有基本方案功能', '每月一次到府健檢', '24/7 緊急獸醫熱線', '專屬營養師飲食規劃', '季度寄生蟲預防藥配送'],
    recommended: true,
  }
];

const testimonials = [
  {
    id: 1,
    name: '林雅婷',
    role: '布丁 (黃金獵犬) 的主人',
    content: '自從訂閱了尊榮方案，布丁的健康狀況一直很穩定。每月的到府健檢真的幫了大忙，不用每次都大費周章跑獸醫院！',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: 2,
    name: '陳志明',
    role: '咪咪 (美國短毛貓) 的主人',
    content: '上次半夜咪咪突然嘔吐，還好有 24/7 緊急諮詢。獸醫很專業地指導我如何處理，讓我安心不少。這服務太值得了。',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 3,
    name: '張惠君',
    role: '皮皮 (柴犬) 的主人',
    content: '營養師規劃的菜單很棒，皮皮原本挑食的問題改善了很多，毛色也變漂亮了。真心推薦給所有毛爸媽！',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d'
  }
];

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectPlan }) => {
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadName && leadEmail) {
      setShowModal(true);
      setLeadName('');
      setLeadEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-500 p-2 rounded-full">
               <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-xl text-gray-900">Happy Paws</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-500 hover:text-brand-600 font-medium">服務優勢</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-500 hover:text-brand-600 font-medium">價格方案</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-500 hover:text-brand-600 font-medium">客戶見證</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-500 hover:text-brand-600 font-medium">聯絡我們</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-brand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-brand-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">全方位專業照護</span>{' '}
                  <span className="block text-brand-600 xl:inline">讓您放心</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  我們把您的毛孩當作家人。加入 Happy Paws，享受獸醫級的居家照護服務，隨時隨地守護愛寵健康。
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button onClick={() => scrollToSection('pricing')} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10">
                      立即開始
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://image.pollinations.ai/prompt/pixar%20style%20cute%20cat%20and%20dog%20friendly%20happy%20bright%20colors%203d%20render?width=1200&height=800&nologo=true"
            alt="Pixar style cute cat and dog"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">我們的服務</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              為什麼選擇 Happy Paws?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-brand-500 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">定期到府健檢</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  專業獸醫助理每月到府，檢查體重、體溫及基本外觀檢查，早期發現潛在問題。
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-brand-500 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 緊急諮詢</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  無論深夜或假日，透過視訊隨時與專業團隊聯繫，解決您的突發焦慮。
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-brand-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">專屬營養規劃</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  根據年齡、品種與健康狀況，為您的毛孩量身打造最合適的飲食計畫。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 bg-brand-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              簡單透明的價格
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              選擇最適合您和毛孩的方案
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
            {plans.map((plan) => (
              <div key={plan.id} className={`rounded-2xl shadow-lg divide-y divide-gray-200 bg-white border-2 ${plan.recommended ? 'border-brand-500 relative' : 'border-transparent'}`}>
                {plan.recommended && (
                  <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-brand-500 rounded-full text-xs font-semibold text-white uppercase tracking-wide">
                    最受歡迎
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-bold text-gray-900">{plan.name}</h2>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">NT$ {plan.price}</span>
                    <span className="text-base font-medium text-gray-500">/月</span>
                  </p>
                  <Button 
                    variant={plan.recommended ? 'primary' : 'secondary'} 
                    fullWidth 
                    className="mt-8"
                    onClick={() => onSelectPlan(plan)}
                  >
                    立即訂閱
                  </Button>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">包含內容</h3>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex space-x-3">
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="text-base text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-white border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              客戶心聲
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              聽聽其他毛爸媽的使用體驗
            </p>
          </div>
          <div className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-50 rounded-2xl p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-200 opacity-50" />
                <div className="flex items-center mb-6">
                    <img className="h-12 w-12 rounded-full object-cover border-2 border-brand-200" src={testimonial.avatar} alt={testimonial.name} />
                    <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
                <div className="flex mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 scroll-mt-20">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              還在考慮嗎？
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              訂閱我們的電子報，獲取免費的寵物照護指南與最新優惠資訊。
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">電子郵件</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-xl"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" fullWidth>
                  訂閱電子報
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2024 Happy Paws 寵物守護. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowModal(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    感謝您的訂閱！
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      我們已經收到您的資料。寵物照護指南將會在 5 分鐘內寄送到您的信箱。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <Button fullWidth onClick={() => setShowModal(false)}>
                  好的，謝謝
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};