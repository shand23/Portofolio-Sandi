import React from 'react';

export default function SectionTitle({ badge, titlePrefix, highlight, titleSuffix, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Subtitle / Badge with Red highlight */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs font-mono font-semibold tracking-wider text-red-400 uppercase mb-4 shadow-[0_0_15px_-3px_rgba(239,68,68,0.3)]`}>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      {/* Main Title: White with Red Highlight */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {titlePrefix}{' '}
        <span className="text-red-500 relative inline-block">
          {highlight}
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
        </span>
        {titleSuffix ? ` ${titleSuffix}` : ''}
      </h2>

      {/* Description: Always Crisp White for legibility as requested */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-white font-normal leading-relaxed opacity-95">
          {description}
        </p>
      )}
    </div>
  );
}

