# Milford Asset Management — structure explorer

A navigable, single-page map of Milford Asset Management's board, group
executive, investment and client teams: who does what, likely responsibilities
and skills, and reporting lines — with the source behind every claim.

**Independent reconstruction from public sources. Not affiliated with, endorsed
by, or verified by Milford Asset Management.**

## Running it

It is static — no build step, no dependencies.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` straight off disk works too; the photo manifest is skipped
under `file://` and everyone shows a monogram.

## Publishing on GitHub Pages

`.github/workflows/pages.yml` deploys the repo root on every push to `main`.
Enable it once at **Settings → Pages → Build and deployment → Source: GitHub
Actions**. The workflow validates the dataset (every `reportsTo` must resolve)
before deploying.

## Layout

```
index.html                  page shell and the four tabs
data/people.js              the entire dataset — 30 people + a news timeline
assets/js/app.js            rendering, filtering, deep-linked profile drawer
assets/css/style.css        Milford brand palette
assets/avatars/*.svg        generated monograms, one per person
assets/photos/              drop real photographs here (see its README)
tools/photos.js             regenerates assets/photos/manifest.json
```

Everything is driven by `data/people.js`. Editing a person there updates the org
chart, the directory, the search index and their profile together.

## What is fact and what is inference

The site labels this on every profile, and the *Sources & method* tab explains
it in full:

| Badge | Meaning |
| --- | --- |
| **Evidenced** | Stated on a public page — a Milford bio, a company announcement, or a news report. |
| **Part evidenced, part inferred** | The role is public; some listed duties are the ordinary scope of that role rather than a published fact. |
| **Inferred** | A reasoned assumption from title, remit and industry norms. A hypothesis, not a fact. |

Two things to be clear about:

- **Milford does not publish an org chart.** Board composition and the CEO's
  accountability to the board are structural. Everything below the executive
  layer is inference from published remits, and is badged accordingly.
- **The "likely skills & toolset" lists are inference throughout.** They are
  drawn from each person's published background and the normal requirements of
  the role — not a claim about what anyone actually uses.

## Photographs

The faces are generated monograms in Milford's brand palette, not photographs.
LinkedIn serves member photos from an authenticated CDN that blocks hotlinking
and prohibits scraping, and the environment this was built in had no outbound
network access to LinkedIn or to milfordasset.com. Each profile links out to the
person's LinkedIn page or public Milford bio where one was found.

To add real photographs you are entitled to use, see
[`assets/photos/README.md`](assets/photos/README.md).

## Sources

Milford's [New Zealand](https://milfordasset.com/about-us/team) and
[Australian](https://milfordasset.com.au/about-us/our-team/) team pages, public
LinkedIn profile listings, and trade press including BusinessDesk, Good Returns,
Investment News NZ, Money Management, InvestorDaily and NBR. Per-person source
lists are in each profile and in `data/people.js`.

Brand colours — `#E47126` (Zest), `#EFA163` (Sandy brown), `#303C42` (Outer
Space) — per [Brandfetch's record for milfordasset.com](https://brandfetch.com/milfordasset.com).

Research pass: 28 August 2026. People move; treat everything here as a snapshot.
