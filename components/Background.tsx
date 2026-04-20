export default function Background() {
  return (
    <>
      {/* Main grid background - full visible */}
      <div
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient overlay - darker at bottom for depth */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.3) 100%)",
        }}
      />
    </>
  );
}
