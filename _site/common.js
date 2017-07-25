
/* iframe自适应内容高度 */
function setIframeHeight(iframe) {
if (iframe) {
var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
if (iframeWin.document.body) {
iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
}
}
};

window.onload = function () {
  alert(1);
var a = setIframeHeight(document.getElementById('view_frame_id'));
    alert(a.toString());
};
