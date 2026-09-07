# FlutterCatch rulesets

Community-editable pinball rules and strategies from [FlutterCatch](https://fluttercatch.com).

Browse [750 machine guides](CATALOG.md), suggest a correction through an
[issue](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose),
or submit a pull request. Pinball knowledge is welcome; you do not need to
write software to report a rule, improve an explanation, or identify a shot.

Each machine has Full Strategy content, the separate Simple view, public
sources, applicable ROM and edition differences, playfield mappings, image
credits, and any recorded crop recipe. The five original FlutterCatch guides
are included alongside the 745 catalog guides.

```text
machines/aerosmith/
  ruleset.json     Full rules, ROM options, and source citations
  simple.json      Simple views; edit content, preserve input
  mappings.json    Shot labels and verified highlight rectangles
  editions.json    Edition-specific rules, when applicable
  modes.json       Separate game-mode rules, when applicable
  image.json      Image link, credit, dimensions, and rights record
  crop.json       Recorded source-image crop and corrections
  README.md       Generated readable guide
```

The ruleset JSON is editable source. Machine READMEs are generated snapshots;
run `npm run build` to refresh them after changing the data. CI also creates a
downloadable Markdown preview of every proposed revision. JSON files in the
pull request are the authoritative change when a generated README is stale.

## Contribute

1. Find the machine in [the catalog](CATALOG.md).
2. Explain the correction and identify the relevant edition, code, and source.
3. Open an issue, or edit the relevant JSON file and submit a pull request.
4. A maintainer checks the rule and reviews the automated validation results.

See [CONTRIBUTING.md](CONTRIBUTING.md) for mapping coordinates, source guidance,
image permissions, and the review process.

## Use the collection

Node.js 22 or newer is sufficient; no dependencies or private credentials are
needed.

```sh
npm run check
```

This validates the collection, runs the tooling tests, generates readable
machine pages, and writes `dist/rulesets.json`. Downstream applications can
consume a specific Git commit or the JSON bundle produced by CI.

FlutterCatch imports reviewed revisions into its private application using a
pinned commit and field-level conflict checks. Website publication follows
the application's release checks. A pull request or passing data check alone
does not establish that a gameplay rule is correct or publish it to the site.

## Images and licensing

Ruleset text, documentation, crops, and mapping data are **CC BY-SA 4.0**.
Validation and build tools are **MIT**. See [LICENSE](LICENSE) for attribution
and exclusions.

Existing image references retain their original owners' rights. The initial
collection records their links and credits, but includes no image binaries
because repository redistribution permission has not yet been documented.
Contribute your own photos or a documented openly licensed image, with the
license and creator recorded in `image.json`. Permission to display a photo
on FlutterCatch is not automatically permission to release it under CC BY-SA.

The website application, private research, transcripts, and internal review
records are maintained separately. This collection has its own clean history.
