# Indiana Jones: The Pinball Adventure

[View on FlutterCatch](https://fluttercatch.com/machine/indiana-jones-the-pinball-adventure) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Complete E-N-T to open the idol and lock three balls. During Multiball, shoot the sinkhole or left ramp to light each regular Jackpot, collect it at the right ramp, and finish the set at the captive-ball Super Jackpot.

### Steps

- Test the mode saucer, both ramps, and the E-N-T reject while ball save is active.

- Complete E-N-T, then shoot the opened sinkhole to lock a ball. Repeat until the third lock starts Multiball.

- During Multiball, shoot the sinkhole or left ramp to light the current jackpot, then collect it at the right ramp.

- Only with another ball controlled, park one or two balls in the idol for a 2x or 3x regular-jackpot collect; this is not a playfield multiplier.

- Collect the Ark, Stones, and Grail jackpots, then hit the captive ball for the Super Jackpot.

Details

- Regular Multiball order: Light at the sinkhole or left ramp, collect at the right ramp, and finish the three-jackpot set at the captive ball.

- After multiball, use the mode saucer or a ready Quick Multiball instead of immediately rebuilding through a dangerous E-N-T bank.

### Quick Info

- Regular Multiball

Summary

Complete E-N-T and lock three balls; the Ark, Stones, and Grail jackpots begin at 20M, 30M, and 40M.

- Idol jackpot multiplier

Summary

Parking one or two balls in the idol raises only the regular jackpot to 2x or 3x until its collect or 20-second release.

- Quick Multiball

Summary

Repeated captive-ball target hits start a timed two-ball treasure collect.

### Fallback

Alternative route: Quick Multiball treasures

When

Use this when the E-N-T bank or lock sinkhole rejects dangerously.

Steps

- Hit the captive-ball target until Quick Multiball starts.

- Repeat the captive ball to collect persistent treasures while two balls protect the shot.

- Return to the safest lit mode or Path of Adventure after the timer ends.

## Full strategy

### Summary

Complete E-N-T to open the idol and lock three balls. During Multiball, shoot the sinkhole or left ramp to light each regular Jackpot, collect it at the right ramp, and finish the set at the captive-ball Super Jackpot.

### Quick Info

- Regular Multiball

Summary

Complete E-N-T and lock three balls; the Ark, Stones, and Grail jackpots begin at 20M, 30M, and 40M.

- Idol jackpot multiplier

Summary

Parking one or two balls in the idol raises only the regular jackpot to 2x or 3x until its collect or 20-second release.

- Quick Multiball

Summary

Repeated captive-ball target hits start a timed two-ball treasure collect.

- Path of Adventure

Summary

Complete ADVENTURE and shoot the right ramp for the flipper-steered upper playfield.

- Path modes and Multiball

Summary

Regular Multiball suspends a running Three Challenges or Steal the Stones mode. Finish either before the third lock; ramp shots during Multiball can still change the selected mode while it is suspended.

- Eternal Life Multiball

Summary

Complete all twelve scene modes, then shoot the mode saucer for the six-ball wizard feature.

### Steps

- Test the mode saucer, both ramps, and the E-N-T reject while ball save is active.

- Complete E-N-T, then shoot the opened sinkhole to lock a ball. Repeat until the third lock starts Multiball.

- During Multiball, shoot the sinkhole or left ramp to light the current jackpot, then collect it at the right ramp.

- Only with another ball controlled, park one or two balls in the idol for a 2x or 3x regular-jackpot collect; this is not a playfield multiplier.

- Collect the Ark, Stones, and Grail jackpots, then hit the captive ball for the Super Jackpot.

Mode Notes

- Regular Multiball order: Light at the sinkhole or left ramp, collect at the right ramp, and finish the three-jackpot set at the captive ball.

- After multiball, use the mode saucer or a ready Quick Multiball instead of immediately rebuilding through a dangerous E-N-T bank.

### Fallback

Quick Multiball treasures

When

Use this when the E-N-T bank or lock sinkhole rejects dangerously.

Steps

- Hit the captive-ball target until Quick Multiball starts.

- Repeat the captive ball to collect persistent treasures while two balls protect the shot.

- Return to the safest lit mode or Path of Adventure after the timer ends.

### Alternatives

- Mode and Path position play

When

Use this when the mode saucer and right ramp are safer than the center lock bank.

Steps

- Shoot the mode saucer and follow the lit mode shots.

- Complete ADVENTURE and take the right ramp for Path of Adventure.

- Finish the upper-playfield path before starting regular Multiball.

### Builds Toward

Eternal Life Multiball

Steps

- Start and complete all twelve scene modes at the mode saucer.

- Return to the mode saucer after all twelve are spotted.

- Use Eternal Life Multiball's six balls to hit every lit switch, including Path of Adventure switches.

### Techniques

- Idol jackpot control

Instruction

Park a ball in the idol only when another ball is controlled for the lit right-ramp jackpot; the 20-second release can erase the multiplier.

Source Url

[Source](https://www.pinball.org/rules/indianajones.html)

### Cautions

- Issue

Regular Multiball suspends Three Challenges or Steal the Stones, but its ramp shots can still change the selected mode.

Response

Finish either Path of Adventure mode before the third lock so Multiball does not disrupt its completion or leave the wrong mode selected.

Source Url

[Source](https://www.pinball.org/rules/indianajones.html)

- Issue

Rules and bugs differ substantially across early and production ROMs.

Response

Use installed L-7 behavior for locks, jackpots, timers, and operator-adjustable awards.

Source Url

[Source](https://www.pinball.org/rules/indianajones.html)

### Check Before Play

- Confirm production L-7 code, Easy Multiball, Extra Ball and buy-in settings, mode difficulty, Path timer, and ball save.

- Confirm E-N-T reset behavior, physical locks, idol release timer, jackpot bases, raise-jackpot total, and captive-ball Super values.

- Test E-N-T, lock sinkhole and eject, both ramps, mode saucer, captive ball, Path controls, orbits, and all return feeds.

### Simple Overview

Indiana Jones: The Pinball Adventure uses E-N-T to open the idol for three regular Multiball locks. During Multiball, shoot the sinkhole or left ramp to light the current Jackpot, collect it at the right ramp, and complete the Ark, Stones, and Grail set before hitting the captive ball for Super Jackpot.

### Overview

Indiana Jones: The Pinball Adventure uses E-N-T to open the idol for three regular Multiball locks. Use E-N-T and three idol locks for the repeatable Jackpot route, finishing each light, right-ramp collect, and captive-ball Super in order. Complete Three Challenges or Steal the Stones before the third lock because regular Multiball suspends those running modes.

### Machine Setup

- Confirm production L-7 code, Easy Multiball, Extra Ball and buy-in settings, mode difficulty, Path timer, and ball save.

- Confirm E-N-T reset behavior, physical locks, idol release timer, jackpot bases, raise-jackpot total, and captive-ball Super values.

- Test E-N-T, lock sinkhole and eject, both ramps, mode saucer, captive ball, Path controls, orbits, and all return feeds.

## Sources

- [Indiana Jones: The Pinball Adventure rulesheet](https://www.pinball.org/rules/indianajones.html)
- [Planetary Pinball Indiana Jones L-7 ROM notes](https://www.planetarypinball.com/mm5/Williams/tech/roms/indyjones.html)
- [Dave Stewart at NWPC 2017](https://pinballvideos.com/v/1618/20294)

## Playfield

[View the current playfield image](https://img.opdb.org/963f55d0-5cb2-449c-a064-d5a03ef7a4ad-large.jpg).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
