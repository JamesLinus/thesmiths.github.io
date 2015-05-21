---
layout: post
title:  "User feedback: A picture says more than a thousand words"
date:   2014-01-11 16:00:00
categories: TheSmiths # Feel free to add specific categories 
cover: # Add an available picture; Example : /media/cover.png
author: Wienke Giezeman
repost: tidev
repost_link: http://www.tidev.io/2014/01/11/user-feedback-a-picture-says-more-than-a-thousand-words/
---
So I thought, let’s make this easier. Why not make a little widget which is activated upon shaking
the device. Making a screenshot on the fly, draw on it to show what the feedback is about and
providing a feedback input box.

<!--more-->

When submitting the feedback an email is composed to me. Also, I added the incoming ticket email
address of my Jira system, so the tickets end up directly in there with the screenshot.

![Schema #1](/media/articles/user-feedback/schema1.png)

Of course as Appcelerator is cross platform it both works on Android and iOS.

The widget can be found [here](https://github.com/WappZapp/shake2feedback)
You can also install it using gitTio with:

`gittio install wz.Feedback`

It depends on the 
[ti.paint module](https://github.com/appcelerator/titanium_modules/tree/master/paint)

Feel free to contribute!
