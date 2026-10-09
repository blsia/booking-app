# Use Node.js 20 Alpine image as base
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
# Dari yang sebelumnya seperti ini:
# RUN npm ci

# Ubah menjadi seperti ini:
RUN --mount=type=cache,target=/root/.npm npm ci

# Copy source code
COPY . .

# Set environment variables for Prisma
ENV POSTGRES_URL="postgresql://localhost:5432/fakedb"
ENV POSTGRES_URL_NON_POOLING="postgresql://localhost:5432/fakedb"

# Generate Prisma client
RUN npx prisma generate

# Build Next.js application
RUN npm run build

# Production image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy package files and install production dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Copy built Next.js files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/components ./components
COPY --from=builder /app/app ./app
COPY --from=builder /app/src ./src
COPY --from=builder /app/types ./types

# Expose port
EXPOSE 3000

# Start the application
# Contoh di stage runner Dockerfile
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
