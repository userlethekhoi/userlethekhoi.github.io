export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 100%, #000 70%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 100%, #000 70%, transparent 100%)",
      }}
    />
  );
}
