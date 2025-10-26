import { useState, useEffect } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { StoryCard } from "@/components/StoryCard";
import { StoryButton } from "@/components/StoryButton";
import { LoveSlider } from "@/components/LoveSlider";
import { AnimatedText } from "@/components/AnimatedText";
import { TypingText } from "@/components/TypingText";
import { Heart } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lovePercentage, setLovePercentage] = useState(0);
  const [finalLove, setFinalLove] = useState(50);
  const [musicStarted, setMusicStarted] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);

  const nextPage = () => {
    if (currentPage < 11) {
      setPageTransition(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setPageTransition(false);
      }, 300);
    }
  };

  const restart = () => {
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(0);
      setLovePercentage(0);
      setFinalLove(50);
      setMusicStarted(false);
      setPageTransition(false);
    }, 300);
  };

  const startMusic = () => {
    if (!musicStarted) {
      setMusicStarted(true);
      // Music would play here if audio file is available
    }
    nextPage();
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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgHero})`,
          filter: "brightness(0.7)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/50 to-black/70" />
      
      <FloatingHearts />
      
      <div className={`relative z-10 min-h-screen flex items-center justify-center p-4 transition-opacity duration-300 ${pageTransition ? 'opacity-0' : 'opacity-100'}`}>
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
                  onClick={() => alert("Yakin gak mau? 😢")}
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
                <StoryButton onClick={nextPage}>Baik</StoryButton>
                <StoryButton variant="secondary" onClick={nextPage}>Buruk</StoryButton>
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
                <StoryButton onClick={nextPage}>Iyaa</StoryButton>
                <StoryButton variant="secondary" onClick={nextPage}>Tidak</StoryButton>
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
                <StoryButton onClick={nextPage}>Iyaa</StoryButton>
                <StoryButton variant="secondary" onClick={nextPage}>Tidak</StoryButton>
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
              <AnimatedText texts={loveTexts} typingSpeed={50} delay={2000} />
              <div className="flex justify-center pt-8">
                <StoryButton onClick={nextPage}>Lanjut</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}

        {/* Page 12 - Final */}
        {currentPage === 11 && (
          <StoryCard>
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                <TypingText text="Terakhir Nih 💘" speed={70} />
              </h1>
              <p className="text-xl text-white/90">
                <TypingText text="Seberapa besar rasa sayang kamu buat aku? 😳" delay={1200} speed={60} />
              </p>
              <LoveSlider
                value={finalLove}
                onChange={setFinalLove}
                label="Sayang"
              />
              <div className="flex justify-center pt-4">
                <StoryButton onClick={restart}>Ulang Lagi 🔁</StoryButton>
              </div>
            </div>
          </StoryCard>
        )}
      </div>
    </div>
  );
};

export default Index;
