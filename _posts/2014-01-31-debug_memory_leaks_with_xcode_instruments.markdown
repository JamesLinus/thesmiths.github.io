---
layout: post
title:  Debug memory leaks with XCode Instruments
date:   2014-01-31 16:00:00
categories: TheSmiths Debug# Feel free to add specific categories 
cover: /media/articles/debug-memory-leaks/cover.png
repost: tidev
repost_link: http://www.tidev.io/2014/01/31/debug-memory-leaks-with-xcode-instruments/ 
author: Wienke Giezeman 
---

Using Appcelerator doesn’t mean you don’t have to take care of memory leaks.
Odds are there is at least one leak in your app right now. Relatively unknown is that this can be
easily detected with some XCode Instruments. I’ll show you how.

<!--more-->

##Walkthrough
Run your app from Titanium Studio or CLI in the Simulator or on a device. Then launch XCode and go
to *Xcode > Open Developer Tool > Instruments*

![Schema #1](/media/articles/debug-memory-leaks/schema1.png)

Now choose *Allocations*

![Schema #2](/media/articles/debug-memory-leaks/schema2.png)

In the drop down menu go to Attach to Process and select your app in the System section if it runs
in Simulator or on the device listed. The list is not alphabetically sorted so keep looking :)

![Schema #3](/media/articles/debug-memory-leaks/schema3.png)

##Filtering
Filter on TiUI or Proxy and you will see the Titanium objects appearing while navigating through
your app. The objects should be disappearing when they are no longer active. Each label will appear
as a TiUILabel so you won’t know which label. Try to debug one window at a time so you get a better
idea where the leak is exactly.

![Schema #4](/media/articles/debug-memory-leaks/schema4.png)

##Gotcha
Be aware of the fact that when you are running in the Simulator the amount of memory is equal to
your Mac. Garbage collection might take a while because of that. Unfortunately there is no way to
manually trigger the garbage collector. A workaround is hooking the Allocation instrument up to a
device with little memory.

Also see this talk on leaking apps at [Codestrong 2012](https://vimeo.com/29804284).
