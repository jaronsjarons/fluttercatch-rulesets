# Contributing to FlutterCatch rulesets

A useful correction tells us what a player should do differently, which
machine and version it applies to, and how to verify it. An issue is enough
if you would rather describe the change than edit JSON.

## Rules and sources

Write in your own words. Cite the original rulesheet, manual, code notes, or
complete tutorial that verifies the change. Include a page, section, or video
timestamp in your issue or pull request. Do not paste third-party articles,
manuals, transcripts, or forum posts into the repository.

Preserve counts, shot names, conditions, order, uncertainty, edition differences,
and ROM differences. Explain the physical action and its result. A source
proving that a feature exists does not necessarily prove it is the best route.
Separate factual corrections from suggestions about which strategy to teach.

Keep evidence links in source fields. Gameplay instructions should explain
the game directly. Include only the useful details: no minimum length or
required number of modes, alternatives, or wizard goals.

Check Simple and Full separately after changing a rule. Simple must still
explain a complete, playable route. In `simple.json`, edit `content` and retain
`input`: it identifies the underlying strategy and prevents a correction from
being applied to the wrong ROM or edition. If the underlying strategy also
changes, the maintainer regenerates the input during integration.

`editions.json` and `modes.json` contain complete resolved views for the
special cases. Edit their `strategy` fields and retain IDs and `input` data.
The application checks the input before applying a version-specific change.

## Playfield mappings

`mappings.json` contains the published references removed from `ruleset.json`.
Keep each entry's `path`, which identifies its strategy or ROM. A mapping has
a term, label, description, and optionally confirmed coordinates.

Mapping coordinates use percentages of the **published image**. `xPercent`
and `yPercent` are the **center** of a highlight. `widthPercent` and
`heightPercent` are its full size. The origin is the top-left corner.
For example, x=50, y=25, width=10, height=8 covers x=45–55 and y=21–29.

Use `precision: "unverified"` with no coordinates for a shot that has not
been visually checked. Confirm the exact edition, image, and flipper positions
before adding coordinates. Preserve separate regions when a term has multiple
locations. If the image changes, verify every affected mapping again.

## Crops and images

Crop coordinates differ from highlight coordinates: crop x/y identify the
**top-left** of the crop in the source image. Width and height are percentages
of that source. Rotation and perspective values preserve the original review
recipe. `matchesPublishedImage: false` means the historical crop is not the
current image; do not apply it blindly.

To contribute a photo:

1. Use a clear full-playfield view of the exact machine, with both flippers visible.
2. Add `playfield.webp`, `playfield.jpg`, or `playfield.png` inside the machine folder (maximum 10 MB).
3. Set `file`, dimensions, SHA-256, creator, source URL, open license, and public permission evidence in `image.json`.
4. Use `rightsStatus: "licensed"` only after permission is documented. Supported initial licenses are CC0-1.0, CC-BY-4.0, and CC-BY-SA-4.0.
5. Describe the crop and review the mappings against the resulting image.

An externally hosted image can remain a reference with `file: null` and
`rightsStatus: "permission-required"`. Do not copy it into the repository or
claim a license without the owner's permission. Cropping does not change that.
Do not include private permission correspondence; a maintainer can review it
privately and publish an agreed public permission statement.

## Checks and review

```sh
npm run check
```

The workflow validates machine IDs, JSON shape, basic rules structure,
coordinate bounds, crop dimensions, unsafe URLs, image hashes, and permission
records. It produces a `ruleset-preview` artifact with readable Markdown and a
JSON bundle. Automated checks cannot verify pinball truth or copyright ownership;
those require maintainer review. Contributors' workflows receive no production
deployment credentials.

Maintain attribution when editing. By submitting your own contributions, you
agree to license ruleset content and data under CC BY-SA 4.0 and tooling under
MIT. Third-party image licenses remain attached to their individual assets.
Contributors retain ownership of their work. Do not grant rights you do not hold.

Accepted corrections are imported at a specific Git commit, checked against
newer local work, and included in a verified FlutterCatch release. Image and
crop changes also need visual review and media preparation before publication.
