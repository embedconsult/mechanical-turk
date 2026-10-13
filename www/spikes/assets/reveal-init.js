/* Small presentation adapter. All content stays editable in reveal.html. */
Reveal.initialize({width:1280,height:720,margin:0.04,center:false,hash:true,controls:false,progress:true,transition:'none',backgroundTransition:'none',disableLayout:false,keyboard:true,touch:true,help:true,autoAnimate:false}).then(()=>{
  document.getElementById('previous').onclick=()=>Reveal.prev();
  document.getElementById('next').onclick=()=>Reveal.next();
  document.getElementById('overview').onclick=()=>Reveal.toggleOverview();
});
const printCopy=document.createElement('main');
printCopy.className='print-clone';
printCopy.setAttribute('aria-hidden','true');
for(const slide of document.querySelectorAll('.reveal .slides>.workshop')){
  const copy=slide.cloneNode(true);copy.removeAttribute('id');copy.removeAttribute('style');copy.classList.remove('past','present','future');copy.removeAttribute('hidden');copy.removeAttribute('inert');printCopy.appendChild(copy);
}
document.body.appendChild(printCopy);
