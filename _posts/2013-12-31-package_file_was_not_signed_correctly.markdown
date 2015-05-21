---
layout: post
title:  "Gotcha: \"Package file was not signed correctly\""
date:   2013-12-31 16:00:00
categories: TheSmiths # Feel free to add specific categories 
cover: # Add an available picture; Example : /media/cover.png
author: Wienke Giezeman 
---
Sometimes you run into an issue which costs you way to long to fix and could be prevented by having
just a little piece of knowledge. If your swearing ends with “That has costs me a day of work!” when
you found the issue. Odds are you got a gotcha. Here is one I ran into lately.

<!--more-->

*If you do not want to read further here is the catch:*

> Do not create the keystore and sign your APK with a different JAVA version.

The story: This christmas I ran into an interesting issue with regards to signing Android apps. I
just finished the Android version of [WappZapp](http://wappzapp.tv) and submitted it to the Play Store. When downloading
the app, after installation users saw this message:

So the situation was:

1. No errors whatsoever while building.
2. No errors when submitting the app.
3. Only an error when installing the app from the Play Store :(
Also when trying to install the app with adb it would not install and give this error message:

{% highlight java %}
MacBook-Air-van-Wienke-2:wappzapp wienke$ adb install -r /Users/wienke/Desktop/WappZapp.apk
4423 KB/s (23248682 bytes in 5.132s)
    pkg: /data/local/tmp/WappZapp.apk
Failure [INSTALL_PARSE_FAILED_NO_CERTIFICATES]
{% endhighlight %}

After doing trying all kinds of things and doing some research I found an answer to this issue
by, the to you all familiar, @stephenfeather.

My situation was just as he describes:

> It goes something like this:  
Sometime in September, ‘Sure I’d like to upgrade to the latest/best Java tools’  
Sometime in December, ‘why the heck doesnt this stuff work, it worked last time I tried it!!!!’   
Oracle really needs to fix it.

For another project I was using JDK 1.7, meanwhile I had also JDK 1.6 on my machine and the
shipped Apple version. When I found out that I created the keystore with the shipped version on
my Mac and signed the app with that version it worked.

Hope to have saved you a day of work.

**Update 5-1-2014:**

Pratik suggested another way to workaround the problem. Very helpful if you already have an app
that is signed with the generated keystore in the Play Store.

> Another way to work around this using an JDK version is to pass some additional flags to the jar 
signer as so:

{% highlight java %}
jarsigner -verbose -sigalg MD5withRSA -digestalg SHA1 -keystore my-release-key.keystore
my_app.apk alias_name
{% endhighlight %}
