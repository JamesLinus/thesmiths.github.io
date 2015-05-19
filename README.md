## How To ...  write articles for TheSmiths

### Logistics
First of all, clone the repository with : `git clone
https://github.com/thesmiths/thesmiths.github.io.git`

Then, create a post using `./createArticle <title>`. It assume that **Node.js** is installed and
correctly configured on your machine. In case of trouble, install **Node.js** first and try again.

Now you can edit your article which has been placed in the *_posts* folder. See the section below
for more information about editing and writing an article. 

Once everything is done, just commit and publish your change by doing :

- `git add _posts`
- `git commit -m <messageThatExplainThePurposeOfTheArticle>`
- `git push origin master`

> You can commit your change all along your writing and only publish all changes at the end.

### Markdown & Jekyll
All articles in the *_posts* are processed by the **Jekyll** engine in order to be rendered as full
html pages. **Jekyll** is able to process **Markdown**; The engine in use is
[Kramdown](http://kramdown.gettalong.org/quickref.html), so, have a look at the documentation to
know what kind of tags are available. 
**Jekyll** is also built around [Liquid](https://docs.shopify.com/themes/liquid-documentation/basics)
and thus some variables and flow control sequences are available. 

In particular, you might find useful :

#### Meta-data
At the beginning of each article can be found some special data between union tags `---`. Those data
are processed when **Jekyll** build the website and should be filled and changed except for the
field *layout* which should be kept as is.

#### Syntax Highlighting
**Jekyll** provides a simple way to display snippets of code. Here it is :

```
{% highlight javascript %}
    console.log("This snippets is rendered in a pretty block-quote");
{% endhighlight %}
```

An additional `linenos` can be supplied with the language to also display line numbers.

#### Variables
Some variable are available on the page; Their content could be printed by using `{{ <ident> }}`.
Here is a small list of available variables :

- `site.url` : The url of the website, here http://wearesmiths.com
- `page.title` : The title of the article
- `page.date` : The date of the article. Could be formated using `page.date | date_to_string` or
  `page.date | date_to_long_string`

#### Excerpt
The content of your article and the summary that is displayed in the homepage are highly related.
Indeed, **Jekyll** will automatically parse all articles and return the *first part of an article* as its
excerpt. How to define this *first part of an article*? 
Everything above the tag `<!--more-->` is considered as the excerpt. If a cover picture has been
supplied in the meta-data, it will also be part of the excerpt. Be attemptive at what you put first
in your articles. 


