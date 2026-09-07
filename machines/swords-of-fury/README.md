# Swords of Fury

[View on FlutterCatch](https://fluttercatch.com/machine/swords-of-fury) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Lock three balls in the left lane to start Titan Multiball, then shoot the right ramp and flashing MAGIC drop target for Jackpot while the playfield is multiplied.

### Steps

- Start Titan Multiball

Shoot the lit left lock lane three times. The third lock starts Titan Multiball.

- Collect the Jackpot

During Titan Multiball, shoot the right ramp to reach the upper playfield, then hit the flashing MAGIC drop target for Jackpot.

- Use the playfield multiplier

Keep all three balls in play for 3x scoring on every score except Jackpot and Lionman. With two balls, those scores are 2x.

### Quick Info

- Stock locks

Summary

LA-2 begins with all three locks lit. Shoot the left lock lane three times to start Titan Multiball.

- Titan Multiball

Summary

Three locks start multiball. Stock 3x and 2x playfield scoring use short timers instead of lasting until another ball drains.

- Jackpot and Lionman Frenzy

Summary

Shoot the right ramp, then the flashing Magic target. The collect starts a frenzy at major switches except the left spinner.

## Full strategy

### Summary

On the V1 competition ROM, rip the Magic spinners until locks light, lock three balls at the left lane, shoot the right ramp during multiball, hit the flashing Magic target for Jackpot, then use Lionman Frenzy during persistent 3x or 2x play.

### Quick Info

- Competition lock qualification

Summary

Adjustment 47 requires 20 through 50 Magic-spinner spins, and the first lock preserves qualification for the remaining locks.

- Titan Multiball

Summary

Three left-lane locks start Titan Multiball, and v1.1 keeps 3x with three balls and 2x with two balls.

- Jackpot and Lionman Frenzy

Summary

Shoot the right ramp and flashing Magic drop to start a Jackpot frenzy at every major switch except the left spinner.

- Lionman

Summary

Repeat the unlit center ramp to raise Lionman, complete A-V-E-N-G-E-R, then collect the lit center ramp before its timer ends.

- Ogre's Alley

Summary

Use one side to advance and the other to collect, with v1.1 making 100,000 and 500,000 temporarily repeatable.

- Stock-code warning

Summary

Richie ROM v1.1 changes LA-2's lit starting locks and short multiball multiplier timers.

### Steps

- Use the plunge to test the mini-playfield flipper and all five Magic targets.

- Shoot the lower U-turn through its Magic spinners until locks light.

Mode Notes

- Lock Spins: Adjustment 47 requires 20 through 50 combined Magic-spinner spins to qualify all three locks.

- If the ball drains before the first lock, Lock Spins reset. After one ball locks, qualification remains for locks two and three.

- Each completed spin threshold also advances the left spinner value. That value resets at a drain and after Titan Multiball.

- After locks qualify, continue Magic-spinner shots only while the drain risk remains acceptable.

Mode Notes

- Frenzy Value: Each later Magic-spinner spin adds 100, up to 9,900. The Jackpot starts Lionman Frenzy and spends the built value at major switches.

- The Frenzy Value resets at a drain and after Titan Multiball. It cannot advance during Titan Multiball.

- Shoot the left lane three times to lock three balls and start Titan Multiball.

Mode Notes

- Titan Multiball: The third left-lane lock starts three-ball play. The game releases all three balls toward the upper flipper.

- Version 1.1 keeps 3x playfield scoring while three balls remain. It keeps 2x while two balls remain.

- Titan Multiball ends when one ball remains. Locks can be stolen in multiplayer play.

- Use the right flipper button to select the center-ramp diverter before a controlled ramp shot.

- During multiball, shoot the right ramp to enter the mini-playfield, then hit the flashing Magic target for Jackpot.

Mode Notes

- Jackpot: The right ramp starts the upper-playfield collect. The flashing drop target scores the static value from Adjustment 40.

- Adjustment 40 permits 1,000,000 through 4,000,000. A new installation needs one Jackpot collect before the chosen reset value appears.

- The Jackpot opportunity ends with Titan Multiball. A collected Jackpot starts Lionman Frenzy.

- After Jackpot, hit major switches while at least two balls remain.

Mode Notes

- Lionman Frenzy: Each major switch except the left spinner adds the built Frenzy Value to its normal score.

- Playfield 3x or 2x multiplies the Frenzy Value. The Frenzy ends with Titan Multiball.

- Use Magic spinners and Ogre's Alley during 3x when those feeds remain controlled.

- When one ball remains, rebuild Lock Spins or use the Lionman route.

### Fallback

Build and collect Lionman

When

Use this when the U-turn or left lock lane rejects toward a drain.

Steps

- Shoot the center ramp while Lionman is unlit.

- Repeat the unlit center ramp to raise Lionman through 100,000, 125,000, 175,000, 250,000, 350,000, 475,000, 625,000, 800,000, and 1,000,000.

- Hit each unlit A-V-E-N-G-E-R standup.

- Use either inlane to spot the next letter when its feed is safe.

- Complete A-V-E-N-G-E-R to light the center ramp.

- Shoot the center ramp before the Lionman timer ends.

- The collect resets Lionman to 100,000.

### Alternatives

- Richie ROM repeatable Ogre loop

When

Use this when the upper flipper gives a stable Ogre's Alley shot.

Steps

- Shoot the white Advance side until the value reaches 100,000 or 500,000.

- Shoot the green Collect side.

- Version 1.1 keeps the collected high value lit for a short repeat window.

- Repeat the loop until the window ends.

- Prefer this route during 3x or 2x playfield scoring.

- Magic value and Bonus X

When

Use this when the mini-playfield flipper and target resets are reliable.

Steps

- Hit each flashing Magic target once.

- Complete all five for the current Magic value and one Bonus X advance.

- Use U-turn spins to raise Magic by 50,000 per threshold.

- The value ranges from 50,000 through 250,000.

- A mini-playfield exit lowers Magic by 50,000 to its minimum.

- Repeat only while the longer target-reset delays remain manageable.

### Builds Toward

Qualified locks, a built Frenzy, and a 3x Jackpot phase

Steps

- Complete the required Lock Spins.

- Lock one ball to preserve qualification.

- Build Frenzy Value with more Magic-spinner spins.

- Lock the second and third balls.

- Start Titan Multiball with persistent 3x playfield scoring.

- Shoot the right ramp and the flashing Magic target for Jackpot.

- Use Lionman Frenzy at major switches before one ball remains.

- Collect a repeatable high Ogre loop while playfield scoring is multiplied.

### Cautions

- Issue

The center-ramp diverter can feed the mini-playfield, the lock area, or the main upper flipper.

Response

Read the three red inserts. On v1.1, use the right flipper button to select the intended path.

Source Url

[Source](https://tiltforums.com/t/new-competition-roms-car-hop-swords-of-fury-police-force-transporter-ice-fever-the-games/9991/20)

### Simple Overview

Magic-spinner spins qualify all three Titan locks in Swords of Fury. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot. Use Lionman Frenzy while three balls keep 3x scoring or two balls keep 2x.

### Overview

Magic-spinner spins qualify all three Titan locks in Swords of Fury. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot and Lionman Frenzy. Use the persistent 3x or 2x scoring on controlled Magic-spinner and Ogre's Alley shots while more than one ball remains.

## ROM options

### Default Id

v1

### Items

- Id

la-2

Label

Stock LA-2

Strategy

Summary

On stock LA-2, use the already-lit locks to start Titan Multiball quickly. Shoot the right ramp and flashing Magic target for Jackpot, then spend the short 3x and 2x scoring windows on the safest repeatable shots.

Quick Info

- Stock locks

Summary

LA-2 begins with all three locks lit. Shoot the left lock lane three times to start Titan Multiball.

- Titan Multiball

Summary

Three locks start multiball. Stock 3x and 2x playfield scoring use short timers instead of lasting until another ball drains.

- Jackpot and Lionman Frenzy

Summary

Shoot the right ramp, then the flashing Magic target. The collect starts a frenzy at major switches except the left spinner.

- Lionman

Summary

Repeat the unlit center ramp to raise Lionman, complete A-V-E-N-G-E-R, then collect the lit center ramp before its timer ends.

- Ogre's Alley

Summary

Use the white side to advance the award and the green side to collect it. Stock code does not add the Richie ROM's repeat window.

Steps

- Use the plunge to test the mini-playfield flipper, Magic-target resets, and the left lock-lane return.

- Shoot the lit left lane to lock ball 1. Repeat it for ball 2.

- Before the third lock, build Lionman Frenzy Value with controlled Magic-spinner shots.

Mode Notes

- Frenzy Value: Magic-spinner spins build the value used after a Jackpot collect.

- Stop building when the U-turn return is less valuable than starting multiball safely.

- Shoot the lit left lane a third time to start Titan Multiball.

- Use the right flipper button to select the center-ramp path before a controlled ramp shot.

- Shoot the right ramp to enter the mini-playfield, then hit the flashing Magic target for Jackpot.

Mode Notes

- Jackpot: The right ramp opens the collect. The flashing drop target awards Jackpot and starts Lionman Frenzy.

- Finish this sequence before Titan Multiball reaches one ball.

- While stock 3x or 2x is still flashing, use safe major switches for Lionman Frenzy and repeatable scoring.

- When the multiplier timer ends, protect the remaining balls and finish any safe Magic or Ogre's Alley collect.

- At one ball, rebuild Lionman or relock three balls for another Titan Multiball.

Fallback

Build and collect Lionman

When

Use this when the U-turn or left lock lane rejects toward a drain.

Steps

- Shoot the center ramp while Lionman is unlit.

- Repeat the unlit center ramp to raise Lionman through 100,000, 125,000, 175,000, 250,000, 350,000, 475,000, 625,000, 800,000, and 1,000,000.

- Hit each unlit A-V-E-N-G-E-R standup.

- Use either inlane to spot the next letter when its feed is safe.

- Complete A-V-E-N-G-E-R to light the center ramp.

- Shoot the center ramp before the Lionman timer ends.

- The collect resets Lionman to 100,000.

Alternatives

- Stock Ogre's Alley collect

When

Use this when the upper flipper gives a controlled Alley shot.

Steps

- Shoot the white Advance side to raise the lit value.

- Shoot the green Collect side once the value justifies the return risk.

- Return to the Advance side after the stock collect resets the opportunity.

- Take a ready collect during a timed playfield multiplier instead of rebuilding through an unsafe feed.

- Magic value and Bonus X

When

Use this when the mini-playfield flipper and target resets are reliable.

Steps

- Hit each flashing Magic target once.

- Complete all five for the current Magic value and one Bonus X advance.

- Use U-turn spins to raise Magic by 50,000 per threshold.

- The value ranges from 50,000 through 250,000.

- A mini-playfield exit lowers Magic by 50,000 to its minimum.

- Repeat only while the longer target-reset delays remain manageable.

Builds Toward

Fast stock Titan Multiball and timed Jackpot scoring

Steps

- Use the three lit locks instead of qualifying Lock Spins.

- Build Frenzy Value only while the Magic-spinner return stays controlled.

- Start Titan Multiball at the third left-lane lock.

- Shoot the right ramp and flashing Magic target for Jackpot.

- Use the remaining 3x or 2x timer on Lionman Frenzy and safe repeat shots.

Techniques

- Mini-playfield target timing

Instruction

Wait for the flashing target line, then use the small right flipper. Do not aim at an unlit target during Jackpot.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/915958-swords-of-fury/faqs/1481)

- Two-way U-turn

Instruction

Shoot the U-turn from either entrance. Use the controlled flipper instead of forcing one direction.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/915958-swords-of-fury/faqs/1481)

Cautions

- Issue

A down Magic target leaves an open exit at the back of the mini-playfield.

Response

Prepare the main upper flipper when the ball approaches an open target slot.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/915958-swords-of-fury/faqs/1481)

- Issue

Magic targets stay down longer after repeated mini-playfield visits.

Response

Stop forcing a full set when too many open slots remove the ball before a controlled flip.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/915958-swords-of-fury/faqs/1481)

Check Before Play

- Confirm stock LA-2: locks begin lit, and the 3x and 2x playfield multipliers are timed.

- Test the physical lock, kickback, Jackpot value, and multiplayer lock-stealing behavior.

Simple Overview

Swords of Fury begins with all three Titan locks lit. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot. Use the short 3x and 2x scoring windows on controlled Magic-spinner and Ogre's Alley shots.

Overview

All three Titan locks begin lit in Swords of Fury. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot and Lionman Frenzy. Use the short 3x and 2x scoring windows on controlled Magic-spinner and Ogre's Alley shots while more than one ball remains.

Machine Setup

- Confirm stock LA-2: locks begin lit, and the 3x and 2x playfield multipliers are timed.

- Test the physical lock, kickback, Jackpot value, and multiplayer lock-stealing behavior.

- Id

v1

Label

Richie ROM (current release v1.1)

Differences

Changes

- Adjustment 47 requires 20 through 50 Magic-spinner spins to qualify the locks; the first lock preserves qualification for the remaining locks.

- Titan Multiball keeps 3x scoring with three balls and 2x with two balls instead of using the stock short timers.

- The Jackpot starts Lionman Frenzy at every major switch except the left spinner.

- Ogre's Alley makes its 100,000 and 500,000 awards temporarily repeatable.

Strategy

Summary

On the V1 competition ROM, rip the Magic spinners until locks light, lock three balls at the left lane, shoot the right ramp during multiball, hit the flashing Magic target for Jackpot, then use Lionman Frenzy during persistent 3x or 2x play.

Quick Info

- Competition lock qualification

Summary

Adjustment 47 requires 20 through 50 Magic-spinner spins, and the first lock preserves qualification for the remaining locks.

- Titan Multiball

Summary

Three left-lane locks start Titan Multiball, and v1.1 keeps 3x with three balls and 2x with two balls.

- Jackpot and Lionman Frenzy

Summary

Shoot the right ramp and flashing Magic drop to start a Jackpot frenzy at every major switch except the left spinner.

- Lionman

Summary

Repeat the unlit center ramp to raise Lionman, complete A-V-E-N-G-E-R, then collect the lit center ramp before its timer ends.

- Ogre's Alley

Summary

Use one side to advance and the other to collect, with v1.1 making 100,000 and 500,000 temporarily repeatable.

- Stock-code warning

Summary

Richie ROM v1.1 changes LA-2's lit starting locks and short multiball multiplier timers.

Steps

- Use the plunge to test the mini-playfield flipper and all five Magic targets.

- Shoot the lower U-turn through its Magic spinners until locks light.

Mode Notes

- Lock Spins: Adjustment 47 requires 20 through 50 combined Magic-spinner spins to qualify all three locks.

- If the ball drains before the first lock, Lock Spins reset. After one ball locks, qualification remains for locks two and three.

- Each completed spin threshold also advances the left spinner value. That value resets at a drain and after Titan Multiball.

- After locks qualify, continue Magic-spinner shots only while the drain risk remains acceptable.

Mode Notes

- Frenzy Value: Each later Magic-spinner spin adds 100, up to 9,900. The Jackpot starts Lionman Frenzy and spends the built value at major switches.

- The Frenzy Value resets at a drain and after Titan Multiball. It cannot advance during Titan Multiball.

- Shoot the left lane three times to lock three balls and start Titan Multiball.

Mode Notes

- Titan Multiball: The third left-lane lock starts three-ball play. The game releases all three balls toward the upper flipper.

- Version 1.1 keeps 3x playfield scoring while three balls remain. It keeps 2x while two balls remain.

- Titan Multiball ends when one ball remains. Locks can be stolen in multiplayer play.

- Use the right flipper button to select the center-ramp diverter before a controlled ramp shot.

- During multiball, shoot the right ramp to enter the mini-playfield, then hit the flashing Magic target for Jackpot.

Mode Notes

- Jackpot: The right ramp starts the upper-playfield collect. The flashing drop target scores the static value from Adjustment 40.

- Adjustment 40 permits 1,000,000 through 4,000,000. A new installation needs one Jackpot collect before the chosen reset value appears.

- The Jackpot opportunity ends with Titan Multiball. A collected Jackpot starts Lionman Frenzy.

- After Jackpot, hit major switches while at least two balls remain.

Mode Notes

- Lionman Frenzy: Each major switch except the left spinner adds the built Frenzy Value to its normal score.

- Playfield 3x or 2x multiplies the Frenzy Value. The Frenzy ends with Titan Multiball.

- Use Magic spinners and Ogre's Alley during 3x when those feeds remain controlled.

- When one ball remains, rebuild Lock Spins or use the Lionman route.

Fallback

Build and collect Lionman

When

Use this when the U-turn or left lock lane rejects toward a drain.

Steps

- Shoot the center ramp while Lionman is unlit.

- Repeat the unlit center ramp to raise Lionman through 100,000, 125,000, 175,000, 250,000, 350,000, 475,000, 625,000, 800,000, and 1,000,000.

- Hit each unlit A-V-E-N-G-E-R standup.

- Use either inlane to spot the next letter when its feed is safe.

- Complete A-V-E-N-G-E-R to light the center ramp.

- Shoot the center ramp before the Lionman timer ends.

- The collect resets Lionman to 100,000.

Alternatives

- Richie ROM repeatable Ogre loop

When

Use this when the upper flipper gives a stable Ogre's Alley shot.

Steps

- Shoot the white Advance side until the value reaches 100,000 or 500,000.

- Shoot the green Collect side.

- Version 1.1 keeps the collected high value lit for a short repeat window.

- Repeat the loop until the window ends.

- Prefer this route during 3x or 2x playfield scoring.

- Magic value and Bonus X

When

Use this when the mini-playfield flipper and target resets are reliable.

Steps

- Hit each flashing Magic target once.

- Complete all five for the current Magic value and one Bonus X advance.

- Use U-turn spins to raise Magic by 50,000 per threshold.

- The value ranges from 50,000 through 250,000.

- A mini-playfield exit lowers Magic by 50,000 to its minimum.

- Repeat only while the longer target-reset delays remain manageable.

Builds Toward

Qualified locks, a built Frenzy, and a 3x Jackpot phase

Steps

- Complete the required Lock Spins.

- Lock one ball to preserve qualification.

- Build Frenzy Value with more Magic-spinner spins.

- Lock the second and third balls.

- Start Titan Multiball with persistent 3x playfield scoring.

- Shoot the right ramp and the flashing Magic target for Jackpot.

- Use Lionman Frenzy at major switches before one ball remains.

- Collect a repeatable high Ogre loop while playfield scoring is multiplied.

Cautions

- Issue

The center-ramp diverter can feed the mini-playfield, the lock area, or the main upper flipper.

Response

Read the three red inserts. On v1.1, use the right flipper button to select the intended path.

Source Url

[Source](https://tiltforums.com/t/new-competition-roms-car-hop-swords-of-fury-police-force-transporter-ice-fever-the-games/9991/20)

Simple Overview

Magic-spinner spins qualify all three Titan locks in Swords of Fury. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot. Use Lionman Frenzy while three balls keep 3x scoring or two balls keep 2x.

Overview

Magic-spinner spins qualify all three Titan locks in Swords of Fury. Lock three balls at the left lane, then shoot the right ramp and flashing Magic target for Jackpot and Lionman Frenzy. Use the persistent 3x or 2x scoring on controlled Magic-spinner and Ogre's Alley shots while more than one ball remains.

## Sources

- [Pinball Therapy Swords of Fury Richie ROM v1.1 changes](https://pinballtherapy.com/rom-downloads/swords-of-fury-richie-rom-changes/)
- [Tilt Forums Swords of Fury Richie ROM release notes and checksums](https://tiltforums.com/t/new-competition-roms-car-hop-swords-of-fury-police-force-transporter-ice-fever-the-games/9991/20)
- [Original Swords of Fury rulesheet](https://gamefaqs.gamespot.com/pinball/915958-swords-of-fury/faqs/1481)
- [Kineticist Swords of Fury machine record](https://www.kineticist.com/games/pinball/swords-of-fury)
- [PinballCards Swords of Fury quick rules](https://pinballcards.net/swords-of-fury-1988)
- [Swords of Fury tutorial with Adam Godfrey](https://www.youtube.com/watch?v=YijSWjMpx3c)

## Playfield

[View the current playfield image](https://img.opdb.org/241316b6-039a-416d-a1e2-a00e3f5c50e3-large.jpg).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
