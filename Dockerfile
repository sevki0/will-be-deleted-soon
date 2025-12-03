# --- Dockerfile for Next.js ---
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm install --production --ignore-scripts --prefer-offline || yarn install --production || pnpm install --prod

# Copy application files
COPY . .

# Build Next.js app
RUN npm run build

# --- Production image ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files and node_modules from build stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
