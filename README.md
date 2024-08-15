# End-to-End-Inventory-Management-Dashboard-Nextjs-Nodejs-AWS

### Tools used and their initialization

- Node.js
- VSCode
- Browser Extensions:
    - Redux Dev Tools
    - Pesticide for Chrome
- inside the client run the following to install the necessary libraries:
    - `npm i @mui/x-data-grid @mui/material @emotion/react @emotion/styled lucide-react numeral recharts uuid axios`
    - `npm i -D @types/node @types/uuid @types/numeral` - these are types necessary for Typescript
    - `npm i -D tw-colors` for setting up dark mode

### Notes
- In the app directory
    - `page.tsx` - this is where our first page is shown
    - `layout.tsx` - is where the root exists
    - when we configured the nextJS project in the beginning we defined '@' in the path to indicate the src dir, so we can write for example, '@/app/dashboard/page' to the Dashboard component
    - to create the skelaton/boilerplate code for a new comonent in a page.tsx write `tsrafce` and enter
    - In the final layout the sidebar and the navbar are always present on any page/route so we set them up in the `layout.tsx`
    - `md:pl-24` - a media breakpoint in tailwind css, so that whenever we cross the medium width it sets padding left to 24px
    - import Navbar from "@/app/(components)/Navbar" - so that nextjs doesn't register it as a url
    - `<div className="hidden md:flex justify-between items-center gap-5">` the styles here have the following meaning:
        - by default set display:none property
        - when the screen size is medium or larger set the display:flex property