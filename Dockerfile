# Stage 1: Build the Angular app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire application
COPY . .

# Build the Angular app for production
RUN npm run build

# Stage 2: Serve with Caddy
FROM caddy:latest

# Copy built Angular app from builder stage
COPY --from=builder /app/dist/portfolio/browser /srv

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80 and 443
EXPOSE 5002

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
