export enum Routes {
  About = '/',
  Portfolio = '/portfolio',
  Articles = '/articles'
}

export enum Pages {
  About = 'About',
  Portfolio = 'Portfolio',
  Articles = 'Articles'
}

export const routes = [{
  name: Pages.About,
  route: Routes.About,
  component: './routes/About.svelte'
}, {
  name: Pages.Portfolio,
  route: Routes.Portfolio,
  component: './routes/Portfolio.svelte'
}, {
  name: Pages.Articles,
  route: Routes.Articles,
  component: './routes/Portfolio.svelte'
}]