---
layout: post
title:  Ad serving with AdMob-DFP
date:   2014-01-20 18:08:00
categories: TheSmiths # Feel free to add specific categories 
cover: /media/articles/ad-serving/cover.jpg
repost: tidev
repost_link: http://www.tidev.io/2014/01/20/ad-serving-with-admobdfp/
author: Wienke Giezeman
---

One of several business models for making money with your app is of course advertising.

<!--more-->

##Ad serving platforms
The best way to serve ads in your app is by using an ad serving platform. The concept of ad serving
is simple. Publishers provide inventory, advertisers provide ads, when the request meets demand
based on price and priority an ad is shown. As a publisher you present your inventory realtime and
the server responds directly with an ad (or nothing if there is no ad available).


##AdMob/DFP
At [WappZapp](http://wappzapp.tv) we tried several ad serving systems and ended up with Google’s
adserving platform AdMob/DFP. The first got acquired by Google and serves as a base of the SDK for
both services.

###AdMob

AdMob is for small publishers and directly connects you to a network of advertisers. Which is nice
if you do not want to sell your ad space yourself. An AdMob account can be created
[here](http://www.google.com/ads/admob).

###DFP

DFP gives you more control and the possibility to manage your own advertisers. We choose this
alternative. A DFP account can be requested
[here](https://www.google.com/intl/nl/doubleclick/publishers/welcome)

##DFP for Titanium
For using DFP with Appcelerator there was one problem though. The current AdMob module does not yet
support DFP ad units. Luckily, fixing this was not that hard. The first thing I needed to do was add
the support for custom sizes adds in the iOS and Android module.

Secondly, use a different type of adunit. For DFP it is a composition of your DFP account id and the
ad unit id: `[dfp_id]/[ad_unit_id]`. This can be easily requested from the inventory section within
DFP. You can find the AdMob module with DFP support on GitHub. Feel free [to
contribute](https://github.com/wienke/titanium_modules/tree/master/admob/mobile).

##Conclusions
- Get hooked up fast? Use AdMob
- Get in control of your ads? Use DFP

