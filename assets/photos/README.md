# Profile photographs

The page ships with generated monogram avatars in Milford's brand palette
(`assets/avatars/<slug>.svg`). They are placeholders.

## Using real photographs

1. Drop a file named `<slug>.jpg` into this directory.
2. Run `node tools/photos.js` from the repo root.

That regenerates `manifest.json`, which is the list the page reads. Anyone not
in the manifest keeps their monogram, and the page makes no request for a file
that isn't there. If a listed file later goes missing, the page still falls back
to the monogram rather than showing a broken image.

The slug is the person's `slug` field in `data/people.js`, e.g.:

    assets/photos/blair-turnbull.jpg
    assets/photos/wayne-gentle.jpg
    assets/photos/renee-hector.jpg

Square images of about 320×320px work best.

To use a different extension, change `PHOTO_EXT` at the top of
`assets/js/app.js`.

## Why photographs are not included

LinkedIn member photographs are served from an authenticated CDN
(`media.licdn.com`) that blocks hotlinking, and LinkedIn's terms prohibit
scraping profile content. Milford's own team pages carry photographs that are
Milford's copyright. Neither was retrievable from the build environment, which
had no outbound network access to either domain.

If you want the real images here, the practical options are:

1. Ask Milford for the team photographs (they are used publicly on
   milfordasset.com and milfordasset.com.au).
2. Save the images you are entitled to use manually and place them here.

Do not bulk-download LinkedIn photographs — that breaches LinkedIn's user
agreement regardless of how it is automated.
