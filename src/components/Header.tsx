import React from 'react';
import { Award, Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onResetToHome,
}) => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 border-b-2 border-yellow-400/40 shadow-xl px-4 py-3 sm:px-6 sm:py-4 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Title */}
        <div 
          onClick={onResetToHome}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-app-logo"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 p-0.5 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-purple-950 rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-purple-200 bg-purple-900/80 px-2 py-0.5 rounded border border-purple-700/60">
                THPT LỚP 12 • UNIT 1
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-yellow-300 font-medium">
                <Sparkles className="w-3 h-3 text-yellow-400" /> Bản chuẩn tài liệu
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-yellow-300 tracking-tight drop-shadow-sm group-hover:text-yellow-200 transition-colors">
              PHIẾU ÔN TẬP MÔN TIẾNG ANH UNIT 1 LỚP 12
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-200 flex items-center gap-1.5 mt-0.5">
              <Award className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>Biên soạn và Giảng dạy: <strong className="text-yellow-300 underline decoration-yellow-400/60 decoration-2">CÔ DƯƠNG ĐOÀN</strong></span>
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            id="btn-toggle-sound"
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) {
                // play a test chime
                soundEffects.playEncouragingGentleSound();
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-sm ${
              soundEnabled
                ? 'bg-purple-800 hover:bg-purple-700 text-yellow-300 border border-yellow-400/50'
                : 'bg-purple-950/80 text-purple-300 hover:text-white border border-purple-800'
            }`}
            title={soundEnabled ? 'Tắt âm thanh chúc mừng' : 'Bật âm thanh chúc mừng'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="hidden md:inline font-bold">Âm thanh: BẬT</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-purple-400" />
                <span className="hidden md:inline">Âm thanh: TẮT</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
