
import React, { useState } from 'react';
import { ICONS, WHATSAPP_NUMBER, COURSE_PRICE_ORIGINAL, COURSE_PRICE_DISCOUNTED, AUDIO_TESTIMONIALS, WRITTEN_TESTIMONIALS, PAYMENT_METHODS } from './constants';
import { getExamTips } from './services/geminiService';

const App: React.FC = () => {
  const [aiTip, setAiTip] = useState<string>("");
  const [userConcern, setUserConcern] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleGetTip = async () => {
    if (!userConcern.trim()) return;
    setIsTyping(true);
    const tip = await getExamTips(userConcern);
    setAiTip(tip);
    setIsTyping(false);
  };

  const openWhatsApp = (source: string) => {
    const message = encodeURIComponent(`سلام، جيت من ${source}. بغيت نشري دورة الأسئلة الجديدة ديال البيرمي. عفاك عطيني معلومات الدفع.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen font-['Cairo'] overflow-x-hidden bg-white text-gray-900 selection:bg-blue-100 antialiased" dir="rtl">
      {/* Dynamic Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 px-4 py-3 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-blue-200 shadow-lg shrink-0">
              <ICONS.Car />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-black text-blue-900 leading-none">PERMIS<span className="text-blue-600">PRO</span></span>
              <span className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Maroc 2025</span>
            </div>
          </div>
          
          {/* Action */}
          <div className="flex items-center">
            <button 
              onClick={() => openWhatsApp('Header')}
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md text-base"
            >
              <ICONS.WhatsApp />
              <span>اشتري الآن</span>
            </button>
            <button 
              onClick={() => openWhatsApp('Header_Mobile')}
              className="md:hidden p-2 text-green-500"
              aria-label="WhatsApp"
            >
              <ICONS.WhatsApp />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-32 px-4 gradient-bg text-white relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-right space-y-6 md:space-y-8 z-10">
            <div>
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                </span>
                تحديثات الأسئلة الجديدة 2025
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[1.3] md:leading-[1.2] mb-4">
                البيرمي في جيبك <br/> 
                <span className="text-yellow-300">بلا ما تخلعك</span> <br className="hidden md:block" />
                الأسئلة الجديدة!
              </h1>
            </div>
            
            <p className="text-base md:text-xl opacity-90 leading-[1.8] max-w-xl">
              واش خايف من السيستيم الجديد؟ جبنا ليك الحل! دورة شاملة بالدارجة كتشرح ليك الأسئلة اللي كتحط دابا بكل بساطة وفي وقت قياسي مع "كود أيوب".
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => openWhatsApp('Hero_Main')}
                className="bg-white text-blue-900 px-8 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black hover:bg-yellow-300 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                <ICONS.WhatsApp />
                احصل على الدورة الآن
              </button>
              <div className="flex flex-col justify-center items-start sm:items-end text-sm opacity-90">
                <div className="flex gap-1 text-yellow-400 mb-1">
                   {[...Array(5)].map((_, i) => <ICONS.Star key={i} />)}
                </div>
                <p className="font-semibold text-xs md:text-sm">أكثر من 2,500 طالب نجحوا بفضلنا</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2.5rem] shadow-2xl animate-float">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer" onClick={() => openWhatsApp('Video_Preview')}>
                <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-5 rounded-full text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ICONS.Play />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span>نسبة النجاح المتوقعة: 98%</span>
                  <span className="text-yellow-300 font-black">Edition 2025</span>
                </div>
                <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 w-[98%] rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Meet Code Ayoub Section */}
      <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6 md:space-y-8 text-right order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-5xl font-black text-blue-900 leading-[1.4] md:leading-tight">
                تعرف على صاحب الدورة: <br className="hidden md:block" />
                <span className="text-blue-600">كود أيوب - Code Ayoub</span>
              </h2>
              <p className="text-lg md:text-xl font-bold text-gray-500 italic leading-relaxed">المصدر الأول لتعلم السياقة وقواعد السير في المغرب 🚗📚</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border-r-8 border-blue-600 shadow-sm">
                <h4 className="text-lg md:text-xl font-black mb-4 text-blue-900">أشنو كانقدمو؟</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">شروحات واضحة ومفصلة على قوانين السير وكيفاش تسوق بأمان.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">توضيحات على الإشارات الطرقية والمخالفات لي كيتعرضو ليها الناس.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">نصائح ذهبية للسائقين الجدد والمحترفين باش يحسنو مهاراتهم فالطريق.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 md:p-8 rounded-3xl border-r-8 border-yellow-400 shadow-sm">
                <h4 className="text-lg md:text-xl font-black mb-4 text-blue-900">علاش خاصك تختار Code Ayoub؟</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">محتوى زوين ومفيد ومتجدد كيتماشى مع آخر المستجدات فالقيادة.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">طرق سهلة وبسيطة باش تعلم قوانين الطريق وتولي تسوق بثقة.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2.5 shrink-0"></span>
                    <p className="leading-[1.7] text-sm md:text-base font-semibold">تحديثات ديما موجودة على تعليم السياقة وقوانين السير.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-900/5 p-4 rounded-2xl">
              <p className="text-base md:text-lg font-bold text-blue-900 leading-relaxed text-center md:text-right">
                🚦 متفلتش الفرصة باش تزيد فمعرفتك وتنجح فالسياقة من المرة الأولى مع كود أيوب!
              </p>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 w-full max-w-sm md:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-3 md:p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
                  alt="Code Ayoub - Instructor" 
                  className="w-full rounded-[2.5rem] object-cover h-[350px] md:h-[550px]"
                />
                <div className="absolute bottom-6 right-6 left-6 md:bottom-10 md:right-10 md:left-auto bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-blue-50 text-center md:text-right">
                  <p className="text-blue-600 font-black text-xl md:text-2xl mb-1">Code Ayoub</p>
                  <p className="text-gray-500 text-xs md:text-sm font-bold tracking-wide uppercase">خبير تعليم السياقة بالمغرب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Flow */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center font-bold">
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-xl shadow-blue-200">1</div>
            <h4 className="text-blue-900 text-lg md:text-xl">تواصل معنا في واتساب</h4>
            <p className="text-sm md:text-base text-gray-500 font-normal leading-[1.8]">بمجرد الضغط على الأزرار سيتم تحويلك مباشرة للدردشة معنا وتأكيد طلبك</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4 md:border-x border-gray-200">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-xl shadow-blue-200">2</div>
            <h4 className="text-blue-900 text-lg md:text-xl">خلص بطريقة آمنة</h4>
            <p className="text-sm md:text-base text-gray-500 font-normal leading-[1.8]">كنقبلو الدفع عبر كاش بليس، وفا كاش، بنك CIH أو تحويل بنكي سريع</p>
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-xl shadow-blue-200">3</div>
            <h4 className="text-blue-900 text-lg md:text-xl">توصل برابط الدخول فورا</h4>
            <p className="text-sm md:text-base text-gray-500 font-normal leading-[1.8]">ولوج مباشر للفيديوهات والملخصات على هاتفك في أقل من 5 دقائق من تأكيد الخلاص</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-red-50 p-8 md:p-12 rounded-[2.5rem] border border-red-100 text-right space-y-6">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-100">
              <ICONS.Warning />
            </div>
            <h3 className="text-2xl font-black text-red-900">المشاكل اللي كيعاني منها الجميع</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-red-500 font-bold mt-1.5 shrink-0">✗</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">الأسئلة القديمة مابقاتش صالحة للامتحان الجديد اللي طبقوه مؤخراً.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 font-bold mt-1.5 shrink-0">✗</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">الضغط النفسي والارتباك بسباب نظام الامتحان المتطور والوقت المحدود.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 font-bold mt-1.5 shrink-0">✗</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">شروحات يوتيوب غالبيتها مخربقة وما مرتباش كتضيع ليك وقتك بلا فايدة.</p>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-8 md:p-12 rounded-[2.5rem] border border-green-100 text-right space-y-6 ring-8 ring-green-50/50">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100">
              <ICONS.Check />
            </div>
            <h3 className="text-2xl font-black text-green-900">الحل اللي كنقدموه ليك</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold mt-1.5 shrink-0">✓</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">أسئلة 2025 الحصرية مع "كود أيوب" وشرح دقيق ومبسط بالخشيبات.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold mt-1.5 shrink-0">✓</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">منهجية ذكية كتخليك تفهم القواعد الصعبة في أقل من 10 دقايق بتركيز عالي.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold mt-1.5 shrink-0">✓</span>
                <p className="text-gray-700 leading-[1.8] text-sm md:text-base font-semibold">دعم مباشر وتتبع شخصي معاك في الواتساب للإجابة على أي تساؤل حتى نهار الامتحان.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audio Testimonials */}
      <section className="py-20 md:py-32 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">سمع آش كيقولو التلاميذ ديالنا 🎧</h2>
            <p className="text-gray-500 text-sm md:text-lg">آراء صوتية حقيقية لطلاب اجتازوا الامتحان بنجاح بفضل "كود أيوب"</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AUDIO_TESTIMONIALS.map((t) => (
              <div key={t.id} className={`p-8 rounded-[2rem] border border-white shadow-xl ${t.color} group hover:-translate-y-2 transition-transform text-right`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                    <ICONS.Microphone />
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-white/60 px-3 py-1 rounded-full">{t.duration}</span>
                </div>
                <h4 className="text-xl font-bold mb-1">{t.name}</h4>
                <p className="text-xs text-gray-400 mb-6">{t.city}</p>
                <div className="h-12 bg-white rounded-2xl flex items-center px-4 gap-4 overflow-hidden border border-gray-100/50 shadow-inner">
                  <div className="text-blue-600 cursor-pointer hover:scale-110 transition-transform shrink-0">
                    <ICONS.Play />
                  </div>
                  <div className="flex-1 flex gap-1 items-center h-full">
                    {[2,4,6,3,5,2,7,4,3,6,2,5,3,4,6,2,4,3,5].map((h, i) => (
                      <div key={i} className="bg-blue-200 w-1 rounded-full group-hover:bg-blue-600 transition-colors" style={{ height: `${h * 4}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">شهادات مكتوبة من زبنائنا ⭐</h2>
            <p className="text-gray-500 text-sm md:text-lg leading-[1.8]">هادي غير عينة صغيرة من مئات الرسائل اللي كنتوصلو بها يوميا من طلابنا اللي نجحوا</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {WRITTEN_TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all text-right group flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => <ICONS.Star key={i} />)}
                  </div>
                  <p className="text-gray-700 leading-[2] mb-8 italic text-sm md:text-base font-medium">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200/50">
                  <span className="font-bold text-blue-900">{testimonial.name}</span>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-sm">
                    {testimonial.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-blue-900 text-white rounded-[3rem] shadow-2xl relative border-8 border-white/5 overflow-hidden">
          <div className="p-8 md:p-20 text-center space-y-8 relative z-10">
            <h3 className="text-2xl md:text-4xl font-black leading-[1.5]">عندك شي سؤال مبرزطك بخصوص الامتحان؟ 🤔</h3>
            <p className="text-blue-100/80 text-sm md:text-xl max-w-lg mx-auto leading-[1.8]">
              سول الذكاء الاصطناعي ديالنا على أي حاجة مخلعاك ونعطيوك النصيحة المناسبة بالدارجة المغربية في ثواني.
            </p>
            <div className="max-w-xl mx-auto space-y-4">
              <div className="relative group">
                <input 
                  type="text" 
                  value={userConcern}
                  onChange={(e) => setUserConcern(e.target.value)}
                  placeholder="مثلا: كيجيني صعيب الوقوف والتوقف..."
                  className="w-full p-5 md:p-6 pr-14 rounded-2xl bg-white/10 border border-white/20 focus:bg-white focus:text-gray-900 outline-none transition-all text-right placeholder:text-blue-200 text-base md:text-lg"
                />
                <button 
                  onClick={handleGetTip}
                  disabled={isTyping}
                  className="absolute left-2.5 top-2.5 bg-yellow-400 text-blue-900 px-6 py-2.5 md:py-3.5 rounded-xl font-black hover:bg-yellow-300 disabled:opacity-50 transition-all shadow-lg active:scale-95 text-sm md:text-base"
                >
                  {isTyping ? "جاري..." : "سولني"}
                </button>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl">
                   🤖
                </div>
              </div>
              {aiTip && (
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 animate-in zoom-in-95 text-right shadow-2xl">
                  <p className="text-blue-50 font-bold leading-[2] text-sm md:text-lg">{aiTip}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Payments */}
      <section className="py-20 md:py-32 px-4 gradient-bg relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white rounded-[3.5rem] p-8 md:p-20 shadow-2xl text-center border-t-8 border-yellow-400">
            <div className="inline-block bg-red-100 text-red-600 px-8 py-2.5 rounded-full text-xs md:text-sm font-black mb-8 animate-pulse uppercase">
               خصم العرض الحصري كيسالي قريبا! ⏳
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">سجل دابا واضمن نجاحك!</h2>
            <p className="text-lg md:text-2xl text-gray-500 mb-12 font-medium">الدورة المتكاملة لعام 2025 مع "كود أيوب" في عرض خاص جداً</p>
            
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 md:gap-16 mb-16">
              <div className="flex-1 text-right space-y-6 flex flex-col justify-center">
                {[
                  "دخول مدى الحياة للفيديوهات والشروحات الحصرية",
                  "أكثر من 400 سؤال جديد محين لعام 2025",
                  "دعم شخصي 24/7 عبر الواتساب للإجابة على تساؤلاتك",
                  "ملخصات PDF جاهزة للمراجعة السريعة من التليفون"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4 font-bold text-gray-700 leading-[1.6]">
                    <div className="text-green-500 shrink-0 mt-1.5"><ICONS.Check /></div>
                    <span className="text-sm md:text-lg">{text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 bg-blue-50 p-10 md:p-14 rounded-[3rem] border-2 border-dashed border-blue-200 flex flex-col justify-center items-center shadow-inner">
                <p className="text-gray-400 line-through text-2xl font-bold mb-2">{COURSE_PRICE_ORIGINAL} درهم</p>
                <div className="relative">
                  <p className="text-7xl md:text-9xl font-black text-blue-600">{COURSE_PRICE_DISCOUNTED}</p>
                  <span className="absolute -left-14 bottom-4 md:bottom-8 text-2xl md:text-3xl font-black text-blue-400">درهم</span>
                </div>
                <p className="text-xs font-bold text-blue-400 mt-6 tracking-widest uppercase">دفع مرة واحدة فقط</p>
              </div>
            </div>

            <div className="mb-14">
              <h4 className="text-gray-400 font-bold text-xs md:text-sm mb-8 uppercase tracking-widest">طرق الدفع المتوفرة 🇲🇦</h4>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {PAYMENT_METHODS.map((method) => (
                  <div key={method.id} className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{method.icon}</span>
                    <span className="font-black text-gray-700 whitespace-nowrap text-xs md:text-base">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => openWhatsApp('Bottom_Pricing')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-6 md:py-10 rounded-[2.5rem] text-2xl md:text-5xl font-black transition-all transform hover:scale-[1.02] shadow-2xl shadow-green-200 flex items-center justify-center gap-4 active:scale-95 mb-8"
            >
              <ICONS.WhatsApp />
              اشتري الآن عبر الواتساب
            </button>
            <p className="text-gray-400 text-sm md:text-base font-semibold leading-relaxed">سجل الآن وتوصل بمعلومات الدخول في أقل من 5 دقائق</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">الأسئلة اللي كيطرحوها الجميع 🧐</h2>
          <div className="space-y-6">
            {[
              { q: "واش هاد الأسئلة هي اللي كطيح دابا فعلا؟", a: "نعم، الدورة محينة 100% مع آخر التغييرات اللي دارت وزارة النقل واللوجيستيك في 2024 و 2025. كنضيفو أسئلة جديدة كل ما بان شي تغيير في بنك الأسئلة الوطني." },
              { q: "كفاش غادي نتوصل بالدورة من بعد الخلاص؟", a: "بمجرد ما ترسل لينا صورة التوصيل (من كاش بليس، وفا كاش، أو البنك) في واتساب، كنرسلو ليك رابط المنصة مع كود التفعيل الخاص بك فالحين دون أي تأخير." },
              { q: "واش الدورة مناسبة للمبتدئين اللي ما كيعرفو والو؟", a: "أكيد، الشرح مصمم لجميع المستويات. استعملنا الدارجة المغربية البسيطة باش كلشي يفهم القواعد، من العلامات حتى لأولويات المرور المعقدة." },
              { q: "واش نقدر نخدم بالدورة من التليفون؟", a: "طبعاً، المنصة ديالنا متوافقة تماماً مع جميع أنواع الهواتف الذكية (Android/iOS)، التابلت، والحواسيب. كتحتاج غير أنترنيت خفيفة وتفرج وقتما بغيتي." }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 cursor-pointer group shadow-sm hover:shadow-md transition-all">
                <summary className="flex items-center justify-between list-none font-black text-base md:text-xl text-right">
                  <span className="text-blue-600 group-open:rotate-180 transition-transform shrink-0">▼</span>
                  <span className="ml-4 leading-[1.6]">{faq.q}</span>
                </summary>
                <p className="mt-6 text-gray-600 leading-[2] text-right border-t border-gray-50 pt-6 font-semibold text-sm md:text-lg">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-900/50"><ICONS.Car /></div>
              <span className="text-3xl md:text-4xl font-black tracking-tighter italic uppercase">Permis<span className="text-blue-500">Pro</span></span>
            </div>
            <p className="text-gray-400 max-w-sm leading-[1.8] font-medium text-sm md:text-base">
              المنصة المتكاملة رقم 1 في المغرب للتحضير والنجاح في امتحان السياقة مع "كود أيوب" وفق آخر تحديثات نظام الأسئلة الجديد لعام 2025.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-10 md:gap-20 text-sm md:text-base">
            <div className="space-y-6">
              <p className="font-black text-white border-b-2 border-blue-600 pb-2 inline-block text-lg">روابط هامة</p>
              <nav className="flex flex-col gap-4 text-gray-400 font-bold">
                <a href="#" className="hover:text-blue-400 transition-colors">الرئيسية</a>
                <a href="#" className="hover:text-blue-400 transition-colors">آراء الطلاب</a>
                <a href="#" className="hover:text-blue-400 transition-colors">طرق الدفع</a>
              </nav>
            </div>
            <div className="space-y-6">
              <p className="font-black text-white border-b-2 border-blue-600 pb-2 inline-block text-lg">تواصل معنا</p>
              <nav className="flex flex-col gap-4 text-gray-400 font-bold">
                <a href="#" className="hover:text-blue-400 transition-colors">الواتساب المباشر</a>
                <a href="#" className="hover:text-blue-400 transition-colors">صفحة الفيسبوك</a>
                <a href="#" className="hover:text-blue-400 transition-colors">حساب تيك توك</a>
              </nav>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex gap-4 justify-center md:justify-end">
               {['FB', 'IG', 'TK'].map(s => (
                 <div key={s} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer font-black text-xs border border-white/10 group">
                   <span className="group-hover:scale-125 transition-transform">{s}</span>
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[10px] md:text-[12px] text-gray-500 uppercase font-black tracking-[0.4em]">Code Ayoub Edition 2025</p>
              <p className="text-[9px] md:text-[11px] text-gray-600 font-bold tracking-widest uppercase">Designed for Your Success 🇲🇦</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button 
          onClick={() => openWhatsApp('Mobile_Sticky')}
          className="w-full bg-green-500 text-white py-5 rounded-[2.5rem] font-black shadow-[0_20px_40px_rgba(34,197,94,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-transform text-lg border-2 border-green-400/30"
        >
          <ICONS.WhatsApp />
          سجل دابا واضمن نجاحك!
        </button>
      </div>
    </div>
  );
};

export default App;
