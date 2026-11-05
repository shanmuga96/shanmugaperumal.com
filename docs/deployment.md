# Deployment

The site is a static export hosted on GitHub Pages at <https://shanmuga96.github.io/shanmugaperumal.com/>.

## How It Deploys

Every push to `main` runs [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which:

1. Builds the static export into `out/`, with `PAGES_BASE_PATH` set to the repository name.
2. Uploads `out/` and deploys it to the `github-pages` environment.

To release, merge a feature branch into `dev`, then open a pull request from `dev` to `main`.

To redeploy without a code change, run the workflow manually from the Actions tab, or use:

    gh workflow run deploy.yml --ref main

## Repository Setting

Under **Settings → Pages**, **Source** must be set to **GitHub Actions**. This only needs to be done once.

## Base Path

GitHub Pages serves this site from a sub-path, so `next.config.ts` reads `basePath` from `PAGES_BASE_PATH`. The variable is unset during local development, so the site runs at `/`.

`next/link` and statically imported images pick up the base path automatically. A plain `<a>`, `<img>`, or `next/image` with a string `src` pointing to a root-relative path does not, and will break on the live site.

## Testing a Production Build Locally

Run these commands in Git Bash. Build with the base path:

    MSYS_NO_PATHCONV=1 PAGES_BASE_PATH=/shanmugaperumal.com npm run build

`MSYS_NO_PATHCONV=1` stops Git Bash on Windows from rewriting the value into a Windows path, which fails the build. It has no effect on macOS or Linux.

Then serve `out/` from a folder with the same name as the base path, so the URLs match the live site. The folder sits outside the repository so that it can't be committed:

    mkdir -p ../pages-preview
    cp -r out ../pages-preview/shanmugaperumal.com
    npx serve ../pages-preview

Open <http://localhost:3000/shanmugaperumal.com/>, and delete `../pages-preview` when you are done.

## Moving to a Custom Domain

1. Register the domain and add its DNS records. See the [GitHub Pages custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Remove `PAGES_BASE_PATH` from `.github/workflows/deploy.yml`.
3. Add the domain under **Settings → Pages → Custom domain**, then enable **Enforce HTTPS**.
4. Update the URL at the top of this page.
