const Paths = {
    home: '/home',
    start: '/start',
    questions: '/questions',
    

    // ==================================================
    // Validar rotas existentes
    // ==================================================

  get existRoutes() {
    return [
      `^${this.home}$`, 
      `^${this.start}$`, 
      `^${this.questions}$`, 
    ];
  },
  exist(route) {
    return this.existRoutes.find(path => RegExp(path).test(route));
  },

}

export default Paths;

export const route = (path, component) => ({

path, component, exact: true})

