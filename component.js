// table qui contient les artiste
Vue.component('tableartiste', {
  props: ['table'],
  template: `
    <table  class="table">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Type</th>
                    <th scope="col">Score</th>
                    <th scope="col">Pays</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="artist in table" >
                    <td>{{artist.name}}</td>
                    <td>{{artist.type}}</td>
                    <td>{{artist.score}}</td>
                    <td>{{artist.country}}</td>
                    <td><a v-bind:href="'artisteProfile.html?id='+artist.id"><button class="btn btn-primary">voir profil</button></a></td>
                  </tr>
                </tbody>
    </table>
    `
});
// tableau qui contient les albums
Vue.component('tablealbum', {
  props: ['talbum'],
  template: `
    <table  class="table">
                <thead>
                  <tr>
                    <th scope="col">titre album</th>
                    <th scope="col">auteur</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="album in talbum" >
                    <td>{{album.title}}</a></td>
                    <td>{{album['artist-credit'][0].artist.name}}</td>
                    <td><a v-bind:href="'album.html?id='+album.id"><button class="btn btn-primary">voir album</button></a></td>
                  </tr>
                </tbody>
    </table>
    `
});
// composant qui contient les info perso d'un artiste
Vue.component('infoartiste', {
  props: ['listinfo'],
  template: `
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      {{listinfo.name}}
    </div>
    <div class="card-body">
      <p>date de naissance : {{listinfo['life-span'].begin}}</p>
      <p>pays : {{listinfo.country}}</p>
      <p>type : {{listinfo.type}}</p>
    </div>
</div>
  `
});
// composant qui contient la liste des chanson d'un album
Vue.component('titrealbum',{
  props:['titre'],
  template:`
  <div>
    <ul>
      <li v-for="t in titre">{{t.title}}</li>
    </ul>
  </div>
  `
})