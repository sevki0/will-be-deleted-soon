# --- Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install all dependencies including devDependencies
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm install

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files and only production node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies in final image
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
