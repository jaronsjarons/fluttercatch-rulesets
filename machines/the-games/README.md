# The Games

[View on FlutterCatch](https://fluttercatch.com/machine/the-games) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Collect safely available Gold Medals to raise Bonus X. Reach five medals for Hold Bonus, then protect the built end-of-ball bonus.

### Steps

- Choose a safe medal

Follow the lit playfield inserts and choose a Gold Medal shot whose rebound is controlled.

- Raise Bonus X

Complete that medal, then choose another safe lit medal. Each collected medal advances Bonus X.

- Reach Hold Bonus

Collect all five medals when their shots remain safe. The fifth activates Hold Bonus.

- Protect the built bonus

After five Gold Medals activate Hold Bonus, protect the multiplied end-of-ball value.

### Quick Info

- Gold Medals

Summary

Discus, Pole Vault, Javelin, Shot Put, and Hammer are the five medals. Each medal advances Bonus X.

- Hold Bonus

Summary

Winning all five medals activates Hold Bonus. The factory card says the bonus level is restored when Hold Bonus is collected.

- Extra Ball

Summary

The configured medal threshold lights the left and right spot targets. Complete both lit targets twice to earn Extra Ball.

### Fallback

Alternative route: four medals

When

Use this when the fifth medal requires an unsafe shot.

Steps

- Collect the four safely available medals to raise Bonus X.

- Protect the multiplied end-of-ball bonus instead of forcing the fifth medal.

## Full strategy

### Summary

On the INDISC competition build, collect safely available Gold Medals to raise Bonus X. After collecting the lit spinner medal, repeat the spinner until base bonus reaches at least 20,000, then shoot the lit saucer for base bonus times 5 times Bonus X.

### Quick Info

- INDISC competition build

Summary

This competition build changes scoring but does not show a version number as of August 25, 2026.

- Gold Medals

Summary

Each collected medal advances Bonus X. Five medals reach 6x and light Hold Bonus.

- Bonus Collect

Summary

At 20,000 or more base bonus, the lit saucer scores base bonus times 5 times Bonus X. The collected base bonus is not held.

- Hold Bonus

Summary

Five medals protect unspent base bonus after a drain. Base bonus collected at the saucer is not held.

- INDISC spinner

Summary

The spinner scores 1,500 per spin. After its feature is fully lit and its lit medal is collected, each later spin also adds one base-bonus advance.

- Captive ball

Summary

Each scoring switch is worth 30,000 on the INDISC build, with a 110,000 maximum.

- Pole Vault

Summary

Weak vari-target hits preserve lit progress but do not automatically count as an advance.

### Steps

- Shoot the spinner for 1,500 per spin. Follow its lamps until the spinner feature is fully lit and its lit medal is collected.

- After collecting that medal, keep using controlled spinner shots. Every spin also adds one base-bonus advance.

- Use controlled captive-ball hits for 30,000 per scoring switch, up to the 110,000 maximum.

- Use the vari-target for Pole Vault only when its rebound is safe. Weak hits keep lit progress but are not guaranteed to advance it.

- Collect safely available Gold Medals to raise Bonus X. Five medals reach 6x and light Hold Bonus.

- After collecting the lit spinner medal, repeat the spinner until base bonus reaches at least 20,000, then shoot the lit saucer for base bonus times 5 times Bonus X.

- At 6x and the 29,000 base-bonus maximum, the saucer scores 870,000.

### Fallback

Competition spinner and early collect

When

Use this when the captive ball or vari-target gives dangerous returns.

Steps

- Fully light the spinner feature and collect its lit medal.

- Repeat the spinner for 1,500 per spin and one base-bonus advance per spin.

- Repeat the spinner until base bonus reaches at least 20,000.

- Shoot the lit saucer for base bonus times 5 times the current Bonus X.

### Alternatives

- Captive-ball points

When

Use this when the spinner, saucer, or Pole Vault return is unsafe.

Steps

- Use controlled captive-ball hits.

- Each scoring switch is worth 30,000, up to the 110,000 maximum.

### Builds Toward

INDISC Bonus Collect

Steps

- Collect safely available Gold Medals to raise Bonus X.

- Fully light the spinner feature and collect its lit medal so later spinner spins also advance base bonus.

- Repeat the spinner until base bonus reaches at least 20,000.

- Shoot the lit saucer for base bonus times 5 times Bonus X.

### Simple Overview

The Games is a bonus-building game. Collect Gold Medals to raise Bonus X, use the spinner and other controlled scoring switches to raise base bonus, then shoot the lit saucer when the multiplied Bonus Collect is ready.

### Overview

The Games uses Gold Medals to raise Bonus X while controlled spinner and captive-ball shots build base bonus. Collect safely available medals, then protect the multiplied end-of-ball value. Five medals activate Hold Bonus, allowing the built bonus to carry to another ball.

## ROM options

### Default Id

indisc

### Items

- Id

stock

Label

Stock ROM

Strategy

Summary

Win Gold Medals to raise Bonus X. Five medals activate Hold Bonus, which preserves the built bonus for another ball when collected.

Quick Info

- Gold Medals

Summary

Discus, Pole Vault, Javelin, Shot Put, and Hammer are the five medals. Each medal advances Bonus X.

- Hold Bonus

Summary

Winning all five medals activates Hold Bonus. The factory card says the bonus level is restored when Hold Bonus is collected.

- Extra Ball

Summary

The configured medal threshold lights the left and right spot targets. Complete both lit targets twice to earn Extra Ball.

- Special

Summary

Completing the Pole Vault vari-target sequence lights Special.

Steps

- Choose a lit Gold Medal shot whose return is controlled.

- Follow its playfield lamps until the game awards the medal. Each medal advances Bonus X.

- Repeat safely available medal shots, using the spinner and captive ball only when their returns remain controlled.

- After the fifth medal activates Hold Bonus, protect the multiplied end-of-ball value.

Fallback

Four-medal multiplier route

When

Use this when the fifth medal requires an unsafe vari-target or side shot.

Steps

- Collect the four safely available medals.

- Protect the multiplied end-of-ball bonus instead of forcing the fifth medal.

Builds Toward

Five medals and Hold Bonus

Steps

- Collect safely available Gold Medals to raise Bonus X.

- Win all five medals to activate Hold Bonus.

- Protect the multiplied end-of-ball value after Hold Bonus activates.

- Use Hold Bonus to preserve the built level for another ball.

Note Details

Label

Settings that change play

Items

- The stock instruction cards document medal-based Bonus X, Hold Bonus, configurable Extra Ball qualification, and a Pole Vault Special.

- Ball count, Medal Setting, and Player Level change thresholds or whether bonus is remembered. Exact stock spinner progression, event selection, captive-ball scoring, saucer qualification, and bonus-reset behavior remain unverified.

Simple Overview

The Games is a bonus-building game. Collect Gold Medals to raise Bonus X, use the spinner and other controlled scoring switches to raise base bonus, then shoot the lit saucer when the multiplied Bonus Collect is ready.

Overview

The Games uses Gold Medals to raise Bonus X while controlled spinner and captive-ball shots build base bonus. Collect safely available medals, then protect the multiplied end-of-ball value. Five medals activate Hold Bonus, allowing the built bonus to carry to another ball.

- Id

indisc

Label

INDISC competition build

Differences

Changes

- The spinner scores 1,500 per spin; after its lit medal is collected, later spins also advance base bonus.

- Each captive-ball scoring switch awards 30,000, with a 110,000 maximum.

- Weak Pole Vault hits no longer remove lit progress.

- At 20,000 or more base bonus, the lit saucer collects base bonus times 5 times Bonus X.

Strategy

Summary

On the INDISC competition build, collect safely available Gold Medals to raise Bonus X. After collecting the lit spinner medal, repeat the spinner until base bonus reaches at least 20,000, then shoot the lit saucer for base bonus times 5 times Bonus X.

Quick Info

- Gold Medals

Summary

Each collected medal advances Bonus X. Five medals reach 6x and light Hold Bonus.

- Bonus Collect

Summary

At 20,000 or more base bonus, the lit saucer scores base bonus times 5 times Bonus X. The collected base bonus is not held.

- Hold Bonus

Summary

Five medals protect unspent base bonus after a drain. Base bonus collected at the saucer is not held.

- INDISC spinner

Summary

The spinner scores 1,500 per spin. After its feature is fully lit and its lit medal is collected, each later spin also adds one base-bonus advance.

- Captive ball

Summary

Each scoring switch is worth 30,000 on the INDISC build, with a 110,000 maximum.

- Pole Vault

Summary

Weak vari-target hits preserve lit progress but do not automatically count as an advance.

Steps

- Shoot the spinner for 1,500 per spin. Follow its lamps until the spinner feature is fully lit and its lit medal is collected.

- After collecting that medal, keep using controlled spinner shots. Every spin also adds one base-bonus advance.

- Use controlled captive-ball hits for 30,000 per scoring switch, up to the 110,000 maximum.

- Use the vari-target for Pole Vault only when its rebound is safe. Weak hits keep lit progress but are not guaranteed to advance it.

- Collect safely available Gold Medals to raise Bonus X. Five medals reach 6x and light Hold Bonus.

- After collecting the lit spinner medal, repeat the spinner until base bonus reaches at least 20,000, then shoot the lit saucer for base bonus times 5 times Bonus X.

- At 6x and the 29,000 base-bonus maximum, the saucer scores 870,000.

Fallback

Competition spinner and early collect

When

Use this when the captive ball or vari-target gives dangerous returns.

Steps

- Fully light the spinner feature and collect its lit medal.

- Repeat the spinner for 1,500 per spin and one base-bonus advance per spin.

- Repeat the spinner until base bonus reaches at least 20,000.

- Shoot the lit saucer for base bonus times 5 times the current Bonus X.

Alternatives

- Captive-ball points

When

Use this when the spinner, saucer, or Pole Vault return is unsafe.

Steps

- Use controlled captive-ball hits.

- Each scoring switch is worth 30,000, up to the 110,000 maximum.

Builds Toward

INDISC Bonus Collect

Steps

- Collect safely available Gold Medals to raise Bonus X.

- Fully light the spinner feature and collect its lit medal so later spinner spins also advance base bonus.

- Repeat the spinner until base bonus reaches at least 20,000.

- Shoot the lit saucer for base bonus times 5 times Bonus X.

Simple Overview

The Games is a bonus-building game. Collect Gold Medals to raise Bonus X, use the spinner and other controlled scoring switches to raise base bonus, then shoot the lit saucer when the multiplied Bonus Collect is ready.

Overview

The Games uses Gold Medals to raise Bonus X while controlled spinner and captive-ball shots build base bonus. Collect safely available medals, then protect the multiplied end-of-ball value. Five medals activate Hold Bonus, allowing the built bonus to carry to another ball.

## Sources

- [Tilt Forums The Games competition-ROM changelog](https://tiltforums.com/t/new-competition-roms-car-hop-swords-of-fury-police-force-transporter-ice-fever-the-games/9991)
- [Kineticist The Games machine record](https://www.kineticist.com/games/pinball/the-games)
- [Pinball Therapy ROM availability](https://pinballtherapy.com/rom-downloads/)
- [PI-80 The Games settings table](https://www.flippp.fr/media/manual/menus_PI-80_en.pdf)
- [Gottlieb The Games reproduction instruction card](https://pinballrebel.com/pinball/cards/Gottlieb/Gottlieb_The_Games_instruction_cards.zip)

## Playfield

[View the current playfield image](https://drgz1lvvatieiezu.public.blob.vercel-storage.com/site-media/v2/playfields/reviewed/GR9NZ.webp).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
