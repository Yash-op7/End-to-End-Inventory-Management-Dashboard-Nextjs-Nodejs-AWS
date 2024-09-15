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
    - `npm i react-redux @reduxjs/toolkit dotenv` - redux toolkit is just for reducing the boilter plate code of redux

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
    
= redux.tsx - taken from documentation, boilerplate

# backend - express and node, postgres and prisma
- mkdir server; cd server; npm init -y;
- first install postgresql and pgadmin 4 locally to test postgresql code (afterwards we'll use aws rds)
- local pg user: postgres and password is root.
- inside server:
    - `npm i prisma @prisma/client`
    - `npx prisma init`
    -  `npm i typescript`
    - `npx tsc --init`
    - `npm i -D ts-node typescript @types/node`
    - write the schema.prisma
    - write the seed.ts
    - run:
        - `npx prisma generate`
        - `npx prisma migrate dev --name init` 
- npm i:
    - express
    - body-parser: to parse our requests into json
    - cors - for cors issues
    - helmet - for securing our apis
    - dotenv - for env vars
    - morgan
    - concurrently: to run different variations of our dev server
    - rimraf: to help us run our package to build our typescript file when we want to run our ts server.

- set up package.json
- ```js
app.get('/hello', (req, res) => {
    res.send('hello world');
})
```
-> curl http://localhost:8000/hello -> hellow world

# AWS
- step 1: create a vpc:
    - let everything else as default, and choose 10.0.0.0/16 CIDR block
    - we'll place our services in this ip range, each service will have a range that we'll need
    - subnets will provide a range of ip in which services can be deployedkk
- step 2: create subnets:
    - we cannot deploy anything in our vpcs without subnets
    - subnets are just a set of ip addressses.
    - we need: a public subnet and a private subnet
    - public subnet:
        - availibility zone: ap-south-1a
        - cidr block: 10.0.1.0/24 - 256 addresses
    - private subnet:
        - ap-south-1b
        - 10.0.2.0/24
- step 3: internet gateway to provide access to public subnet, for a user client to access your vpc you need an internet gateway
- step 4: we need to attach route tables to the public and private subnets
