# RollerCoaster Tycoon

[View on FlutterCatch](https://fluttercatch.com/machine/rollercoaster-tycoon) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Shoot the Chicago Loop or Rocket to open rides and collect locks, then start three-ball Multiball. Use a Start FUN mode before the final lock only when its shot and return are controlled.

### Steps

- Use the plunge to test the Start FUN feed, A-B-C lanes, and upper-left flipper.

- Shoot the nearest ride's associated targets or ramp only from controlled returns.

- Shoot the Chicago Loop or Rocket when lock is lit.

- If Start FUN is one safe shot away, start the selected mode before collecting the final lock.

- Start three-ball Multiball, shoot every lit ride Jackpot, then shoot the Rocket for the Super Jackpot.

Details

- Lock progression: The first lock can be easier than later locks. Read the lit Chicago Loop and Rocket arrows before repeating either shot.

- After multiball, resume ride and guest progress instead of forcing an unlit lock lane.

### Quick Info

- Ride progress

Summary

Advance a ride's red, yellow, and green stoplights to open it. Each opened ride lights a lock and becomes a Jackpot shot during Multiball.

- Three-ball Multiball

Summary

Lock two balls at the Chicago Loop or Rocket, then start Multiball at Flying Turns or the Rocket.

- Start FUN

Summary

The inner loop or shooter-lane Handyman path starts one of the available timed modes.

### Fallback

Alternative route: Recovery: Start FUN route

When

Recovery pivot: Use this when lock entries reject but the inner loop and mode feeds are reliable.

Steps

- Shoot the inner loop or use the shooter-lane Handyman path.

- Start the safest available FUN mode.

- Complete its broadest lit shots rather than forcing the Dummy bank.

- Return to ride and lock progress after the timer ends.

### Warning

The Dummy bank, Rocket eject, and upper-flipper feeds can turn incomplete ride progress into a fast drain.

Use ball save or multiball for risky hits and abandon any return that rejects twice.

## Full strategy

### Summary

Shoot the Chicago Loop or Rocket to open rides and collect locks, then start three-ball Multiball. Use a Start FUN mode before the final lock only when its shot and return are controlled.

### Quick Info

- Ride progress

Summary

Advance a ride's red, yellow, and green stoplights to open it. Each opened ride lights a lock and becomes a Jackpot shot during Multiball.

- Three-ball Multiball

Summary

Lock two balls at the Chicago Loop or Rocket, then start Multiball at Flying Turns or the Rocket.

- Start FUN

Summary

The inner loop or shooter-lane Handyman path starts one of the available timed modes.

- Park Tycoon

Summary

Play all six FUN modes to light Park Tycoon at the Handyman. Guests set its Jackpot value.

### Steps

- Use the plunge to test the Start FUN feed, A-B-C lanes, and upper-left flipper.

- Shoot the nearest ride's associated targets or ramp only from controlled returns.

- Shoot the Chicago Loop or Rocket when lock is lit.

- If Start FUN is one safe shot away, start the selected mode before collecting the final lock.

- Start three-ball Multiball, shoot every lit ride Jackpot, then shoot the Rocket for the Super Jackpot.

Mode Notes

- Lock progression: The first lock can be easier than later locks. Read the lit Chicago Loop and Rocket arrows before repeating either shot.

- After multiball, resume ride and guest progress instead of forcing an unlit lock lane.

### Fallback

Recovery: Start FUN route

When

Recovery pivot: Use this when lock entries reject but the inner loop and mode feeds are reliable.

Steps

- Shoot the inner loop or use the shooter-lane Handyman path.

- Start the safest available FUN mode.

- Complete its broadest lit shots rather than forcing the Dummy bank.

- Return to ride and lock progress after the timer ends.

### Builds Toward

Park Tycoon

Steps

- Play all six FUN modes. On factory settings, the Flying Ghost relights Start FUN; harder settings require completing R&D at the upper standups.

- After Park Tycoon lights, shoot behind the Handyman through the FUN orbit to start it.

- During the 50-second four-ball mode, open rides and shoot their lit Jackpots. Each Jackpot raises the Super Jackpot multiplier.

- Shoot the Rocket to collect the Super Jackpot. Guests collected before the mode set the base Jackpot value.

### Check Before Play

- Test lock sensors, mode timers, ball saves, and upper-playfield feeds.

### Techniques

- Upper-flipper read

Instruction

Let one pop-bumper exit reach the upper-left flipper before trying to redirect it toward the Snack Bar.

Source Url

[Source](https://doczz.net/doc/5785797/ein-service-von-flippermarkt.de)

- Lock-arrow check

Instruction

Read which lock shot is lit before sending a controlled ball to the Chicago Loop or Rocket.

Source Url

[Source](https://doczz.net/doc/5785797/ein-service-von-flippermarkt.de)

### Cautions

- Issue

The Dummy bank, Rocket eject, and upper-flipper feeds can turn incomplete ride progress into a fast drain.

Response

Use ball save or multiball for risky hits and abandon any return that rejects twice.

Source Url

[Source](https://doczz.net/doc/5785797/ein-service-von-flippermarkt.de)

### Simple Overview

RollerCoaster Tycoon advances each ride from red to yellow to green; opening a ride lights a lock at the Chicago Loop or Rocket. After two locks, start three-ball Multiball at Flying Turns or the Rocket, shoot every lit ride Jackpot, then shoot the Rocket for the Super Jackpot. Start FUN modes behind the Handyman; playing all six lights Park Tycoon.

### Overview

RollerCoaster Tycoon opens rides by advancing their red, yellow, and green stoplights; each opened ride lights a lock at Chicago Loop or Rocket. Prepare a FUN mode, collect two locks, start Multiball at Flying Turns or Rocket, then clear every lit ride Jackpot before the Rocket Super. Playing all six FUN modes lights Park Tycoon; Guests set its Jackpot value rather than qualifying it.

### Machine Setup

- Test lock sensors, mode timers, ball saves, and upper-playfield feeds.

## Sources

- [Flippermarkt RollerCoaster Tycoon rulesheet](https://doczz.net/doc/5785797/ein-service-von-flippermarkt.de)
- [Evolution Pinball RollerCoaster Tycoon code archive](https://evolutionpinball.com/pinball-software-updates/stern-pinball/rollercoaster-tycoon)
- [Stern RollerCoaster Tycoon instruction card](https://www.pinballrebel.com/pinball/cards/Stern/Stern_Roller_Coaster_Tycoon_755-5178-XX.pdf)
- [Travis Murie at Triple Flip Open 2022](https://pinballvideos.com/v/3977/22443)

## Playfield

[View the current playfield image](https://img.opdb.org/6e6b8b60-2004-4816-abe8-635b0ada1d18-large.jpg).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
