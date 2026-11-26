// src/components/SinglePage/SidebarProfile.tsx — the identity block
// at the top of the sidebar (sidebar-profile layout, 2026-11-26):
// circular portrait, availability badge, and the static tagline.
// This replaces the old top hero (Bio.tsx): the portrait and badge
// moved into the sidebar, the name lives in the top bar, and the
// rotating tagline is gone — the tagline is a single static line,
// rendered in normal flow so it is fully visible and can never be
// clipped or overlapped. The portrait is a circular crop ONLY —
// object-fit: cover on a square frame, never stretched or warped.
import "./SidebarProfile.css";

export const SidebarProfile: React.FC = () => {
  return (
    <div className="sidebar-profile">
      <div className="sidebar-profile__portrait-wrap">
        <img
          src="/portrait-cutout.png"
          alt="Portrait of Christian Morrow"
          className="sidebar-profile__portrait"
          width={180}
          height={180}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Availability badge: the same pill as the old hero — IBM
          Plex Mono, uppercase, shirt-red text and border, with a
          muted-green dot. */}
      <p className="sidebar-profile__badge">
        <span className="sidebar-profile__badge-dot" aria-hidden="true" />
        Open to software roles
      </p>

      {/* Static tagline. Plain block flow — no absolute positioning,
          no negative margins — so the line is fully visible. */}
      <p className="sidebar-profile__tagline">Built end to end</p>
    </div>
  );
};
