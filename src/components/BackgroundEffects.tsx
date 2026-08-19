// Light SaaS background — soft blue grid + ambient blobs.
// OrbEffect kept exported for backward-compat but renders nothing on the light theme.

const BackgroundEffects = () => {
  return (
    <>
      {/* Light-blue grid */}
      <div className="iso-grid" aria-hidden="true" />

      {/* Ambient blue/purple blobs */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Subtle noise */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
};

const OrbEffect = () => null;

export { BackgroundEffects, OrbEffect };
