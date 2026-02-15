import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import GithubProjects from './components/GithubProjects.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('GithubProjects', GithubProjects)
  }
}