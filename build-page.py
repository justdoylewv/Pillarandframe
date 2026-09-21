from pathlib import Path
from html import escape as e
import json
import re
root=Path(__file__).parent
old=(root/'dist/index.html').read_text()
head=old.split('<body>')[0].replace('Project Proof for Construction &amp; Trades','Project Stories · Central Ohio')
config_text=(root/'dist/content.js').read_text().split('window.PILLAR_CONTENT = ',1)[1].strip().removesuffix(';')
media_config=json.loads(config_text)
reel=media_config.get('reel',{})
origin='https://pillarandframe.com'
head=re.sub(r'<script id="hero-video-schema".*?</script>', '', head, flags=re.S)
head=re.sub(r'<link id="hero-poster-preload"[^>]*>', '', head)
import hashlib
css_v=hashlib.md5((root/'dist/style.css').read_bytes()).hexdigest()[:8]
head=re.sub(r'(href="/style\.css)(\?v=[^"]*)?(")', lambda m: m.group(1)+'?v='+css_v+m.group(3), head)
def abs_url(u):return u if u.startswith('http') else origin+u
samples=media_config.get('samples',{})
def video_schema(item):
 s={'@context':'https://schema.org','@type':'VideoObject','name':item['title'],'description':item.get('description') or item['title']}
 if item.get('poster'): s['thumbnailUrl']=[abs_url(item['poster'])]
 if item.get('duration'): s['duration']=item['duration']
 if item['kind']=='video': s['contentUrl']=abs_url(item['src'])
 else:
  s['embedUrl']=item['src'].split('?')[0]
  if item.get('hls'): s['contentUrl']=item['hls']
 return s
schemas=[video_schema(x) for x in [reel]+[samples[k] for k in sorted(samples)] if x.get('src') and x.get('kind') in ('video','embed')]
if schemas:
 inject=''
 if reel.get('poster'): inject+='<link id="hero-poster-preload" rel="preload" as="image" href="'+e(reel['poster'],quote=True)+'">'
 inject+='<script id="hero-video-schema" type="application/ld+json">'+json.dumps(schemas[0] if len(schemas)==1 else schemas)+'</script>'
 head=head.replace('</head>',inject+'</head>')
TOGGLE_JS='''<script>(function(){var t=[].slice.call(document.querySelectorAll('.plan-toggle button'));function s(b){t.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;var pnl=document.getElementById(x.getAttribute('aria-controls'));if(pnl)pnl.hidden=!on;});}t.forEach(function(b,i){b.addEventListener('click',function(){s(b);});b.addEventListener('keydown',function(ev){var n=ev.key==='ArrowRight'?i+1:ev.key==='ArrowLeft'?i-1:-1;if(n<0||n>=t.length)return;ev.preventDefault();t[n].focus();s(t[n]);});});})();</script>'''
def p(s):return '<p>'+s+'</p>'
def heading(k,t):return '<div class="section-heading"><p class="eyebrow">'+k+'</p><h2>'+t+'</h2></div>'
def cta(label='Book a 15-minute call'):return '<a class="button booking" href="#booking">'+label+' <span aria-hidden="true">↗</span></a>'
def ul(items):return '<ul>'+''.join('<li>'+x+'</li>' for x in items)+'</ul>'
def cap(key):
 item=samples.get(key,{})
 c=item.get('caption','')
 if not c and item.get('src'): return ''
 return '<p class="sample-caption">'+(c or 'Project title · Client name')+'</p>'
def slot(key,title):
 item=reel if key=='reel' else samples.get(key,{})
 name=e(item.get('title') or title,quote=True)
 if item.get('src') and item.get('kind')=='embed':
  return '<div class="media" data-media="'+key+'"><iframe src="'+e(item['src'],quote=True)+'" title="'+name+'" width="960" height="540" allow="fullscreen; picture-in-picture; encrypted-media" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>'
 if item.get('src') and item.get('kind')=='video':
  return '<div class="media" data-media="'+key+'"><video controls playsinline preload="none" width="960" height="540" poster="'+e(item.get('poster',''),quote=True)+'" src="'+e(item['src'],quote=True)+'" aria-label="'+name+'">Your browser does not support video playback.</video></div>'
 return '<div class="media" data-media="'+key+'"><div class="media-empty"><span class="frame-icon" aria-hidden="true">▷</span><strong>'+title+'</strong><span>Content placeholder · Video coming soon</span></div></div>'

h=[head,'<body><a class="skip" href="#main">Skip to content</a><div class="dark-top"><header class="wrap"><a class="brand" href="#main">pillar<span class="amp">&amp;</span>frame.</a><span class="location">Central Ohio</span><nav aria-label="Main navigation"><a href="#results">Project stories</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>'+cta()+'</nav></header></div><main id="main">']
h+=['<div class="dark-top"><section class="hero wrap"><p class="eyebrow pill">PROJECT STORIES FOR COMMERCIAL CONTRACTORS AND TRADES</p><h1>Your work. Your story.<br><span>Your proof.</span></h1><p class="hero-sub"><strong>You build things that matter. We make sure people see it.</strong></p><p class="hero-copy">We turn your real projects into proof that closes deals faster, keeps stakeholders confident, and attracts the best tradespeople.</p><ul class="hero-benefits">'+''.join('<li>'+x+'</li>' for x in ['Win the bids you should be winning','Shorten the gap between quote and signature','Keep owners and lenders current without another meeting','Bring good people to you instead of chasing them'])+'</ul><div class="cta-row">'+cta()+'<a class="secondary" href="#reel">See a Project Story <span aria-hidden="true">↓</span></a></div><p class="local-promise">Local crews. <strong>No travel costs. Ever.</strong></p></section><section class="wrap reel" id="reel" aria-label="Project story reel">'+slot('reel','Pillar & Frame · Project reel')+'</section><div class="reel-caption wrap"><span>POWERFIELD ENERGY OVERVIEW</span><span>2 MIN 35 SEC</span></div></div>']
h+=['<section class="section wrap sameness" id="why"><div><p class="eyebrow">THE PROOF PROBLEM</p><h2>Everybody has to<br>take your word for it.</h2></div><div>'+p('The committee choosing a contractor. The owner funding the job. The tradesperson deciding where to work next. Three different decisions, and not one of them is made by somebody who has seen you work.')+p("The difference is out on your projects. It is in the call your PM made when the drawings were wrong. The problem you found before it became the owner's problem. The work you stood behind after the invoice was paid.")+p('None of that leaves the site. We bring it back, and put it where the decision gets made.')+'</div></section>']
problems=[('Nothing to show',"You have finished a dozen projects and the only record is photos on a superintendent's phone."),('Deals stall after the quote','Your estimator sends the number and then waits. There is nothing to send on Thursday that is not a nudge.'),('Stakeholders in the dark','The owner is in another city reading a written report. He asks the same three questions every month.'),('Crews you cannot fill','You are short on every job and your careers page has a photo on it you bought from a website.')]
h+=['<section class="section soft"><div class="wrap">'+heading('SOUND FAMILIAR?','Common problems we see')+'<div class="four-grid">'+''.join('<article class="card"><span class="card-index">0'+str(i+1)+'</span><h3>'+t+'</h3>'+p(d)+'</article>' for i,(t,d) in enumerate(problems))+'</div></div></section>']
gets=[('The hero film.','Two to four minutes. The job start to finish, told by the people who did it and the client it was built for. This is the anchor, and everything else is trimmed from it. Built for the pre-qual package, the bid presentation, the trade show booth and your homepage.'),('The written case study.','Eight hundred to twelve hundred words at a link that is yours. It gets forwarded internally, it goes into an ENR or AGC awards submission, and it still ranks in two years.'),('The social set.','Five to ten verticals, fifteen to forty-five seconds each, captioned and ready to post. Some are moments from the job. Some are your people answering the question every buyer asks before they sign. Not one cut you ration out. A quarter of supply.')]
h+=['<section class="section wrap">'+heading('WHAT YOU GET','One job, three pieces, one link.')+'<div class="three-grid">'+''.join('<article class="card"><p class="eyebrow">0'+str(i+1)+'</p><h3>'+t+'</h3>'+p(d)+'</article>' for i,(t,d) in enumerate(gets))+'</div></section>']
process=[('Up to a full day on site.','We work around the job. Your crew keeps working. We bring cameras, insurance certificates, PPE and releases.'),('Access and permissions, sorted first.','Whatever the site requires, we handle before anyone shows up. You chase nothing.'),('Then we do the rest.','We interview, edit, write and build the page. You approve it once, in one place.')]
h+=['<section class="section wrap" id="process">'+heading('BUILT AROUND YOUR JOB','One day. We handle the rest.')+'<p class="section-intro">You are running a job, not a production. The process is built to take as little from you as possible.</p><div class="process-grid">'+''.join('<article><span>0'+str(i+1)+'</span><h3>'+t+'</h3>'+p(d)+'</article>' for i,(t,d) in enumerate(process))+'</div><p class="guarantee">First cut in fourteen days. <strong>If it is late, you do not pay.</strong><span>Everything else inside thirty. The clock pauses while we wait on your approvals.</span></p></section>']
usecases=[('sales','SALES','Closes deals faster','The committee stops taking your word for it and watches someone who already hired you.',['The project story goes in every pre-qual package','Your estimator sends the page on Thursday instead of a nudge','One link answers the question a proposal cannot']),('stakeholders','OWNERS, LENDERS, BOARDS','Keeps stakeholders confident','The people funding the work see it in their own time, without another meeting.',['A record of what was built and how it went','One page they can forward instead of forwarding a report','Dated, current and theirs to share internally']),('hiring','HIRING','Attracts the best tradespeople','Your people by name, on the work they did. That beats a job board every time.',['The story shows real crews doing real work','The social cut runs on hiring posts','The page sits on the careers page and does the convincing'])]
h+=['<section class="section results" id="results"><div class="wrap">'+heading('WHERE IT GOES','Win the bid.<br>Keep the owner.<br>Fill the crew.')]
for key,label,title,desc,items in usecases:
 h+=['<article class="usecase"><div class="usecase-copy"><div><p class="eyebrow">'+label+'</p><h3>'+title+'</h3>'+p(desc)+'</div>'+ul(items)+'</div><div class="sample-grid">'+''.join('<div class="sample">'+slot(key+'-'+str(i),label.title()+' · Sample '+str(i))+cap(key+'-'+str(i))+'</div>' for i in range(1,2))+'</div></article>']
h+=['</div></section>']
h+=['<section class="section compound"><div class="wrap sameness"><div><p class="eyebrow">IT COMPOUNDS</p><h2>One link is useful.<br><span>Four is a library.</span></h2></div><div>'+p('Do this once a quarter and by the end of the year every bid has a comparable project attached, every open role has real crews behind it, and every stakeholder has something current to look at.')+p('Nobody is digging through a folder of phone photos, because there is no reason to.')+'</div></div></section>']
h+=['<section class="section wrap deadline">'+heading('THE DEADLINE','A finished building is just a building.')+p('The proof is the work, and the work only exists while it is happening. Once the site demobilizes, no version of this can be recovered. Not at any price, not by anyone.')+p('If there is a job running right now that you would want a committee to see, that is the one.')+'</section>']
PRICES={
 # Fill these in. Anything left None renders as "Ask" rather than a number.
 'core_written':None,'core_video':None,
 'build_written':'$3,000','build_video':'$3,000',
 'recruiting':None,'stakeholder':None,'trade_partner':None,
 'safety':None,'pursuit':None,'leadership':None,
}
def money(k):return PRICES.get(k) or 'Ask'
core={
 'written':[('The core three',money('core_written'),'one project','The film, the written case study and the social set. Everything one job produces, out of one day on site.',
    ['Hero case study film, 2\u20134 min','Written case study, 800\u20131,200 words','Social cut set, 5\u201310 verticals at 15\u201345s'],False),
   ('The Build Record',money('build_written'),'a month, while the work runs','A job in progress is invisible to everyone not standing on it. We come out once a month, so there is always something current to send the owner, the lender and the board. One long build or a project a quarter, same arrangement.',
    ['A site visit every month','A short update cut each month for owners, lenders and the board','Everything in the core three for every project completed','Footage of the work that is now behind drywall'],True)],
 'video':[('The core two',money('core_video'),'one project','The film and the social set, without the written case study. Same day on site, same footage.',
    ['Hero case study film, 2\u20134 min','Social cut set, 5\u201310 verticals at 15\u201345s'],False),
   ('The Build Record',money('build_video'),'a month, while the work runs','A job in progress is invisible to everyone not standing on it. We come out once a month, so there is always something current to send the owner, the lender and the board. One long build or a project a quarter, same arrangement.',
    ['A site visit every month','A short update cut each month for owners, lenders and the board','Everything in the core two for every project completed','Footage of the work that is now behind drywall'],True)],
}
addon_films=[
 ('Recruiting cut, 60\u201390s','Talent acquisition','Crew voices, the career path, and why people stay.',money('recruiting')),
 ('Stakeholder and community cut, 2\u20133 min','Owner or developer public affairs','Local hiring, tax base, and the community benefit commitments.',money('stakeholder')),
 ('Trade partner spotlight, 60\u201390s','Your specialty subs','One per sub. Electrical, mechanical, concrete, steel.',money('trade_partner')),
 ('Safety culture cut, 90s','The safety director','For orientation, the insurance conversation and your EMR story.',money('safety')),
 ('Pursuit cut, 90s\u20132 min','Preconstruction','For shortlist interviews and design-build RFPs.',money('pursuit')),
 ('Leadership cut','The executive team','All-hands, board meetings and the annual review.',money('leadership')),
]
h+=['<section class="section wrap" id="pricing">'+heading('PRICING','One package.<br>One day on site.')+'<p class="section-intro">One price for the core, then a menu you can pull from. Same capture, same turnaround, same guarantee.</p><div class="plan-toggle" role="tablist" aria-label="Package format"><button type="button" role="tab" id="tab-written" aria-controls="panel-written" aria-selected="true">Video + written</button><button type="button" role="tab" id="tab-video" aria-controls="panel-video" aria-selected="false" tabindex="-1">Video only</button></div><p class="plan-note">The written case study is 800 to 1,200 words, written from the same interviews. Add it later at the difference in price.</p>']
for key,cards in core.items():
 h+=['<div class="pricing-grid pair" id="panel-'+key+'" role="tabpanel" aria-labelledby="tab-'+key+'"'+('' if key=='written' else ' hidden')+'>']
 for name,price,unit,desc,features,featured in cards:
  h+=['<article class="price-card'+(' featured' if featured else '')+'"><h3>'+name+'</h3><p class="price">'+price+'<span class="price-unit">'+unit+'</span></p>'+p(desc)+'<ul class="feature-list">'+''.join('<li>'+f+'<span aria-label="Included">\u2713</span></li>' for f in features)+'</ul>'+cta('Book an intro call')+'</article>']
 h+=['</div>']
h+=['<div class="included"><h3>Included in the core, whichever you pick</h3>'+ul(['Local crews. No travel costs, ever.','Site access, permissions and releases handled before the shoot','Up to a full day on site, working around your job','Interview direction so nobody has to perform','Twenty to thirty selected stills, culled and colour corrected','Your organized raw footage','One revision round','First cut in fourteen days, guaranteed','Everything else inside thirty days'])+'</div>']
h+=['<div class="addon-films"><h3>Add-on films</h3>'+p('Each of these answers to a different budget holder on the same job. Your marketing director does not have to carry all of it, and mostly should not.')+'<div class="tw"><table><caption class="sr-only">Add-on films, who they are for, and pricing</caption><thead><tr><th scope="col">Film</th><th scope="col">Who it is for</th><th scope="col">Price</th></tr></thead><tbody>'+''.join('<tr><td><strong>'+a+'</strong><span class="addon-note">'+d+'</span></td><td>'+b+'</td><td>'+c+'</td></tr>' for a,b,d,c in addon_films)+'</tbody></table></div></div>']
h+=['<div class="pricing-details"><div><h3>Capture options</h3>'+p('<strong>Up to a full day on site.</strong> One project, the interviews and the b-roll. Every add-on film is cut from that same day.')+p('<strong>Multi-project day.</strong> Three sites in one day, same market, shorter coverage on each. Ask.')+'</div><div><h3>Other add-ons</h3><table><caption class="sr-only">Optional deliverables and pricing</caption><thead><tr><th scope="col">Add-on</th><th scope="col">Price</th></tr></thead><tbody>'+''.join('<tr><td>'+a+'</td><td>'+b+'</td></tr>' for a,b in [('Full photography pass, beyond the stills included','$1,500'),('Extra quote answer video','$350 each'),('Crew spotlight graphics, set of 6','$600'),('Silent captioned loop for trade show booths','$600'),('Additional person on camera','$450')])+'</tbody></table></div></div>'+TOGGLE_JS+'</section>']
# The quote cards are parked, not deleted: the approved quotes are still in content.js
# and quote_card() still renders them if the section is put back. See CONTENT.md.
quotes=media_config.get('quotes',[])
def quote_card(i):
 q=quotes[i-1] if i-1<len(quotes) else {}
 if q.get('quote') and q.get('name'):
  who=' · '.join(e(x,quote=False) for x in [q.get('name'),q.get('title'),q.get('company')] if x)
  return '<article class="card" data-quote="'+str(i)+'"><span class="eyebrow">CLIENT STORY</span><p class="quote-text">“'+e(q['quote'],quote=False)+'”</p><p class="quote-person">'+who+'</p></article>'
 return '<article class="card quote-slot" data-quote="'+str(i)+'"><span class="eyebrow">CLIENT QUOTE PLACEHOLDER</span><p class="quote-text">Client quote to be added.</p><p class="quote-person">Name · Title · Company</p></article>'
terms=[('First cut in fourteen days or you do not pay.','The first cut is in your hands fourteen days after we leave the site. A day late and the project is free and you keep everything. The rest follows inside thirty days. The clock pauses while we are waiting on you, which means approvals, releases and sign-off from the owner or your client. It starts again the day we have what we need.'),('We work around your job.','Up to a full day on site, on your schedule. The work does not slow down.'),('If the footage is not right, we come back on our dime.','Our crews are local, so there are never travel costs. Not for the shoot and not if we need to come back.')]
h+=['<section class="section soft"><div class="wrap">'+heading('TERMS','The things we guarantee.')+'<div class="three-grid">'+''.join('<article><h3>'+a+'</h3>'+p(b)+'</article>' for a,b in terms)+'</div></div></section>']
faqs=[('Why is the price the same for every client?','Because the deliverables are. Custom scopes are why other vendors take three weeks to send you a proposal.'),('What is the difference between video plus written and video only?','Video only is the hero film and the social set. Video plus written adds the case study, eight hundred to twelve hundred words written from the same interviews. Same day on site either way.'),('Can I upgrade after the shoot?','Yes. We capture everything on the day regardless of package. Add the written case study or any add-on film within thirty days of the shoot at the difference in price.'),('What if the project is confidential?','Then it runs as work for hire. Delivered into your systems and never shown publicly, to named recipients only. Same price.'),('How long from the call to the page being live?','About five weeks. A week to sort access and scheduling, a day on site, your first cut fourteen days after that, and everything else inside thirty.'),('What do you need from my client?','Twenty minutes on camera and a release. We handle the ask if you would rather we did.'),('What if the weather turns?','We reschedule at no charge and the clock starts from the new date.'),('What if our approvals take a while?','The clock pauses. The turnaround is our time, not yours. If the owner sits on a release for three weeks, those three weeks are not counted against us, and the guarantee still stands on the rest.'),('Do we own the footage?','Yes. Your organized raw archive is included in every package.')]
h+=['<section class="section wrap faq" id="faq">'+heading('PRICING FAQ','A few things worth knowing.')+''.join('<details><summary>'+a+'</summary>'+p(b)+'</details>' for a,b in faqs)+'</section><section class="closing"><div class="wrap"><h2>The hard part<br>is already done.</h2>'+p('You built it. You solved the problems on site. The only thing missing is proof that it happened.')+cta()+p('Tell us what you are building right now. We will tell you straight whether this is worth doing.')+'</div></section></main><footer class="wrap"><a class="brand" href="#main">pillar<span class="amp">&amp;</span>frame.</a><p>Pillar &amp; Frame · Central Ohio · <a href="mailto:doyle@pillarandframe.com">doyle@pillarandframe.com</a> · <a href="tel:+13803240535">+1 380-324-0535</a></p><p class="legal-links"><a href="/privacy">Privacy policy</a> · <a href="/terms">Terms of service</a></p><a href="#main">Back to top ↑</a></footer><dialog id="booking" aria-labelledby="booking-title"><form method="dialog"><button class="close-dialog" aria-label="Close">×</button></form><p class="eyebrow">PILLAR &amp; FRAME · CENTRAL OHIO</p><h2 id="booking-title">Let’s talk about your project.</h2><p>Online booking is coming soon. Please check back for the 15-minute call link.</p><form method="dialog"><button class="button">Got it</button></form></dialog><script src="/content.js"></script><script src="/media.js"></script></body></html>']
(root/'dist/index.html').write_text('\n'.join(h))
if not (root/'dist/content.js').exists():
 config={'bookingUrl':'','reel':{'kind':'video','src':'','poster':'','title':'Pillar & Frame · Project reel','captions':''},'samples':{key+'-'+str(i):{'kind':'video','src':'','poster':'','title':label.title()+' · Sample '+str(i),'caption':'Project title · Client name','captions':''} for key,label,*_ in usecases for i in range(1,4)},'quotes':[{'quote':'','name':'','title':'','company':''} for _ in range(3)]}
 (root/'dist/content.js').write_text('// Replace empty strings with approved content. See CONTENT.md.\nwindow.PILLAR_CONTENT = '+json.dumps(config,indent=2)+';\n')
