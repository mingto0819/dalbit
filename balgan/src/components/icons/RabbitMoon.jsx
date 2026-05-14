// DALBIT brand mark — moon rabbit film (used as a small accent).
//
// 영상 자체에는 검은 배경이 있으므로 mix-blend-mode: screen 으로 검은
// 픽셀이 페이지 배경에 자연스레 녹아들도록 합성한다 (truly transparent
// webm 이 준비되면 mix-blend 를 빼고 그대로 써도 됨).
//
// 기존 모션 레이어는 그대로 재사용:
//   .dalbit-logo — 1.4s 주기 위·아래 bob + 임팩트 순간 보라/시안 드롭섀도우 플레어
//   .dalbit-aura — 절구 위치에서 라디알 홀로그램 글로우 박동
//
// 영상 속성:
//   autoPlay loop muted playsInline preload="auto"
//   disablePictureInPicture / controlsList="nodownload" / 우클릭 차단
//   → 자동 무한 재생 + 사용자 다운로드 방지
export default function RabbitMoon({ className = '' }) {
  return (
    <div
      className={[
        // jewel-box card
        'relative rounded-2xl bg-ink p-3 sm:p-4',
        'border border-aged/70 shadow-[0_24px_70px_rgba(20,17,15,0.18)]',
        'overflow-hidden',
        className,
      ].join(' ')}
    >
      <div className="relative rounded-xl bg-ink overflow-hidden">
        <video
          src="/rabbit-animation.mp4"
          className="dalbit-logo block w-full h-auto select-none mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        aria-label="DALBIT — moon rabbit film"
        />
        <div className="dalbit-aura absolute inset-0 pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  )
}
