import React, { useEffect, useRef, useCallback,} from 'react';

interface ProfileCardProps {
  avatarUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  showContactButton?: boolean;
  className?: string;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  miniAvatarUrl,
  name = 'User',
  handle = 'username',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  showContactButton = true,
  className = '',
  enableTilt = true,
  onContactClick
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // SIMPLE TILT (clean version)
  // -------------------------
  const handleMove = useCallback((e: PointerEvent) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    cardRef.current.style.transform = `
      rotateX(${(-y * 10).toFixed(2)}deg)
      rotateY(${(x * 10).toFixed(2)}deg)
    `;
  }, [enableTilt]);

  const resetTilt = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !enableTilt) return;

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', resetTilt);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', resetTilt);
    };
  }, [handleMove, resetTilt, enableTilt]);

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      style={{ perspective: '800px' }}
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-[30px] transition-transform duration-200 ease-out"
        style={{
          height: '500px',
          width: 'min(320px, calc(100vw - 2rem))',
          transformStyle: 'preserve-3d',
          background: '#000'
        }}
      >
        {/* IMAGE */}
        <img
          src={avatarUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* CONTACT INFO */}
        {showUserInfo && (
          <div
            className="absolute flex items-center justify-between border border-white/10 backdrop-blur-md"
            style={{
              bottom: '10px',
              left: '10px',
              right: '10px',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '20px',
              padding: '15px 10px'
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={miniAvatarUrl || avatarUrl}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
              />
              <div>
                <div className="text-sm font-semibold text-white">{handle}</div>
                <div className="text-xs text-white/70">{status}</div>
              </div>
            </div>

            {showContactButton && (
              <button
                onClick={onContactClick}
                className="px-4 py-2 text-xs font-semibold text-white border border-white/20 rounded-lg hover:border-white/50"
              >
                {contactText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProfileCard);