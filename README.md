# Prestige’s component-based portfolio

This is a Next.js portfolio application—not one large HTML file. It separates page layout, reusable components, project content, and styling so that it stays easy to grow.

## Where to make your edits

| What you want to update | File |
| --- | --- |
| Add a project, change project details, or insert project links | `src/data/projects.ts` |
| Change the homepage wording | `src/app/page.tsx` |
| Change your personal story and skills | `src/app/about/page.tsx` |
| Add your email, GitHub, LinkedIn, and CV | `src/app/contact/page.tsx` and `src/components/Footer.tsx` |
| Change colours, spacing, and responsive styling | `src/app/globals.css` |
| Change navigation | `src/components/Header.tsx` |



## Add your CV

Put your PDF in `public/assets/` rename the path to match your file name.

## Run the site locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## To Add other projects later

Copy one project object in `src/data/projects.ts`, update its content, and it will automatically appear on both the homepage and the Projects page with its own project page.
