# Portfolio Website Design Notes

## Color Palette (Current)
- **Primary Background**: `#11172A` (Midnight Blue) - Used for navbar offcanvas, text on light backgrounds
- **Primary Text**: `#F9F8F3` (Off-white) - Used for text on dark backgrounds
- **Accent Color**: `#C9A9A6` (Dusty Rose) - Used for buttons, borders, highlights
- **Secondary Accent**: `#9CAF88` (Sage Green) - Used for hover states, accents
- **Light Background**: `#FAF8F5` (Warm White) - Used for navbar, footer, light sections
- **Secondary Text**: `#5A5D6B` (Slate Gray) - Optional text color

## CSS Variables
```css
--bground: #11172A;
--text: #F9F8F3;
--footer: #11172A;
--accent: #C9A9A6;
--secondary-accent: #9CAF88;
--elem1: #C9A9A6;
--elem2: #9CAF88;
--elem3: #C9A9A6;
--elem4: #9CAF88;
```

## Background Gradients

### Mobile (default)
```css
background-image: radial-gradient(farthest-corner circle at 0% 100% in oklab,
    #C9A9A6 40% 0%, #FAF8F5 -6% 76%);
```

### Desktop (1026px - 1440px)
```css
background-image: radial-gradient(farthest-corner circle at 0% 90% in oklab,
    #C9A9A6 35% 0%, #FAF8F5 -6% 76%);
```

### Large Desktop (1600px+)
```css
background-image: radial-gradient(farthest-corner circle at 0% 90% in oklab,
    #C9A9A6 30% 0%, #FAF8F5 -6% 76%);
```

## Typography
- **Title Font**: "Trocchi", serif, system-ui
- **Body Font**: "Vidaloka", serif, system-ui

## Navbar
- Background: `#FAF8F5` (light)
- Text: `#11172A` (dark for contrast)
- Hamburger icon: `#11172A`
- Offcanvas background: `#11172A` (dark)
- Offcanvas header: `#C9A9A6` (dusty rose)
- Desktop hover: Bottom border `#9CAF88` (sage green)

## Footer
- Background: `#11172A` (midnight blue)
- Text color: `#F9F8F3` (off-white)
- Icon color: `#E6D17B` (gold/yellow)
- Consistent across all pages

## Homepage Cards (Projects Section)
- **Layout**: Grid system
  - Mobile: 1 column
  - Desktop (1026px+): 2 columns
- **Card Styling**:
  - Background: `#5A5D6B` (slate gray)
  - Border: `2px solid #C9A9A6` (dusty rose)
  - Shadow: `0 4px 12px rgba(90, 93, 107, 0.3)`
  - Text color: `#F9F8F3` (off-white)
  - Padding: `2rem 1.5rem` (mobile), `3rem 2.5rem` (1600px+)
  - Gap: `1rem` (mobile), `1.2rem` (1600px+)
  - Min-height: `280px`
  - Icon size: `110px` (mobile/desktop), `130px` (1600px+)
  - Hover background: `#4a4d5a` (darker slate gray)
  - Hover shadow: `0 8px 24px rgba(90, 93, 107, 0.5)`
  - Hover transform: `translateY(-8px)`

## Custom SVG Icons
Created 4 custom SVG icons to replace Font Awesome icons:
1. **icon-web-dev.svg** - Hexagonal network design (yellow/rose)
2. **icon-ux-ui.svg** - Overlapping rectangles (yellow/rose)
3. **icon-photography.svg** - Camera aperture (yellow/rose)
4. **icon-about.svg** - Coffee cup design (yellow/rose)

All icons use:
- Yellow/gold color: `#E6D17B`
- Rose accent: `#C9A9A6`

## Skills Section (Homepage)
- Simple ordered list (`<ol>`) with decimal numbering
- Font size: 1.5rem (24px)
- Line height: 2.5rem
- Large screen (1600px+): 1.8rem font-size, 3rem line-height
- Text color: `#11172A` (midnight blue)
- Skills displayed as list items with bottom border
- Border color: `rgba(201, 169, 166, 0.3)` (semi-transparent rose)
- Hover effect: Left border `#9CAF88` (sage green) with background `rgba(156, 175, 136, 0.1)`

## Button Styles

### CTA Button
- Background: `#C9A9A6` (dusty rose)
- Text: `#11172A` (midnight blue)
- Hover background: `#9CAF88` (sage green)
- Hover text: `#F9F8F3` (off-white)
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.1)`
- Hover shadow: `0 8px 20px rgba(0, 0, 0, 0.15)`

### Back to Top Button
- Position: Fixed, bottom right
- Size: 50px × 50px, circular
- Background: `#C9A9A6`
- Hover background: `#9CAF88`
- Initially hidden (opacity: 0)
- Shows with `.visible` class

## Services Page
- Cards with `rgba(255, 255, 255, 0.7)` background
- Text color: `var(--text)` (off-white)
- Service link backgrounds: `var(--elem1)` (dusty rose)
- Hover: `var(--elem2)` (sage green)

## Contact Page
- Container: `rgba(255, 255, 255, 0.7)` background
- Form inputs: Dark background (`var(--bground)`)
- Submit button: `var(--accent)` background
- Hover: `var(--elem2)` background

## About Page (Homepage Section)
- Profile picture size:
  - Mobile: 60dvw width
  - Desktop (1026px-1440px): 25dvw width, max 400px
  - Large desktop (1600px+): 30dvw width, max 500px
- Profile picture shadow: `-30px -25px 0px #9CAF88` (sage green)
- Text color: `#11172A` (midnight blue)
- Desktop layouts:
  - 1026px-1440px: 1fr 1fr grid with 2rem gap
  - 1600px+: 1.2fr 1fr grid with 3rem gap, max-width 1600px, centered

## Typography & Text Colors
- **Main content text**: `#11172A` (midnight blue) - Used for headings, paragraphs, skills
- **Hero section**:
  - Mobile/Default: `clamp(2rem, 5vw, 3rem)` title, `clamp(1rem, 3vw, 1.5rem)` subtitle, `clamp(0.9rem, 2vw, 1.1rem)` tagline
  - Large desktop (1600px+): `4rem` title, `2rem` subtitle, `1.3rem` tagline
- **Section headings**:
  - Mobile: Default sizes
  - Large desktop (1600px+): h1 `3.5rem`, h3 `2rem`, p `1.4rem`
- **Light text on dark backgrounds**: `#F9F8F3` (off-white) - Used for footer text, navbar offcanvas, project cards
- **Project card text**: Off-white on slate gray background
- **Responsive hero**: Uses clamp() for fluid typography to prevent text cutoff on mobile

## Large Screen Optimizations (1600px+)
- Max-width constraints: 1600px for all major sections (centered with auto margins)
- Reduced top spacing: Jumbotron margin-top reduced to 5rem, min-height 50dvh
- Larger typography: Hero title 4rem, subtitle 2rem, section headings 3.5rem
- Bigger profile image: 30dvw width, max 500px
- Enhanced project cards: 130px icons, 2.2rem headings, 3rem 2.5rem padding, 1.2rem gap, 3rem grid gaps
- Footer improvements: space-evenly distribution across full width, 1.8rem icons, 1.1rem text, proper vertical alignment with 0.8rem gap between icon and text

## Key Changes Made
1. ✅ Changed from orange OKLCH palette to rose/sage/midnight blue hex colors
2. ✅ Created 4 custom SVG icons
3. ✅ Updated navbar to light background (#FAF8F5) with dark text
4. ✅ Updated footer to midnight blue background (#11172A) with off-white text
5. ✅ Simplified skills section to ordered list with hover effects
6. ✅ Added modern card-based grid layout for projects
7. ✅ Fixed radial gradients to use new color palette
8. ✅ Added back-to-top button styles
9. ✅ Main text colors changed to midnight blue for readability
10. ✅ Profile picture shadow changed to sage green
11. ✅ Added hero section typography (hero-title, hero-subtitle, hero-tagline)
12. ✅ Ensured consistent styling across all breakpoints

## Files Modified
- Portfolio.css (main stylesheet)
- About.css
- Services.css
- Contact.css
- index.html (replaced Font Awesome icons with SVG images)
- Images/ (added 4 SVG icon files)

## Notes
- Art.css was NOT modified to avoid affecting photograph display
- All pages use radial gradients (not linear)
- No mix-blend-mode effects (abandoned due to issues)
- Responsive design: Mobile-first with breakpoints at 1026px and 1600px
