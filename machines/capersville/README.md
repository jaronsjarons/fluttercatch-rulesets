# Capersville

[View on FlutterCatch](https://fluttercatch.com/machine/capersville) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Read the stored balls before the plunge, hit the red bumper to close the zipper flippers, lock balls in the top saucers, then use the white bumper to start multiball.

### Steps

- Before the plunge, inspect both top saucers and the right chute for stored balls.

- If a saucer is empty and the right chute is empty, plunge toward that saucer.

- Otherwise, plunge through the center lane.

- Hit the red mushroom bumper to close the zipper flippers.

- Send controlled balls toward an empty top saucer while the right chute remains empty.

- Avoid the green bumpers after the flippers close.

- After the saucers hold balls, hit the red bumper again if the flippers are open.

- Hit the white bumper to release the locked balls and start multiball.

- Relock a controlled ball when an empty saucer is available during multiball.

### Quick Info

- Red bumper

Summary

The red mushroom bumper closes the zipper flippers and protects the center drain.

- Green bumpers

Summary

The three green bumpers reopen the flippers and advance the left-chute Zapper value.

- Blue bumper

Summary

The blue mushroom bumper opens the gate that admits the ball to the left chute.

### Fallback

Alternative route: Deep 4 chute recovery

When

Use this plan when a stored ball in the right chute prevents a saucer lock.

Steps

- Read the stored ball's position in the four-step right chute.

- Hit the white bumper once for each remaining chute step.

- Prepare for the ball to return to the shooter lane after the fourth step.

- Plunge the returned ball toward an empty saucer or the center lane.

### Warning

A green-bumper hit reopens the zipper flippers.

Avoid the green bumpers after the red bumper closes the flippers. Prepare for a center drain after any green hit.

## Full strategy

### Summary

Read the stored balls before the plunge, hit the red bumper to close the zipper flippers, lock balls in the top saucers, then use the white bumper to start multiball.

### Quick Info

- Red bumper

Summary

The red mushroom bumper closes the zipper flippers and protects the center drain.

- Green bumpers

Summary

The three green bumpers reopen the flippers and advance the left-chute Zapper value.

- Blue bumper

Summary

The blue mushroom bumper opens the gate that admits the ball to the left chute.

- White bumper

Summary

The white bumper releases locked balls or advances a ball through the four-step right chute.

- Stored state

Summary

Saucer locks and right-chute progress remain between balls and between games.

### Steps

- Before the plunge, inspect both top saucers and the right chute for stored balls.

- If a saucer is empty and the right chute is empty, plunge toward that saucer.

- Otherwise, plunge through the center lane.

- Hit the red mushroom bumper to close the zipper flippers.

- Send controlled balls toward an empty top saucer while the right chute remains empty.

- Avoid the green bumpers after the flippers close.

- After the saucers hold balls, hit the red bumper again if the flippers are open.

- Hit the white bumper to release the locked balls and start multiball.

- Relock a controlled ball when an empty saucer is available during multiball.

### Fallback

Deep 4 chute recovery

When

Use this plan when a stored ball in the right chute prevents a saucer lock.

Steps

- Read the stored ball's position in the four-step right chute.

- Hit the white bumper once for each remaining chute step.

- Prepare for the ball to return to the shooter lane after the fourth step.

- Plunge the returned ball toward an empty saucer or the center lane.

### Alternatives

- Zipper-first upper play

When

Use this plan when the lock entries reject balls or the stored state is unfavorable.

Steps

- Hit the red bumper to close the flippers.

- Send the ball toward the top without aiming through the green bumpers.

- Use the closed flippers to protect the center drain.

- Return to the lock plan when an empty saucer and an empty right chute are available.

### Builds Toward

Protected three-ball multiball

Steps

- Clear any stored ball from the right chute.

- Lock balls in the two top saucers.

- Close the zipper flippers with the red bumper.

- Hit the white bumper to release the locked balls.

### Techniques

- State-aware plunge

Instruction

Inspect both saucers and the right chute before each plunge. Choose an empty saucer only when the right chute is empty.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

- White-bumper timing

Instruction

Hit the white bumper after the flippers close. The same hit releases saucer locks or advances the right-chute ball.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

- Outlane-post nudge

Instruction

Nudge while the ball contacts the outlane-divider posts. Guide the ball inward toward a flipper without exceeding the tilt limit.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

### Cautions

- Issue

A green-bumper hit reopens the zipper flippers.

Response

Avoid the green bumpers after the red bumper closes the flippers. Prepare for a center drain after any green hit.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

- Issue

The wide-angle slingshot and outlane posts create frequent side drains.

Response

Nudge before the ball leaves the divider-post area. Keep the ball away from the outer slingshot face.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

- Issue

Stored locks and right-chute progress can belong to an earlier player or game.

Response

Inspect the stored state before the plunge. Use available progress, and do not assume that the machine starts empty.

Source Url

[Source](https://rules.silverballmania.com/rules/GrXex-MQk7l)

### Check Before Play

- Confirm 1966 Bally Capersville, ball count, tilt, replay and Special conversion, and whether a prior game left balls in the saucers or Deep 4 chute.

- Confirm that a top saucer locks only while Deep 4 is empty, the white bumper releases locks or advances Deep 4, and state persists between games.

- Test red, green, blue and white bumpers, zipper-flipper action, both saucer holds and releases, Deep 4 timing, left-chute gate, slingshots, and outlane feeds.

### Simple Overview

Capersville stores balls in two top saucers and keeps those locks between balls and games. Clear any stored ball from the right chute, hit the red bumper to close the zipper flippers, lock both saucers, then hit the white bumper to release the balls for Multiball.

### Overview

Capersville stores balls in two top saucers and keeps those locks between balls and games. Read the stored state before plunging, clear the right chute, and use the red bumper to close the flippers before filling both saucers. Hit the white bumper to release the locks; green bumpers reopen the flippers and advance the left-chute Zapper value.

### Machine Setup

- Confirm 1966 Bally Capersville, ball count, tilt, replay and Special conversion, and whether a prior game left balls in the saucers or Deep 4 chute.

- Confirm that a top saucer locks only while Deep 4 is empty, the white bumper releases locks or advances Deep 4, and state persists between games.

- Test red, green, blue and white bumpers, zipper-flipper action, both saucer holds and releases, Deep 4 timing, left-chute gate, slingshots, and outlane feeds.

## Sources

- [Bob's Guide to Capersville](https://rules.silverballmania.com/rules/GrXex-MQk7l)
- [Kineticist Capersville machine guide](https://www.kineticist.com/games/pinball/capersville)

## Playfield

[View the current playfield image](https://drgz1lvvatieiezu.public.blob.vercel-storage.com/site-media/v2/playfields/reviewed/GrXex.webp).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
