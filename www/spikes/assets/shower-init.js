/* Small presentation adapter. All content stays editable in shower.html. */
function wireShower(){
  document.getElementById('previous').onclick=()=>shower.prev();
  document.getElementById('next').onclick=()=>shower.next();
  document.getElementById('overview').onclick=()=>shower.isFullMode?shower.exitFullMode():shower.enterFullMode();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wireShower);else wireShower();
