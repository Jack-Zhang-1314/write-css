const siteTitle = "A Fabulous Site"
const routes = {
  "404": {
    page: "/pages/404.html",
    title: "404 |" + siteTitle,
    description: "page not found",
  },
  '/': {
    page: "/pages/home.html",
    title: "Home |" + siteTitle,
    description: "Home page",
  },
  "/about": {
    page: "/pages/about.html",
    title: "about |" + siteTitle,
    description: "about us",
  },
  "/services": {
    page: "/pages/services.html",
    title: "services |" + siteTitle,
    description: "Our services",
  },
  "/contact": {
    page: "/pages/contact.html",
    title: "Contact |" + siteTitle,
    description: "Contact us",
  }
}

document.querySelector('nav').addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault()
    useRoute()
  }
})

//添加路由
const useRoute = (e) => {
  e = e || window.event
  e.preventDefault()
  //获取路由路径
  history.pushState({ page: location.pathname }, "", e.target.href)
  renderPage()
}

const renderPage = async () => {
  const local = location.pathname
  const route = routes[local] || routes["404"]
  const response = await fetch(route.page)
  const data = await response.text()
  document.querySelector("#root").innerHTML = data
  document.title = route.title
  document.querySelector("meta[name=description]").setAttribute("content", route.description)
}

onpopstate = renderPage

//renderPage()