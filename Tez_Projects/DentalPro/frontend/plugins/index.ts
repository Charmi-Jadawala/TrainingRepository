import markdownIt from 'markdown-it'
const markdown = {
   install: (app: any, options: any) => {
      app.config.globalProperties.$md = new markdownIt();
   }
}
export default (vue) => {
   vue.use(markdown, {});
}

