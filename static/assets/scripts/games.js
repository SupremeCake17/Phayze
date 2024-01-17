document.addEventListener("DOMContentLoaded", () => {
  const appList = [
    {
      name: 'now.gg',
      link: 'https://now.gg/',
    },
    {
      name: 'youtube',
      link: 'https://youtube.com/',
    }
  ]
  var appInd = 0;
  appList.forEach((app) => {
    const columnDiv = document.createElement('div')
    columnDiv.classList.add('column')
    columnDiv.style.display = 'flex'
    columnDiv.style.alignItems = 'center'
    // const btn = document.createElement('button')
    // btn.style.float = 'right'
    // btn.style.backgroundColor = 'rgb(255,255,255)'
    // btn.style.borderRadius = '50%'
    // btn.style.borderStyle = "solid"

    const link = document.createElement('a')
    link.style.padding = '50px'
    link.style.borderStyle = 'solid'
    link.appendChild(columnDiv)
    link.onclick = function(){
      GoTo(app.link)
    }
  })
})

function GoTo(link) {
  window.navigator.serviceWorker
  .register("./sw.js", {
      scope: __uv$config.prefix,
  })
  .then(() => {
      sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(link));
      location.href = "image-galleries";
  });
  function isUrl(val = "") {
  if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
  )
      return true;
  return false;
  }
}