/**
 * Web Audio API Sound Synthesizer for Educational Feedback
 * - Correct: Powerful, triumphant celebratory brass fanfare & chime
 * - Incorrect: Gentle, soothing, encouraging warm chime
 */

class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (!this.enabled) return null;
    try {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  /**
   * Âm thanh chúc mừng MẠNH MẼ, HOÀNH TRÁNG (Triumphant Fanfare + Sparkles)
   */
  public playCorrectFanfare(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Brass/Trumpet Fanfare Notes: C4 -> E4 -> G4 -> C5 (sustained chord) -> High Sparkles
    const fanfareNotes = [
      { freq: 261.63, start: 0.00, dur: 0.18, type: 'sawtooth' as OscillatorType, vol: 0.22 }, // C4
      { freq: 329.63, start: 0.12, dur: 0.18, type: 'sawtooth' as OscillatorType, vol: 0.24 }, // E4
      { freq: 392.00, start: 0.24, dur: 0.22, type: 'sawtooth' as OscillatorType, vol: 0.26 }, // G4
      { freq: 523.25, start: 0.38, dur: 0.65, type: 'sawtooth' as OscillatorType, vol: 0.32 }, // C5
      { freq: 659.25, start: 0.42, dur: 0.65, type: 'triangle' as OscillatorType, vol: 0.25 }, // E5
      { freq: 783.99, start: 0.46, dur: 0.70, type: 'sine' as OscillatorType, vol: 0.28 },     // G5
      { freq: 1046.50, start: 0.50, dur: 0.80, type: 'sine' as OscillatorType, vol: 0.22 },    // C6
    ];

    fanfareNotes.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = note.type;
      osc.frequency.setValueAtTime(note.freq, now + note.start);

      // Lowpass filter to give rich brass / bell warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3200, now + note.start);
      filter.Q.setValueAtTime(2, now + note.start);

      // Gain envelope
      gain.gain.setValueAtTime(0.0001, now + note.start);
      gain.gain.exponentialRampToValueAtTime(note.vol, now + note.start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + note.start);
      osc.stop(now + note.start + note.dur);
    });

    // Magical celebratory sparkle shimmer
    const sparkles = [1318.5, 1567.98, 1760.0, 2093.0];
    sparkles.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.45 + idx * 0.08);

      gain.gain.setValueAtTime(0.0001, now + 0.45 + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.45 + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45 + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + 0.45 + idx * 0.08);
      osc.stop(now + 0.45 + idx * 0.08 + 0.35);
    });
  }

  /**
   * Âm thanh nhẹ nhàng KHÍCH LỆ học sinh (Gentle, warm, encouraging marimba/harp chime)
   */
  public playEncouragingGentleSound(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Soothing warm chord: gentle low notes that comfort the student
    const gentleNotes = [
      { freq: 349.23, start: 0.00, dur: 0.45, vol: 0.15 }, // F4
      { freq: 440.00, start: 0.12, dur: 0.50, vol: 0.16 }, // A4
      { freq: 523.25, start: 0.25, dur: 0.60, vol: 0.14 }, // C5
    ];

    gentleNotes.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.freq, now + note.start);

      // Warm subtle vibrato
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now + note.start);

      gain.gain.setValueAtTime(0.0001, now + note.start);
      gain.gain.linearRampToValueAtTime(note.vol, now + note.start + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + note.start);
      osc.stop(now + note.start + note.dur);
    });
  }
}

export const soundEffects = new SoundController();
