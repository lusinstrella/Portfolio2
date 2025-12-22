# Bootstrap Optimization Guide

## Current Situation

Your portfolio loads the **full Bootstrap 5.2.3** library:
- **Size**: ~160 KB (minified + gzipped)
- **Problem**: You only use a small portion of Bootstrap

## Components You Actually Use

Based on reviewing your HTML files, you're using:

### ✅ Used Components
- **Navbar** (navbar, navbar-toggler, nav-link)
- **Offcanvas** (offcanvas, offcanvas-body, offcanvas-header)
- **Container** (container, container-fluid)
- **Button close** (btn-close)
- **Grid utilities** (flex, align-items, justify-content, gap, etc.)

### ❌ Unused Components (90% of Bootstrap!)
- Accordion
- Alerts
- Badges
- Breadcrumb
- Buttons (besides btn-close)
- Cards
- Carousel
- Dropdowns
- Forms
- List groups
- Modal
- Pagination
- Popovers
- Progress bars
- Scrollspy
- Spinners
- Tables
- Tabs
- Toasts
- Tooltips

## 🎯 Optimization Strategy

You have 3 options:

### Option 1: Custom Bootstrap Build (Best)
Create a custom Bootstrap with only what you need.

**Savings**: ~120 KB (75% reduction!)

### Option 2: PurgeCSS (Good)
Automatically remove unused CSS from Bootstrap.

**Savings**: ~110 KB (69% reduction!)

### Option 3: Replace with Custom CSS (Advanced)
Write custom CSS to replace Bootstrap components.

**Savings**: ~160 KB (100% reduction!)

---

## 🚀 Option 1: Custom Bootstrap Build

### Step 1: Visit Bootstrap Customizer

Go to: https://getbootstrap.com/docs/5.2/customize/sass/

### Step 2: Select Only What You Need

**Enable these modules**:
- ✅ Reboot
- ✅ Grid
- ✅ Containers
- ✅ Navbar
- ✅ Offcanvas
- ✅ Close button
- ✅ Utilities (spacing, display, flex)

**Disable everything else**:
- ❌ Accordion
- ❌ Alerts
- ❌ Badges
- ❌ Breadcrumb
- ❌ Buttons (keep only close)
- ❌ Cards
- ❌ Carousel
- ❌ Dropdowns
- ❌ Forms
- ❌ Modal
- ❌ Etc.

### Step 3: Download Custom Build

1. Click "Download"
2. Save as `bootstrap-custom.min.css`
3. Upload to your website

### Step 4: Update HTML

Replace in all HTML files:

**Before**:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

**After**:
```html
<link rel="stylesheet" href="bootstrap-custom.min.css">
```

---

## 🧹 Option 2: PurgeCSS (Automated)

PurgeCSS automatically removes unused CSS.

### Step 1: Install PurgeCSS

```bash
npm install -g purgecss
```

### Step 2: Download Bootstrap

```bash
cd /Users/fulviaserra/Desktop/Portfolio-Code
curl -o bootstrap.min.css https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
```

### Step 3: Run PurgeCSS

```bash
purgecss --css bootstrap.min.css \
         --content *.html \
         --output bootstrap-purged.min.css
```

### Step 4: Update HTML

```html
<link rel="stylesheet" href="bootstrap-purged.min.css">
```

---

## ✏️ Option 3: Custom CSS (Replace Bootstrap)

Write your own CSS for the components you need.

### Navbar Custom CSS

Replace Bootstrap navbar with this:

```css
/* Custom Navbar - Replace Bootstrap */
.navbar {
  background-color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-nav {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--text);
  text-decoration: none;
  font-size: 1.2rem;
  transition: border-bottom 0.3s;
}

.nav-link:hover {
  border-bottom: 2px solid var(--elem2);
}

/* Mobile Menu */
@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: var(--bground);
    padding: 2rem;
    transition: right 0.3s;
  }

  .navbar-nav.active {
    right: 0;
  }
}
```

### Offcanvas Custom CSS

```css
/* Custom Offcanvas - Replace Bootstrap */
.offcanvas {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: var(--bground);
  transition: right 0.3s;
  z-index: 1050;
  overflow-y: auto;
}

.offcanvas.show {
  right: 0;
}

.offcanvas-header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

.offcanvas-body {
  padding: 1rem;
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
```

### Container Custom CSS

```css
/* Custom Container - Replace Bootstrap */
.container,
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.container {
  max-width: 1140px;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### Utility Classes

```css
/* Flexbox Utilities */
.d-flex { display: flex; }
.flex-grow-1 { flex-grow: 1; }
.align-items-center { align-items: center; }
.justify-content-end { justify-content: flex-end; }
.justify-content-center { justify-content: center; }
.justify-content-around { justify-content: space-around; }
.flex-direction-column { flex-direction: column; }

/* Spacing Utilities */
.pe-3 { padding-right: 1rem; }
.me-3 { margin-right: 1rem; }
```

---

## 📊 Comparison

| Method | Effort | Savings | Compatibility |
|--------|--------|---------|---------------|
| Custom Bootstrap Build | Low | ~120 KB | Perfect |
| PurgeCSS | Medium | ~110 KB | Perfect |
| Custom CSS | High | ~160 KB | Requires testing |

## 🎯 Recommended Approach

**For Your Portfolio**: Use **Option 1 (Custom Bootstrap Build)**

Why:
1. Easiest to implement
2. Maintains Bootstrap functionality
3. No code changes needed
4. 75% file size reduction
5. Future-proof

## 📝 Implementation Checklist

### Option 1: Custom Bootstrap
- [ ] Visit Bootstrap customizer
- [ ] Select only: Navbar, Offcanvas, Container, Grid, Utilities
- [ ] Download custom build
- [ ] Save as `bootstrap-custom.min.css`
- [ ] Update all HTML files with new link
- [ ] Test all pages
- [ ] Verify navbar/offcanvas work
- [ ] Check responsive behavior

### Option 2: PurgeCSS
- [ ] Install Node.js (if needed)
- [ ] Install PurgeCSS globally
- [ ] Download Bootstrap CSS
- [ ] Run PurgeCSS command
- [ ] Update HTML files
- [ ] Test thoroughly

### Option 3: Custom CSS
- [ ] Write custom navbar CSS
- [ ] Write custom offcanvas CSS
- [ ] Write custom container CSS
- [ ] Write utility classes
- [ ] Add JavaScript for mobile menu
- [ ] Test all functionality
- [ ] Update all HTML files

## 🆘 Troubleshooting

### Navbar breaks after optimization
- Verify navbar classes are included in custom build
- Check JavaScript is still loaded for togglers
- Test mobile menu functionality

### Offcanvas doesn't work
- Ensure offcanvas CSS/JS are included
- Check Bootstrap JS bundle is loaded
- Verify data-bs-* attributes are correct

### Layout looks different
- Compare before/after screenshots
- Check container widths
- Verify utility classes work

## 📚 Resources

- [Bootstrap Customizer](https://getbootstrap.com/docs/5.2/customize/sass/)
- [PurgeCSS Documentation](https://purgecss.com/)
- [Bootstrap Source Files](https://github.com/twbs/bootstrap)
- [Custom Bootstrap Generator](https://bootstrap.build/)

---

## ⚡ Quick Win: CDN to Self-Hosted

Even without customization, self-hosting Bootstrap can improve performance:

1. Download: https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
2. Save to your website as `bootstrap.min.css`
3. Update HTML:
   ```html
   <link rel="stylesheet" href="bootstrap.min.css">
   ```

**Benefits**:
- One less external request
- Better caching control
- Works offline
- No CDN dependencies

---

**Pro Tip**: Start with Option 1 (Custom Build) for quickest wins with minimal effort!
