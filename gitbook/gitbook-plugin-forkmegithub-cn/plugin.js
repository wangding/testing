require(["gitbook","jQuery"],function(n,e){var i,r={red:{src:"http://sample.wangding.co/images/fork-me-on-github-red.webp"},green:{src:"http://sample.wangding.co/images/fork-me-on-github-green.webp"},darkblue:{src:"http://sample.wangding.co/images/fork-me-on-github-darkblue.webp"},orange:{src:"http://sample.wangding.co/images/fork-me-on-github-orange.webp"},gray:{src:"http://sample.wangding.co/images/fork-me-on-github-gray.webp"}},t={};n.events.bind("start",function(e,o){t=(o=o)["forkmegithub-cn"],o=r[t.color],i='<a id="forkmegithub" href="'+t.url+'"><img src="'+o.src+'" alt="Fork me on GitHub""></img></a>',n.toolbar.createButton({icon:"fa fa-github",label:"GitHub",position:"right",onClick:function(){window.open(t.url)}})}),n.events.bind("page.change",function(){e(".book .book-body .body-inner").append(i)})});