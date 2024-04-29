export enum Routes {
  About = "/",
  Portfolio = "/portfolio",
  Articles = "/articles",
}

export enum Pages {
  About = "About",
  Portfolio = "Portfolio",
  Articles = "Articles",
}

export const routes = [
  {
    name: Pages.About,
    route: Routes.About,
  },
  {
    name: Pages.Portfolio,
    route: Routes.Portfolio,
  },
  {
    name: Pages.Articles,
    route: Routes.Articles,
  },
]
