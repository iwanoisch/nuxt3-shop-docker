# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

How to start and run docker
```bash
# open docker desktop

# create image
docker build -t nuxt3 .

# run in a new container
docker run -it -p 3000:3000 nuxt3

# run docker
docker start <CONTAINER_NAME>

# stop docker
docker stop <CONTAINER_NAME>
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
