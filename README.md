# Portfolio Website - Minimal Version

This is the **minimal, clean design** alternative for your GitHub Pages portfolio.

**Live URL (after deployment):** https://riyashet-hds.github.io

---

## Design Philosophy

This version features:
- **Minimal aesthetic:** Black text on white background, lots of whitespace
- **Typography-focused:** Clean fonts (Inter), emphasis on readability
- **Understated elegance:** Professional without being flashy
- **Modern developer portfolio style:** Similar to contemporary tech/research portfolios

---

## Comparison: Two Design Options

You now have **two complete website designs** to choose from:

### Version 1: Academic/Colorful (Purple Gradient)
**Aesthetic:** Conference poster, academic presentation, energetic
- Colorful purple gradient hero section
- More visual hierarchy with colors
- Boxed project cards with hover effects
- Skills shown in tag clouds
- More "polished presentation" feel

**Best for:** Making a strong visual impression, standing out in crowded spaces, academic conferences

### Version 2: Minimal/Clean (This Version)
**Aesthetic:** Modern portfolio, typography-first, understated
- Clean black/white with subtle blue accent
- Lots of whitespace and breathing room
- Simple underlined sections instead of cards
- Content speaks for itself
- More "designer/developer portfolio" feel

**Best for:** Professional subtlety, letting your work speak, modern tech aesthetic

---

## Which Should You Use?

**Choose Version 1 (Colorful) if you want to:**
- Make a bold visual statement
- Stand out in a crowded career fair
- Appeal to a broader, less technical audience
- Show enthusiasm and energy

**Choose Version 2 (Minimal) if you want to:**
- Project sophisticated professionalism
- Appeal to technical/academic audiences
- Follow modern portfolio design trends
- Let your projects be the focus, not the design

**My recommendation:** Version 2 (Minimal) for dissertation supervisor seeking. It's more aligned with how serious researchers present themselves online. Version 1 for career fairs and industry networking.

---

## Deploying This Version

Follow the exact same deployment process as Version 1:

1. Copy these files to your `riyashet-hds.github.io` folder:
   - `index.html` (from this version)
   - `styles.css` (from this version)
   - `README.md` (optional - from either version)

2. Run git commands:
   ```bash
   git add .
   git commit -m "Deploy minimal portfolio design"
   git push origin main
   ```

3. Wait 1-3 minutes and visit https://riyashet-hds.github.io

---

## Customizing Colors

To change the accent color (currently blue):

1. Open `styles.css`
2. Find the `:root` section at the top
3. Change `--accent: #0066cc;` to your preferred color
4. Save and redeploy

Suggested alternatives:
- Green: `#059669`
- Red: `#dc2626`
- Purple: `#7c3aed`
- Teal: `#0891b2`

---

## Font Information

This version uses **Inter** font from Google Fonts (loaded from CDN).
- Lightweight, modern sans-serif
- Optimized for screen reading
- Professional tech/academic standard

If you want to use a different font, replace the Google Fonts link in `<head>` and update `font-family` in CSS.

---

## Structure

Same sections as Version 1:
- Hero (name + tagline)
- About (research interests + sidebar info)
- Work (three projects)
- Skills (technical capabilities)
- Contact (links + location)
- Footer

But with cleaner, more minimal styling.

---

## Responsive Design

Fully responsive - automatically adapts to:
- Desktop (900px+ optimal viewing width)
- Tablet (768px)
- Mobile (480px and below)

Navigation collapses to single column on mobile. All content remains accessible.

---

## Technical Details

- **Pure HTML/CSS** - No JavaScript frameworks
- **Google Fonts** - One external dependency (Inter font)
- **Lightweight** - Fast loading, minimal assets
- **Accessible** - Semantic HTML, keyboard navigation support
- **SEO-friendly** - Proper meta tags, heading hierarchy

---

## Switching Between Versions Later

You can switch designs anytime:

1. Keep both sets of files in separate folders on your computer
2. When you want to switch, just copy the files from the version you want
3. Git add, commit, push
4. Your site updates in 1-2 minutes

No permanent commitment to either design!

---

## My Honest Opinion

For **dissertation supervisor seeking specifically**, I'd go with **Version 2 (Minimal)**. Here's why:

**Academic researchers typically prefer:**
- Clean, simple, content-focused
- No flashy colors or effects
- Easy to read and navigate
- Professional without trying too hard

**This minimal version signals:**
- "I care about substance over style"
- "I understand modern design conventions"
- "I'm confident in my work"
- "I'm a serious researcher"

**The colorful version signals:**
- "I'm enthusiastic and energetic"
- "I want to catch your attention"
- "I care about visual presentation"
- "I'm accessible and friendly"

Both are good! But for Birmingham professors evaluating potential dissertation students, subtle professionalism (Version 2) might resonate more than energetic presentation (Version 1).

**That said**, if you just *like* Version 1 better, use it! Your comfort and authentic preference matter most.

---

## What's the Same in Both Versions?

- All the same content
- All the same information
- Same project descriptions
- Same links to repositories
- Same "seeking supervisor" messaging
- Same responsive behavior
- Same deployment process

**Only difference:** Visual design and aesthetic feel.

---

## Testing Both Locally

You can preview both designs on your computer before deciding:

**Test Version 1:**
1. Open `index.html` from Version 1 folder in your browser
2. Evaluate how it feels

**Test Version 2:**
1. Open `index.html` from Version 2 folder in your browser
2. Evaluate how it feels

**Then deploy whichever you prefer.**

---

## Final Recommendation

Deploy **Version 2 (Minimal)** for Saturday's career event and supervisor seeking. It's more aligned with academic/research culture.

If you later decide you want the colorful version for industry networking or job applications, you can switch in 5 minutes.

---

**Questions about either design?** Let me know which resonates with you and I can help customize further!
