FROM oven/bun:1 AS base
WORKDIR /drona

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /drona/.next ./.next
COPY --from=prerelease /drona/package.json ./
COPY --from=prerelease /drona/bun.lockb ./

USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "start"]
