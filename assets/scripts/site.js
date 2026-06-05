/* ===========================================================================
   site.js — navigation dot tracker
   Ported from Shikun Liu's Clarity-based site (shikun.io), trimmed.
   The .menu-dot sits under the active nav link and slides to whichever
   menu or social link you hover, with a gently drifting colour, then
   snaps back to the active link on mouse-leave.
   =========================================================================== */
function initMenuDot() {
  document.querySelectorAll(".nav-container").forEach((container) => {
    const menu = container.querySelector(".menu");
    if (!menu) return;
    const dot = menu.querySelector(".menu-dot");
    if (!dot) return;

    const menuLinks = container.querySelectorAll(".menu a");
    const socialLinks = container.querySelectorAll(".social .icon a");
    const allLinks = [...menuLinks, ...socialLinks];
    const activeLink = container.querySelector(".menu a.active");

    // Gently drifting colour (random walk in HSL).
    let color = { h: Math.random() * 360, s: 60, l: 40 };
    let vel = { h: (Math.random() - 0.5) * 4, s: 0, l: 0 };

    function paint() {
      dot.style.backgroundColor = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    }
    function animate() {
      color.h = (color.h + vel.h + 360) % 360;
      color.s = Math.max(50, Math.min(100, color.s + vel.s));
      color.l = Math.max(20, Math.min(55, color.l + vel.l));
      if (Math.random() < 0.02) {
        vel.h = (Math.random() - 0.5) * 2;
        vel.s = (Math.random() - 0.5) * 0.5;
        vel.l = (Math.random() - 0.5) * 0.5;
      }
      paint();
      requestAnimationFrame(animate);
    }

    function moveTo(link) {
      if (!link) return;
      const lr = link.getBoundingClientRect();
      const mr = menu.getBoundingClientRect();
      dot.style.left = lr.left - mr.left + lr.width / 2 - 4 + "px";
      dot.style.opacity = "1";
    }

    function start() {
      moveTo(activeLink);
      dot.offsetHeight; // force layout before enabling transition
      dot.style.transition = "left 0.3s ease, background-color 0.1s ease-in-out, opacity 1.4s ease";
      dot.style.opacity = "1";
      paint();
      animate();
    }

    dot.style.transition = "none";
    dot.style.opacity = "0";
    if (document.readyState === "complete") {
      requestAnimationFrame(() => requestAnimationFrame(start));
    } else {
      window.addEventListener("load", () =>
        requestAnimationFrame(() => requestAnimationFrame(start)),
      );
    }

    allLinks.forEach((link) =>
      link.addEventListener("mouseenter", () => {
        moveTo(link);
        vel.h = (Math.random() - 0.5) * 3;
      }),
    );
    menu.addEventListener("mouseleave", () => moveTo(activeLink));
    const social = container.querySelector(".social");
    if (social) social.addEventListener("mouseleave", () => moveTo(activeLink));
    window.addEventListener("resize", () => moveTo(activeLink));
  });
}

document.addEventListener("DOMContentLoaded", initMenuDot);
