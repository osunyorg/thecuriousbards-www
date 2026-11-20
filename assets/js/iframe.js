function fixIframeHeight(iframe) {
  iframe.onload = function () {
    iframe.style.display = "block";
  }
}

// document.querySelectorAll('iframe').forEach(fixIframeHeight);
