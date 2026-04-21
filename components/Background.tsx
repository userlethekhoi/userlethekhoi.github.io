export default function Background() {
  return (
    <>
      {/* Subtle dot grid on paper */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(11,11,15,0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top-right soft accent blob */}
      <div
        aria-hidden
        className="fixed -z-10 top-[-10%] right-[-10%] w-[560px] h-[560px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, #7C5CFF 0%, rgba(124,92,255,0) 70%)",
        }}
      />
      {/* Bottom-left soft mint blob */}
      <div
        aria-hidden
        className="fixed -z-10 bottom-[-15%] left-[-10%] w-[520px] h-[520px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, #B8F2D4 0%, rgba(184,242,212,0) 70%)",
        }}
      />
      {/* Bottom fade to paper */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,250,247,0) 60%, rgba(250,250,247,0.85) 100%)",
        }}
      />
    </>
  );
}
