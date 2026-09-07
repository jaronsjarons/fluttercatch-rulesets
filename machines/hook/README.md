# Hook

[View on FlutterCatch](https://fluttercatch.com/machine/hook) · [Propose a correction](https://github.com/jaronsjarons/fluttercatch-rulesets/issues/new/choose)

Generated reading copy. Edit [ruleset.json](ruleset.json), [simple.json](simple.json), or [mappings.json](mappings.json) to contribute.

## Simple strategy

### Summary Title

The goal

### Summary

Repeat the Windcoaster ramp while its return is controlled. Otherwise, complete the nine standup targets, lock one ball, plunge a lit Vortex hole to start three-ball Multiball, and alternate the left and right ramps for Jackpots.

### Steps

- Test the left ramp, right ramp, Skull hole, Scoop eject, and Croc Clock return under ball save.

- Repeat the Windcoaster ramp while it returns under control and advances toward 3 Million Plus.

- Complete the nine standup targets. The top-left Clock Shop shot can spot targets.

- Shoot the lit lock to hold one ball, then plunge a lit Vortex hole to start three-ball Multiball.

- Shoot the left ramp for the first Jackpot, then the right ramp for the next.

- Continue alternating ramps; use standup targets to build value only when the extra balls protect their rebounds.

- Return to the currently lit ramp after each collect instead of repeating the same side blindly.

Details

- Multiball order: Jackpots alternate between the left and right ramps.

### Quick Info

- Multiball

Summary

Complete the nine standup targets, shoot the lock to hold one ball, then plunge a lit Vortex hole to start three-ball play.

- Jackpot order

Summary

The Multiball Jackpot alternates from the left ramp to the right ramp and back.

- Jackpot build

Summary

The nine standup targets raise the Jackpot value.

### Fallback

Alternative route: Power Scoop awards

When

Use this when the ramp entrances or lock feed are rejecting.

Steps

- Shoot the Skull to light the Power Scoop.

- Read the award selected by the bumpers.

- Collect the lit Scoop only when its eject is known to be safe.

## Full strategy

### Summary

Repeat the Windcoaster ramp while its return is controlled. Otherwise, complete the nine standup targets, lock one ball, plunge a lit Vortex hole to start three-ball Multiball, and alternate the left and right ramps for Jackpots.

### Quick Info

- Multiball

Summary

Complete the nine standup targets, shoot the lock to hold one ball, then plunge a lit Vortex hole to start three-ball play.

- Jackpot order

Summary

The Multiball Jackpot alternates from the left ramp to the right ramp and back.

- Jackpot build

Summary

The nine standup targets raise the Jackpot value.

- Power Scoop

Summary

The Skull lights an award; the Scoop collects whichever award the bumpers selected.

### Steps

- Test the left ramp, right ramp, Skull hole, Scoop eject, and Croc Clock return under ball save.

- Repeat the Windcoaster ramp while it returns under control and advances toward 3 Million Plus.

- Complete the nine standup targets. The top-left Clock Shop shot can spot targets.

- Shoot the lit lock to hold one ball, then plunge a lit Vortex hole to start three-ball Multiball.

- Shoot the left ramp for the first Jackpot, then the right ramp for the next.

- Continue alternating ramps; use standup targets to build value only when the extra balls protect their rebounds.

- Return to the currently lit ramp after each collect instead of repeating the same side blindly.

Mode Notes

- Multiball order: Jackpots alternate between the left and right ramps.

### Fallback

Power Scoop awards

When

Use this when the ramp entrances or lock feed are rejecting.

Steps

- Shoot the Skull to light the Power Scoop.

- Read the award selected by the bumpers.

- Collect the lit Scoop only when its eject is known to be safe.

### Alternatives

- Bangarang combo

When

Use this when both ramps and the Croc Clock shot are dialed in.

Steps

- Shoot the right ramp.

- Follow with the left ramp.

- Finish at the Croc Clock shot for the combo award.

### Builds Toward

Repeated Multiball Jackpots

Steps

- Complete the standups, lock one ball, then plunge a lit Vortex hole to start Multiball.

- Build the Jackpot through controlled standups.

- Alternate left and right ramp collects throughout Multiball.

### Techniques

- Alternating-ramp control

Instruction

Trap after each Jackpot and transfer deliberately to the flipper that owns the newly lit ramp.

Source Url

[Source](https://www.coinoperatorshop.com/media/products/manual/pinball/Data_East_1992_Hook_Manual.pdf)

### Cautions

- Issue

The standups that build Jackpot can produce uncontrolled center rebounds.

Response

Hit the standups only under Multiball protection or from a proven angle to raise the Jackpot.

Source Url

[Source](https://www.coinoperatorshop.com/media/products/manual/pinball/Data_East_1992_Hook_Manual.pdf)

### Check Before Play

- Confirm lock qualification, Multiball restart, Power Scoop awards, ball save, Extra Ball conversion, and tournament settings.

- Test both ramps, the lock bank and release, Skull hold, Scoop eject, Croc Clock, standups, and lane-change behavior.

### Simple Overview

In Hook, repeat the Windcoaster ramp to advance its value toward 3 Million Plus. Complete the nine standup targets, lock one ball, then plunge a lit Vortex hole to start three-ball Multiball, where Jackpots alternate between the left and right ramps. Collect Power Scoop and Bangarang when they are ready instead of treating either as required preparation.

### Overview

In Hook, repeat the Windcoaster ramp to advance its value toward 3 Million Plus. Repeat Windcoaster while its return is controlled; otherwise complete the nine standup targets, lock one ball, plunge a lit Vortex hole, and alternate left and right ramps during Multiball. Collect Power Scoop or Bangarang when ready rather than making either a prerequisite.

### Machine Setup

- Confirm lock qualification, Multiball restart, Power Scoop awards, ball save, Extra Ball conversion, and tournament settings.

- Test both ramps, the lock bank and release, Skull hold, Scoop eject, Croc Clock, standups, and lane-change behavior.

## ROM options

### Default Id

4.08

### Items

- Id

4.08

Label

Stock 4.08

- Id

5.01

Label

Unofficial 5.01

Strategy

Summary

Hit individual drop targets to raise Left Ramp Value, repeat its controlled left-ramp cashout, then start Multiball and alternate ramps for 10M, 15M, and repeatable 20M Jackpots.

Quick Info

- 5.01 ROM

Summary

CPU 5.01 uses display 5.00 and adds deterministic Tournament Mode, corrected ball save, rebalanced scoring, and revised feature logic.

- Left Ramp Value

Summary

Each individual drop raises the value from 250K through 15M; the left ramp no longer advances it.

- Ramp cashout

Summary

A left-ramp shot starts the value timer; a drop hit before it ends preserves the current value for another collect.

- Multiball

Summary

Alternating ramp Jackpots begin at 10M, rise to 15M, then remain 20M; a no-Jackpot collapse within 20 seconds can offer restart.

- Power Scoop

Summary

Pop-bumper hits rotate six Scoop awards in a fixed order rather than choosing randomly.

Steps

- Test both ramps, the drop bank, Skull, Scoop, VUK, and Croc Clock before choosing the scoring route.

- Hit individual drop targets to build Left Ramp Value; a completed bank also scores 1M and resets.

- Cash the left ramp from a controlled ball, then hit another drop before the value timer expires to preserve it for another collect.

- Complete the displayed lock qualification, collect the required locks, and start three-ball Multiball.

- Alternate the left and right ramps for 10M, 15M, and then repeatable 20M Jackpots while ball count protects the returns.

- If no Jackpot scored and Multiball falls to one ball within 20 seconds, follow the restart prompt instead of resuming single-ball play.

Fallback

Deterministic Power Scoop

When

Use this when the drop bank or ramp entrances are rejecting but the Skull, bumpers, and Scoop are controlled.

Steps

- Shoot the Skull to light the Power Scoop.

- Use bumper hits to rotate the fixed award sequence to the needed value.

- Collect the Scoop only after its selection and two-second eject save are confirmed.

- Prefer the 25M-to-5M Croc Time or 15-second Skull 20M when its follow-up shot is safer than the ramp route.

Alternatives

- Bangarang cashout

When

Use this when Bangarang is lit and its 25-second scoring shots are all returning safely.

Steps

- Start the lit Bangarang and read its 25M opening bonus.

- Use the safest available right ramp, Skull, left ramp, Strike, or VUK shot to add 5M.

- Keep shooting only while the next feed is controlled; the mode awards its built bonus when time ends.

Builds Toward

Repeatable 20M Multiball Jackpots

Steps

- Use drop targets and repeated left ramps for controlled single-ball scoring.

- Complete the displayed lock sequence, collect the required locks, then shoot the lit lock shot to start three-ball Multiball.

- Alternate ramps through 10M and 15M to repeatable 20M Jackpots.

Techniques

- Alternating-ramp control

Instruction

Trap after each Jackpot and transfer deliberately to the flipper that owns the newly lit ramp.

Source Url

[Source](https://www.pinballcode.com/hook501)

Cautions

- Issue

A Left Ramp Value of 3M or more resets when its post-collect timer ends.

Response

Hit any drop target before the timer expires to preserve the value for another collect.

Source Url

[Source](https://www.pinballcode.com/hook501)

- Issue

The standups and drop targets can rebound toward the center drain.

Response

Attack them only under Multiball protection or from a proven controlled angle.

Source Url

[Source](https://www.pinballcode.com/hook501)

Check Before Play

- Check Tournament Mode, ball-save seconds, Weapon Advance, locks, Extra Ball conversion, and whether game awards are disabled.

- Test both ramps, drop registration, Skull hold, Scoop eject, Croc Clock, VUK, Strike, lock release, and lane change before choosing a route.

Simple Overview

In Hook, repeat the Windcoaster ramp to advance its value toward 3 Million Plus. Complete the nine standup targets, lock one ball, then plunge a lit Vortex hole to start three-ball Multiball, where Jackpots alternate between the left and right ramps. Collect Power Scoop and Bangarang when they are ready instead of treating either as required preparation.

Overview

In Hook 5.01, individual drop targets build Left Ramp Value, and a left-ramp shot starts a timer before the value falls unless another drop preserves it. Use drop hits and repeated left ramps for single-ball scoring, then qualify Multiball and alternate the ramps through 10M, 15M, and repeatable 20M Jackpots.

Machine Setup

- Check Tournament Mode, ball-save seconds, Weapon Advance, locks, Extra Ball conversion, and whether game awards are disabled.

- Test both ramps, drop registration, Skull hold, Scoop eject, Croc Clock, VUK, Strike, lock release, and lane change before choosing a route.

Differences

Changes

- Tournament Mode uses fixed awards, and the update corrects ball-save behavior.

- Individual drop-target hits raise Left Ramp Value; the left ramp starts its cashout timer instead of raising the value.

- Alternating Multiball Jackpots rise from 10,000,000 to 15,000,000, then remain at 20,000,000; an early collapse can offer a restart.

- Pop-bumper hits rotate Power Scoop awards in a fixed order instead of choosing randomly.

## Sources

- [Data East Hook instruction manual](https://www.coinoperatorshop.com/media/products/manual/pinball/Data_East_1992_Hook_Manual.pdf)
- [IPDB Hook production ROM record](https://www.ipdb.org/machine.cgi?id=1233)
- [Hook scoring strategy discussion](https://pinside.com/pinball/forum/topic/school-me-on-hook-what-to-do-for-big-scores)
- [Hook unofficial 5.01 rules and change log](https://www.pinballcode.com/hook501)
- [PAPA Hook gameplay (PinballVideos archive)](https://pinballvideos.com/v/126)

## Playfield

[View the current playfield image](https://img.opdb.org/59680d07-dac8-448f-9cf6-8056d3854db6-large.jpg).

[Image credit and rights](image.json) · [Crop recipe](crop.json) · [Mappings](mappings.json)

Ruleset text and mapping data: CC BY-SA 4.0, FlutterCatch contributors. External images retain their separate rights.
