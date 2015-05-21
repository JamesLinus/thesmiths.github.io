---
layout: post
title: "Gotcha: Case sensitivity difference in simulator and device"
date:   2014-01-15 16:00:00
categories: TheSmiths # Feel free to add specific categories 
cover: # Add an available picture; Example : /media/cover.png
author: Wienke Giezeman 
repost: tidev
repost_link: http://www.tidev.io/2014/01/15/gotcha-case-sensitivity-difference-in-simulator-and-device/
---
Ran in to this already a while a go but it took me more than a day to figure out why my app was
crashing. And every Titanium developer will encounter this eventually.

<!--more-->

The gotcha of today is:

> For file references the device is case sensitive but the simulator is not.

For instance when you are when using the `require` or the `include` function. Referencing them with a
incorrect case usage will just work fine on the simulator, but not when deploying it to the device.

Hope you Googled “app crashes on device but runs on simulator” and this answer was useful.
