# Police Force

[View on FlutterCatch](https://fluttercatch.com/machine/police-force) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Shoot the right ramp while Lock 1 or Lock 2 is flashing and lock two balls, then repeat the center ramp during Police Multiball for 2x scoring and a growing center-ramp award.

### Steps

- Start Police Multiball

Shoot the right ramp while Lock 1 or Lock 2 is flashing. If neither lamp is flashing, hit a lit criminal target first. Lock two balls to start Police Multiball.

- Repeat the center ramp

During Police Multiball, repeat the center ramp. All playfield scoring is doubled, and other switch hits do not reset the growing center-ramp award.

- Collect the Police Jackpot

Use the second ball to hit the remaining lit criminal targets. After all five criminals are arrested, shoot the right ramp for Jackpot.

### Quick Info

- Police Multiball

Summary

Lock two balls at the right ramp. The first locks are commonly lit; later locks can require one criminal arrest each.

- Center ramp

Summary

Consecutive center ramps climb toward Unlimited Millions. Switch hits break the ladder in single-ball play but not during multiball.

- Criminal Jackpot

Summary

Arrest Croc, Shark, Rat, and Weasel, then collect the timed right-ramp Jackpot.

### Warning

The stock machine can have a center post between the flippers.

Check its rebounds before relying on a center-save nudge.

## Full strategy

### Summary

Complete G-U-N up top and use lane change to save the lit inlane for Police Multiball. Follow the green lock lamps and lock twice at the right ramp. During Multiball, roll through the lit inlane for Playfield X, then alternate the center and right ramps for Doublecross awards.

### Quick Info

- Police Multiball

Summary

The flashing green Lock 1 and Lock 2 lamps show the next right-ramp lock. Later Multiballs can require an arrest before the next lock, depending on the operator setting.

- Doublecross

Summary

During Police Multiball, one ramp briefly lights the other for Doublecross. Awards rise by 1,000,000 and reset for the next Multiball.

- Playfield X

Summary

Each G-U-N top-lane completion adds one Playfield X level. A lit inlane starts the timer, and lane change alternates the lit inlane.

- Criminal Jackpot

Summary

Arrest Croc, Shark, Rat, and Weasel, then shoot the lit right ramp. On the July 12 build the Jackpot starts each ball at 2,000,000, adds 250,000 per center ramp, and caps at 9.99M.

- Center ramp

Summary

The center ramp advances through 150,000 and adds 250,000 to the Criminal Jackpot. It scores millions only as a Doublecross during Police Multiball.

- Take Highest

Summary

On LX-5, completing Take Highest maxes the Criminal Jackpot; it does not copy another player's score.

- Firing Range

Summary

The 75,000 Firing Range award also spots one P-O-L-I-C-E letter.

### Steps

- Complete the G-U-N top lanes with two-way lane change to build Playfield X.

- Once an inlane is lit, use lane change to keep the ball out of the lit inlane and save Playfield X for Police Multiball.

- Read the flashing green Lock 1 and Lock 2 lamps. Shoot the right ramp when the next lock flashes; if neither lock flashes, arrest one criminal and read the lamps again. Lock two balls to start Police Multiball.

Mode Notes

- The first Police Multiball commonly has two free locks. Later locks can require one arrest each by operator setting.

- During Police Multiball, roll through the lit inlane to start the saved Playfield X.

- Shoot either the center ramp or right ramp, then shoot the flashing other ramp for Doublecross. Keep alternating; the awards rise from 1,000,000 to 2,000,000 to 3,000,000 and higher.

Mode Notes

- One ramp briefly lights the other. The Doublecross value resets at the next Police Multiball.

### Check Before Play

- Confirm the July 12, 2026 post-INDISC LX-5 build: U26 00390CC0 and U27 003315BD.

- Confirm Playfield X Timer (Adjustment 35), Inlane Memory (40), Playfield X Memory (43), lock requirements, and ball count.

### Simple Overview

Police Force uses the right ramp for two locks and its center and right ramps for Multiball scoring. Follow the flashing green lock lamps, lock two balls at the right ramp, then alternate the center and right ramps during Police Multiball.

### Overview

Police Force uses two right-ramp locks to start Police Multiball, where one ramp briefly lights the other for rising Doublecross awards. Follow the flashing green lock lamps, start Multiball, then alternate the center and right ramps. If Playfield X is available, complete G-U-N up top and save the lit inlane until Multiball begins.

### Machine Setup

- Confirm the July 12, 2026 post-INDISC LX-5 build: U26 00390CC0 and U27 003315BD.

- Confirm Playfield X Timer (Adjustment 35), Inlane Memory (40), Playfield X Memory (43), lock requirements, and ball count.

## ROM options

### Default Id

lx-5

### Items

- Id

la-4

Label

Stock LA-4

Strategy

Summary

On stock LA-4, lock two balls at the right ramp. During two-ball Police Multiball, repeat the center ramp: all scoring is doubled and its ladder can reach Unlimited Millions. Arrest all four criminals only when their banks return safely.

Quick Info

- Police Multiball

Summary

Lock two balls at the right ramp. The first locks are commonly lit; later locks can require one criminal arrest each.

- Center ramp

Summary

Consecutive center ramps climb toward Unlimited Millions. Switch hits break the ladder in single-ball play but not during multiball.

- Criminal Jackpot

Summary

Arrest Croc, Shark, Rat, and Weasel, then collect the timed right-ramp Jackpot.

- G-U-N lanes

Summary

Complete G-U-N to raise end-of-ball bonus X and briefly increase the Criminal Jackpot from target hits.

- P-O-L-I-C-E

Summary

Finish the six letters to light the 3,000,000 Top Cop collect near the bumpers for the rest of the ball.

Note Details

Label

Top-player proof

Items

- At the District 82 Super Series 2022, Colin MacAlpine repeatedly shot the right ramp because a tournament rubber blocked the easier center-ramp repeat. He also completed P-O-L-I-C-E and collected the 3,000,000 Top Cop award.

Steps

- Use the first plunge to test the Firing Range spinner and the top-lane return.

- Read the green lock arrows. If one flashes, shoot the right ramp; if neither flashes, arrest one criminal first.

- Lock two balls at the right ramp. Prepare the left flipper for the police-car release.

- During Police Multiball, repeat the center ramp. All playfield scoring is doubled, and switch hits do not break the center-ramp ladder.

- If the center ramp is unreliable, use the second ball to finish safe criminal banks and collect a lit right-ramp Jackpot.

- After multiball, rebuild one lock or return to G-U-N and the safest criminal bank.

Fallback

P-O-L-I-C-E and Top Cop

When

Use this when the center ramp and criminal banks are rejecting.

Steps

- Take the 75,000 Firing Range award when it is repeatable; it also spots a P-O-L-I-C-E letter.

- Shoot an unlit right ramp to spot another letter.

- Finish P-O-L-I-C-E and collect Top Cop near the bumpers before the ball ends.

Builds Toward

Unlimited Millions during doubled multiball

Steps

- Lock two balls at the right ramp.

- Start Police Multiball and control the police-car release.

- Repeat the center ramp through Unlimited Millions while scoring is doubled.

Check Before Play

- Confirm stock LA-4; center-ramp Unlimited Millions and doubled Police Multiball identify it.

- Read the green lock arrows and inspect the center post.

Techniques

- Right-flipper center-ramp repeat

Instruction

Trap on the right flipper. Repeat the center ramp only after its return proves that the next shot is stable.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/916494-police-force/faqs/1413)

Cautions

- Issue

The police car releases both multiball balls toward the left inlane.

Response

Prepare the left flipper before the second lock starts multiball.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/916494-police-force/faqs/1413)

- Issue

The stock machine can have a center post between the flippers.

Response

Check its rebounds before relying on a center-save nudge.

Source Url

[Source](https://gamefaqs.gamespot.com/pinball/916494-police-force/faqs/1413)

Simple Overview

Police Force uses the right ramp for two locks and its center and right ramps for Multiball scoring. Follow the flashing green lock lamps, lock two balls at the right ramp, then alternate the center and right ramps during Police Multiball.

Overview

Police Force uses two right-ramp locks to start Police Multiball, where one ramp briefly lights the other for rising Doublecross awards. Follow the flashing green lock lamps, start Multiball, then alternate the center and right ramps. If Playfield X is available, complete G-U-N up top and save the lit inlane until Multiball begins.

Machine Setup

- Confirm stock LA-4; center-ramp Unlimited Millions and doubled Police Multiball identify it.

- Read the green lock arrows and inspect the center post.

- Id

lx-5

Label

LX-5 (Post-INDISC, July 12, 2026)

Differences

Changes

- Completing the G-U-N top lanes builds a timed Playfield X that starts at a lit inlane, with two-way lane change.

- During Police Multiball, alternating the center and right ramps scores rising Doublecross awards instead of stock Unlimited Millions.

- The July 12 build resets the Criminal Jackpot to 2,000,000 each ball, adds 250,000 per center ramp, and caps it at 9.99M.

- Take Highest maximizes the Criminal Jackpot, and the 75,000 Firing Range award also spots one P-O-L-I-C-E letter.

Strategy

Summary

Complete G-U-N up top and use lane change to save the lit inlane for Police Multiball. Follow the green lock lamps and lock twice at the right ramp. During Multiball, roll through the lit inlane for Playfield X, then alternate the center and right ramps for Doublecross awards.

Quick Info

- Police Multiball

Summary

The flashing green Lock 1 and Lock 2 lamps show the next right-ramp lock. Later Multiballs can require an arrest before the next lock, depending on the operator setting.

- Doublecross

Summary

During Police Multiball, one ramp briefly lights the other for Doublecross. Awards rise by 1,000,000 and reset for the next Multiball.

- Playfield X

Summary

Each G-U-N top-lane completion adds one Playfield X level. A lit inlane starts the timer, and lane change alternates the lit inlane.

- Criminal Jackpot

Summary

Arrest Croc, Shark, Rat, and Weasel, then shoot the lit right ramp. On the July 12 build the Jackpot starts each ball at 2,000,000, adds 250,000 per center ramp, and caps at 9.99M.

- Center ramp

Summary

The center ramp advances through 150,000 and adds 250,000 to the Criminal Jackpot. It scores millions only as a Doublecross during Police Multiball.

- Take Highest

Summary

On LX-5, completing Take Highest maxes the Criminal Jackpot; it does not copy another player's score.

- Firing Range

Summary

The 75,000 Firing Range award also spots one P-O-L-I-C-E letter.

Steps

- Complete the G-U-N top lanes with two-way lane change to build Playfield X.

- Once an inlane is lit, use lane change to keep the ball out of the lit inlane and save Playfield X for Police Multiball.

- Read the flashing green Lock 1 and Lock 2 lamps. Shoot the right ramp when the next lock flashes; if neither lock flashes, arrest one criminal and read the lamps again. Lock two balls to start Police Multiball.

Mode Notes

- The first Police Multiball commonly has two free locks. Later locks can require one arrest each by operator setting.

- During Police Multiball, roll through the lit inlane to start the saved Playfield X.

- Shoot either the center ramp or right ramp, then shoot the flashing other ramp for Doublecross. Keep alternating; the awards rise from 1,000,000 to 2,000,000 to 3,000,000 and higher.

Mode Notes

- One ramp briefly lights the other. The Doublecross value resets at the next Police Multiball.

Check Before Play

- Confirm Playfield X Timer (Adjustment 35), Inlane Memory (40), Playfield X Memory (43), lock requirements, and ball count.

Simple Overview

Police Force uses the right ramp for two locks and its center and right ramps for Multiball scoring. Follow the flashing green lock lamps, lock two balls at the right ramp, then alternate the center and right ramps during Police Multiball.

Overview

Police Force uses two right-ramp locks to start Police Multiball, where one ramp briefly lights the other for rising Doublecross awards. Follow the flashing green lock lamps, start Multiball, then alternate the center and right ramps. If Playfield X is available, complete G-U-N up top and save the lit inlane until Multiball begins.

Machine Setup

- Confirm Playfield X Timer (Adjustment 35), Inlane Memory (40), Playfield X Memory (43), lock requirements, and ball count.

## Sources

- [Tilt Forums Police Force post-INDISC LX-5 rules and July 12 update](https://tiltforums.com/t/new-competition-roms-car-hop-swords-of-fury-police-force-transporter-ice-fever-the-games/9991/25)
- [Police Force LX-5 author archive and README](https://pinballtherapy.com/wp-content/uploads/2026/07/Police_Force_LX5.zip)
- [Police Force LX-5 release and strategy discussion](https://pinside.com/pinball/forum/topic/police-force-new-lx-5-rom-release)
- [PinMAME Police Force post-INDISC ROM identity](https://github.com/vpinball/pinmame/blob/master/src/wpc/s11games.c)
- [Public-domain Police Force rulesheet](https://gamefaqs.gamespot.com/pinball/916494-police-force/faqs/1413)
- [Kineticist Police Force machine record](https://www.kineticist.com/games/pinball/police-force)
- [Stock Police Force at District 82 Super Series 2022](https://pinballvideos.com/v/4773/2956)

## Playfield

[View the current playfield image](https://drgz1lvvatieiezu.public.blob.vercel-storage.com/site-media/v2/playfields/reviewed/G4d8d.webp).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
