import { useState, useRef, useEffect } from "react";
import { StoryCard } from "@/components/StoryCard";
import { StoryButton } from "@/components/StoryButton";
import { LoveSlider } from "@/components/LoveSlider";
import { AnimatedText } from "@/components/AnimatedText";
import { TypingText } from "@/components/TypingText";
import { Heart, Send } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lovePercentage, setLovePercentage] = useState(0);
  const [musicStarted, setMusicStarted] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Track user answers
  const [userAnswers, setUserAnswers] = useState({
    kabar: "",
    pentingAnswer: "",
    sayangAnswer: "",
    lovePercentage: 0,
  });

  
  // Form data for final page
  const [formData, setFormData] = useState({
    message: "",
  });

  const nextPage = (answer?: string) => {
    // Track answers based on current page
    if (currentPage === 1 && answer) {
      setUserAnswers(prev => ({ ...prev, kabar: answer }));
    } else if (currentPage === 3 && answer) {
      setUserAnswers(prev => ({ ...prev, pentingAnswer: answer }));
    } else if (currentPage === 5 && answer) {
      setUserAnswers(prev => ({ ...prev, sayangAnswer: answer }));
    } else if (currentPage === 6) {
      setUserAnswers(prev => ({ ...prev, lovePercentage }));
    }
    
    if (currentPage < 12) {
      setPageTransition(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setPageTransition(false);
        setAnimationComplete(false); // Reset animation state
      }, 300);
    }
  };

  const handleNoClick = (message: string) => {
    toast.error(message, {
      duration: 3000,
      style: {
        background: 'rgba(255, 77, 141, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 77, 141, 0.3)',
        color: 'white',
      },
    });
  };

  const restart = () => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(0);
      setLovePercentage(0);
      setMusicStarted(false);
      setUserAnswers({
        kabar: "",
        pentingAnswer: "",
        sayangAnswer: "",
        lovePercentage: 0,
      });
      setFormData({ message: "" });
      setPageTransition(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 300);
  };

  const startMusic = () => {
    if (!musicStarted && audioRef.current) {
      setMusicStarted(true);
      audioRef.current.play().catch(() => console.log("Autoplay blocked"));
    }
    nextPage();
  };

  const handleSendToWhatsApp = () => {
    if (!formData.message.trim()) {
      toast.error("Mohon isi pesan kamu");
      return;
    }

    const message = `*Foryou Story Response* 💕\n\n` +
      `📝 *Pesan:* ${formData.message}\n\n` +
      `*Jawaban:*\n` +
      `🎭 Kabar: ${userAnswers.kabar}\n` +
      `⭐ Aku penting?: ${userAnswers.pentingAnswer}\n` +
      `💖 Kamu sayang aku?: ${userAnswers.sayangAnswer}\n` +
      `💯 Seberapa sayang: ${userAnswers.lovePercentage}%`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Terima kasih! Pesan kamu akan dikirim ke WhatsApp");
  };

  const loveTexts = [
    "Halo sayangkuu 💕",
    "Kamu tau gak??",
    "Aku bersyukur banget punya kamu",
    "Yang selalu ada buat aku",
    "Dan sering nemenin aku...",
    "Ketika aku kesepian...",
    "Aku selalu cari kamu",
    "Dan aku rindu kamu... 💭",
    "Terima kasih kamu udah hadir di hidup aku",
    "Aku sayang banget sama kamu 💕",
    "I Love You Forever 💞",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/assets/musik.mp3" type="audio/mpeg" />
      </audio>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgHero})`,
          filter: "brightness(0.7)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/50 to-black/70" />
      
      {/* Watermark */}
      <div className="fixed bottom-4 left-0 right-0 z-50 text-center">
        <p className="text-white/60 text-sm">
          Dikembangkan oleh <span className="font-semibold text-pink-300/80">Farel Alfareza</span>
        </p>
      </div>
      
      <div className={`relative z-10 min-h-screen flex items-center justify-center p-4 pb-16 transition-opacity duration-300 ${pageTransition ? 'opacity-0' : 'opacity-100'}`}>
        {/* Page 1 */}
        {currentPage === 0 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <Heart className="w-20 h-20 mx-auto text-pink-400 animate-float drop-shadow-lg" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Halo Ada sesuatu nihh" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Mau Lanjut??" delay={1500} speed={60} />
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <StoryButton onClick={startMusic}>Lanjut</StoryButton>
                <StoryButton 
                  variant="secondary" 
                  onClick={() => handleNoClick("Yakin gak mau? Ayolah, coba lagi yaa 🥺")}
                >
                  Tidak
                </StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 2 */}
        {currentPage === 1 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Halo Sayangg" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Kabar kamu gimana hari ini??" delay={1000} speed={60} />
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <StoryButton onClick={() => nextPage("Baik")}>Baik</StoryButton>
                <StoryButton variant="secondary" onClick={() => {
                  handleNoClick("Gapapa kok, semoga hari kamu segera membaik 💪");
                  nextPage("Buruk");
                }}>Buruk</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 3 */}
        {currentPage === 2 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Oke dah Kalo gitu" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Aku senang dengar kabar dari kamu" delay={1000} speed={60} />
              </p>
              <p className="text-xl text-white/90">
                <TypingText text="Kalo Semuanya Baik baik aja" delay={2500} speed={60} />
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 4 */}
        {currentPage === 3 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Aku Mau Nanya" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Menurut kamu....." delay={1000} speed={80} />
              </p>
              <p className="text-xl text-white/90">
                <TypingText text="Aku ini penting gak??" delay={2200} speed={60} />
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <StoryButton onClick={() => nextPage("Iyaa")}>Iyaa</StoryButton>
                <StoryButton variant="secondary" onClick={() => {
                  handleNoClick("Bohong deh, pasti penting kok 😊");
                  nextPage("Tidak");
                }}>Tidak</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 5 */}
        {currentPage === 4 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Hehe" speed={100} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Kamu Juga penting bagi aku.." delay={800} speed={60} />
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 6 */}
        {currentPage === 5 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Emm....." speed={120} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Kamu sayang sama aku kan??" delay={1000} speed={60} />
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <StoryButton onClick={() => nextPage("Iyaa")}>Iyaa</StoryButton>
                <StoryButton variant="secondary" onClick={() => {
                  handleNoClick("Masa sih? Coba pikir lagi deh 🤔💕");
                  nextPage("Tidak");
                }}>Tidak</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 7 - Love Slider */}
        {currentPage === 6 && (
          <StoryCard>
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Kalo Boleh Tau" speed={70} />
              </h1>
              <LoveSlider
                value={lovePercentage}
                onChange={setLovePercentage}
                label="Seberapa sayang nih?"
              />
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 8 */}
        {currentPage === 7 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Makasih yaa" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                Kamu serius sayang aku{" "}
                <span className="text-pink-300 font-bold text-2xl">{lovePercentage}%</span>
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 9 */}
        {currentPage === 8 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Hehe" speed={100} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Kalo gitu rasa sayang aku ke kamu unlimited aja." delay={800} speed={50} />
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 10 */}
        {currentPage === 9 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Dengarin yaa" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Aku punya sesuatu buat kamu" delay={1000} speed={60} />
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 11 - Animated Love Messages */}
        {currentPage === 10 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-8">
                <TypingText text="Ungkapan Hati 💖" speed={70} />
              </h1>
              <AnimatedText 
                texts={loveTexts} 
                typingSpeed={50} 
                delay={2000}
                onComplete={() => setAnimationComplete(true)}
              />
              {animationComplete && (
                <div className="flex justify-center pt-8 animate-fade-in">
                  <StoryButton onClick={nextPage}>Lanjut</StoryButton>
                </div>
              )}
            </div>
          </StoryCard>
        )}

        {/* Page 12 - Thank You & Redirect */}
        {currentPage === 11 && (
          <StoryCard>
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Terima Kasih 💕" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Terima kasih sudah menjawab semuanya dengan jujur" delay={1200} speed={50} />
              </p>
              <p className="text-lg text-white/80">
                <TypingText text="Sekarang, ada yang mau kamu sampaikan?" delay={3500} speed={50} />
              </p>
              <div className="flex justify-center pt-4">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 13 - Final Form */}
        {currentPage === 12 && (
          <StoryCard className="max-w-lg">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl text-center">
                Kirim Pesan 💌
              </h1>
              
              <div className="space-y-4">
                <div>
                  <label className="text-white/90 text-sm font-medium block mb-2">
                    Pesan Kamu
                  </label>
                  <Textarea
                    placeholder="Tulis pesan kamu di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-pink-400 focus:ring-pink-400/50 min-h-[120px] resize-none"
                    maxLength={500}
                  />
                </div>

                <div className="bg-white/10 rounded-xl p-4 space-y-2 text-sm text-white/80">
                  <p className="font-semibold text-pink-300">Ringkasan Jawaban:</p>
                  <p>📋 Kabar: <span className="text-white">{userAnswers.kabar}</span></p>
                  <p>⭐ Aku penting?: <span className="text-white">{userAnswers.pentingAnswer}</span></p>
                  <p>💖 Kamu sayang?: <span className="text-white">{userAnswers.sayangAnswer}</span></p>
                  <p>💯 Seberapa sayang: <span className="text-white">{userAnswers.lovePercentage}%</span></p>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <StoryButton 
                  onClick={handleSendToWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim ke WhatsApp
                </StoryButton>
              </div>
            </div>
          </StoryCard>
        )}
      </div>
    </div>
  );
};

export default Index;
