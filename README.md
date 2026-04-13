# Physical AI Lab — Academic Website

Production-quality academic website for a robotics/Physical AI professor, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to Vercel (recommended):

```bash
npx vercel
```

Or build for production:

```bash
npm run build
npm start
```

## Customizing for a Real Professor

### Files to edit first

| File | What to change |
|------|----------------|
| `data/people.ts` | Names, roles, emails, keywords, bios |
| `data/publications.ts` | Real papers, venues, links |
| `data/research.ts` | Research descriptions and contributions |
| `data/news.ts` | Real news items and dates |
| `app/layout.tsx` | Site title and meta description |
| `components/home/Hero.tsx` | Professor name, title, affiliation |
| `components/layout/Footer.tsx` | Address, email, department link |

### Replacing image placeholders

- Add real images to `/public/images/`
- Replace `<ImagePlaceholder>` with Next.js `<Image>` components
- For people cards: use `width={400} height={400}` square crops

### Changing the accent color

Search and replace `#1e3a5f` and `#2d5a9e` across all files.

## Folder Structure

```
app/                    # Next.js App Router pages
components/
  layout/              # Header, Footer
  ui/                  # Badge, SectionHeader, ImagePlaceholder
  home/                # Home page section components
data/                  # All editable content
lib/                   # Utilities
public/                # Static assets
```
