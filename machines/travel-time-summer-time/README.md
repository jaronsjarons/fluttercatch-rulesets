# Travel Time / Summer Time

[View on FlutterCatch](https://fluttercatch.com/machine/travel-time-summer-time) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Plunge the center lane for time on every ball. Complete either letter set, dribble the ball into the lit upkicker for more time, and use the resulting center-saucer feed to stop the clock before building the next set.

### Steps

- Plunge the center lane for 10 time units every time the ball reaches the shooter lane.

- Read the upkicker feed on the first cycle and confirm whether it reliably lands in the Stop Clock saucer.

- While the clock is stopped, finish the nearer either letter set set with controlled shots.

- Let the ball dribble from a flipper into the lit upkicker instead of firing a hard direct shot.

- Collect 25 time units and 5,000 at the upkicker.

- Use the upkicker's feed into the center saucer to stop the clock again.

- Repeat the letter-set, upkicker, and Stop Clock cycle while the feed remains reliable.

### Quick Info

- Timed game

Summary

The game starts with 1 minute 30 seconds and ends when the clock expires instead of after a fixed ball count.

- Center-lane skill shot

Summary

Every center-lane plunge adds 10 time units before the ball enters normal play.

- Stop Clock saucer

Summary

The center saucer stops the running clock and scores 5,000 when lit.

### Fallback

Alternative route: Recovery: Skill-shot and drain loop

When

Recovery pivot: Use this when the upkicker misses the Stop Clock saucer or the playfield is too slow to earn time faster than it expires.

Steps

- Make the center-lane skill shot for 10 time units.

- Do not cradle while the clock is running.

- Take one immediate useful shot or let the ball drain quickly.

- Use the next plunge to add another 10 time units.

- Return to the main loop only if the kickout feed improves.

### Warning

A weak upkicker can miss the Stop Clock saucer and restart the clock without protection.

Test the first feed, then switch to direct saucer shots or the skill-shot-and-drain loop if it fails repeatedly.

## Full strategy

### Summary

Plunge the center lane for time on every ball. Complete T-R-A-V-E-L or T-I-M-E, dribble the ball into the lit upkicker for more time, and use the resulting center-saucer feed to stop the clock before building the next set.

### Quick Info

- Timed game

Summary

The game starts with 1 minute 30 seconds and ends when the clock expires instead of after a fixed ball count.

- Center-lane skill shot

Summary

Every center-lane plunge adds 10 time units before the ball enters normal play.

- Stop Clock saucer

Summary

The center saucer stops the running clock and scores 5,000 when lit.

- Letter sets

Summary

Complete T-R-A-V-E-L or T-I-M-E, then enter the upkicker to add 25 time units and score 5,000.

- Clock maximum

Summary

The clock stops increasing at 2 minutes 55 seconds, so delay a ready time collect when already near the cap.

### Steps

- Plunge the center lane for 10 time units every time the ball reaches the shooter lane.

- Read the upkicker feed on the first cycle and confirm whether it reliably lands in the Stop Clock saucer.

- While the clock is stopped, finish the nearer T-R-A-V-E-L or T-I-M-E set with controlled shots.

- Let the ball dribble from a flipper into the lit upkicker instead of firing a hard direct shot.

- Collect 25 time units and 5,000 at the upkicker.

- Use the upkicker's feed into the center saucer to stop the clock again.

- Repeat the letter-set, upkicker, and Stop Clock cycle while the feed remains reliable.

### Fallback

Recovery: Skill-shot and drain loop

When

Recovery pivot: Use this when the upkicker misses the Stop Clock saucer or the playfield is too slow to earn time faster than it expires.

Steps

- Make the center-lane skill shot for 10 time units.

- Do not cradle while the clock is running.

- Take one immediate useful shot or let the ball drain quickly.

- Use the next plunge to add another 10 time units.

- Return to the main loop only if the kickout feed improves.

### Alternatives

- Position play: Direct Stop Clock control

When

When ahead, use this distinct scoreboard route: use this when the center saucer accepts a controlled direct shot and the clock is running.

Steps

- Shoot the center saucer before spending time on low-value switches.

- When the saucer stops the clock, complete the nearest letter set.

- Dribble into the upkicker to add time and attempt the normal saucer feed.

### Builds Toward

Self-sustaining clock loop

Steps

- Add time with the center-lane plunge.

- Stop the clock at the center saucer.

- Complete T-R-A-V-E-L or T-I-M-E while time is stopped.

- Collect 25 time units at the upkicker.

- Land the kickout in the Stop Clock saucer and repeat.

### Techniques

- Upkicker dribble

Instruction

Let the ball roll off the end of a controlled flipper into the upkicker instead of shooting across the opening.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

- Fast unavoidable drain

Instruction

If a center drain is certain while the clock runs, a quick flip-and-release can push the ball into the trough sooner and preserve time.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

- Clock-stopped letter work

Instruction

Use the center-saucer stop to aim deliberately at T-R-A-V-E-L or T-I-M-E without spending game time.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

### Cautions

- Issue

A weak upkicker can miss the Stop Clock saucer and restart the clock without protection.

Response

Test the first feed, then switch to direct saucer shots or the skill-shot-and-drain loop if it fails repeatedly.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

- Issue

A shallow or floaty setup can consume more time than the available shots return.

Response

Do not cradle while the clock runs; shoot, enter the upkicker, or drain quickly.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

- Issue

The red rollovers and the upkicker restart the clock.

Response

Plan the next shot before touching them and prioritize the Stop Clock saucer immediately after a time collect.

Source Url

[Source](https://rules.silverballmania.com/rules/GrJED-MJrwv)

### Check Before Play

- Confirm Travel Time, Summer Time, or Segasa edition.

- Read starting time, maximum time, and added-time settings.

### Simple Overview

Travel Time / Summer Time is a timed game rather than a fixed number of balls. Plunge the center lane for more time, complete T-R-A-V-E-L or T-I-M-E while the clock is stopped, then dribble the ball into the lit upkicker for 25 time units and use its feed into the center saucer to stop the clock again.

### Overview

Travel Time / Summer Time repeats one clock-management loop. Use every shooter-lane return for the center-lane time award, finish the nearer letter set while the clock is stopped, and enter the lit upkicker softly. Let its center-saucer feed stop the clock again, but delay another time collect when the clock is already near its 2:55 maximum.

### Machine Setup

- Confirm Travel Time, Summer Time, or Segasa edition.

- Read starting time, maximum time, and added-time settings.

## Editions

See [edition-specific rules](editions.json).

## Sources

- [Bob's Guide to Travel Time and Summer Time](https://rules.silverballmania.com/rules/GrJED-MJrwv)
- [Kineticist Travel Time and Summer Time rules](https://www.kineticist.com/games/pinball/travel-time-summer-time)
- [BMU Pinball EM-cyclopedia](https://tiltforums.com/uploads/default/original/2X/0/0093d7772690b6e81ab4badda51921259159d3dc.pdf)

## Playfield

[View the current playfield image](https://live.staticflickr.com/65535/54356106341_6f7467282e_b.jpg).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
