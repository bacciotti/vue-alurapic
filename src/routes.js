// import Cadastro from './components/cadastro/Cadastro';

//Lazy Loading do componente cadastro
const Cadastro = () => System.import('./components/cadastro/Cadastro');

import Listagem from './components/listagem/Listagem';
import Home from './components/home/Home.vue'

export const routes = [
  {path: '', name: 'home', component: Home, titulo: 'Home', menu: true},
  {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
  {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
  {path: '/listagem', component: Listagem, titulo: 'Listagem', menu: true},
  {path: '*', component: Home, menu: false}
];
