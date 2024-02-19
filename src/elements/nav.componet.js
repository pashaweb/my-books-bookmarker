'use strict';

angular.module('myApp').component('navigation', {
  template: `
  <nav>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#!/search">Search</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#!/favorites">Favorites</a>
    </li>
</nav>
  `,
}); 


