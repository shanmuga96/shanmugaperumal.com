# Development Setup

This guide explains how to set up and run Shanmugaperumal.com locally for development.

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

You can verify your installations with:

    node -v
    npm -v
    git --version

## Clone the Repository

Clone the repository and move into the project directory:

    git clone https://github.com/shanmuga96/shanmugaperumal.com.git
    cd shanmugaperumal.com

## Install Dependencies

Install the project dependencies using npm:

    npm install

## Run the Development Server

Start the Next.js development server:

    npm run dev

The application will be available at:

    http://localhost:3000

Open the URL in your browser to view the website.

## Development Workflow

This project follows a branch-based Git workflow with two long-lived branches:

- `dev` — integration branch; all work branches start here and merge back here
- `main` — production branch; `dev` is promoted to `main` when ready

Work branches use these prefixes:

- `feature/<feature-name>` — new features
- `fix/<bug-fix-name>` — bug fixes
- `chore/<name>` — cleanups, tooling, and documentation

Always start from the latest `dev`:

    git checkout dev
    git pull origin dev
    git checkout -b feature/<feature-name>

For example:

    git checkout -b feature/homepage-hero

After completing the work:

    git add .
    git commit -m "feat(home): implement homepage hero"
    git push origin feature/homepage-hero

Create a Pull Request into `dev` on GitHub and merge it after review. Then open a Pull Request from `dev` into `main` to release.

CI (lint and build) runs on pushes and Pull Requests to both `dev` and `main`.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, `ci:` …). Issues referenced with `Closes #<number>` are closed automatically when the change reaches `main`.

## Available Commands

### Development

    npm run dev

Starts the development server.

### Production Build

    npm run build

Creates a production build of the application. The site is configured as a static export (`output: "export"` in `next.config.ts`), so the build writes plain HTML, CSS and JS to the `out/` folder.

### Preview the Production Build

`npm run start` does not work with a static export. To preview the built site, serve the `out/` folder with any static file server, for example:

    npx serve out

Then open the URL it prints (usually http://localhost:3000).

### Lint

    npm run lint

Runs ESLint against the project.

## Project Structure

    src/
    ├── app/
    ├── components/
    │   ├── layout/
    │   └── ui/
    └── data/

    public/
    docs/

The `src/app` directory contains the application's routes and layouts.

Reusable components live under `src/components`: layout pieces (Navbar, Footer, Container) in `layout/` and shared building blocks in `ui/`.

Static data used across pages (such as social profile links) lives under `src/data`.

Project-specific documentation is maintained under `docs`.

## Environment Variables

If environment variables are required in the future, they should be documented here.

Local environment variables should be stored in:

    .env.local

Do not commit secrets, API keys, tokens, or other sensitive credentials to Git.

## Troubleshooting

### Dependencies are out of sync

Remove the installed dependencies and lock file, then reinstall.

On macOS/Linux:

    rm -rf node_modules package-lock.json
    npm install

On Windows PowerShell:

    Remove-Item -Recurse -Force node_modules
    Remove-Item package-lock.json
    npm install

### Port 3000 is already in use

Start the development server on another port:

    npm run dev -- -p 3001

Then open:

    http://localhost:3001

## Further Documentation

Additional project documentation will be added under the `docs/` directory as the application evolves.
