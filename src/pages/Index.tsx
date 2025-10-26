import { useState, useEffect } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { StoryCard } from "@/components/StoryCard";
import { StoryButton } from "@/components/StoryButton";
import { LoveSlider } from "@/components/LoveSlider";
import { AnimatedText } from "@/components/AnimatedText";
import { Heart } from "lucide-react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lovePercentage, setLovePercentage] = useState(0);
  const [finalLove, setFinalLove] = useState(50);
  const [musicStarted, setMusicStarted] = useState(false);

  const nextPage = () => {
    if (currentPage < 11) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const restart = () => {
    setCurrentPage(0);
    setLovePercentage(0);
    setFinalLove(50);
    setMusicStarted(false);
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600">
      <FloatingHearts />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {/* Page 1 */}
        {currentPage === 0 && (
          <StoryCard>
            <div className="text-center space-y-6">
              <Heart className="w-20 h-20 mx-auto text-pink-300 animate-float" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Halo Ada sesuatu nihh
              </h1>
              <p className="text-xl text-white/90">Mau Lanjut??</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Halo Sayangg
              </h1>
              <p className="text-xl text-white/90">Kabar kamu gimana hari ini??</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Oke dah Kalo gitu
              </h1>
              <p className="text-xl text-white/90">Aku senang dengar kabar dari kamu</p>
              <p className="text-xl text-white/90">Kalo Semuanya Baik baik aja</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Aku Mau Nanya
              </h1>
              <p className="text-xl text-white/90">Menurut kamu.....</p>
              <p className="text-xl text-white/90">Aku ini penting gak??</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Hehe
              </h1>
              <p className="text-xl text-white/90">Kamu Juga penting bagi aku..</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Emm.....
              </h1>
              <p className="text-xl text-white/90">Kamu sayang sama aku kan??</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Kalo Boleh Tau
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Makasih yaa
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Hehe
              </h1>
              <p className="text-xl text-white/90">
                Kalo gitu rasa sayang aku ke kamu unlimited aja.
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Dengarin yaa
              </h1>
              <p className="text-xl text-white/90">Aku punya sesuatu buat kamu</p>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-8">
                Ungkapan Hati 💖
              </h1>
              <AnimatedText texts={loveTexts} />
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
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Terakhir Nih 💘
              </h1>
              <p className="text-xl text-white/90">
                Seberapa besar rasa sayang kamu buat aku? 😳
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
