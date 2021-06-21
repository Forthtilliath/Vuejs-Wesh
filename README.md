# Introduction

Le projet utilise VueJs et suit la vidéo : [Créer une interface utilisateur avec Vuejs](https://www.youtube.com/watch?v=siy9ETx68NU).

# Intérêts du projet

Ce projet tourne à nouveau autour de VueJS afin de m'entrainer dessus. Par rapport au projet [Vivino](https://github.com/Forthtilliath/Vivino-VueJS), il permet de gérer des likes ainsi que l'état du panier de l'utilisation.

# Problèmes rencontrés

Aucun problème rencontré lors de ce projet.

# Ce que m'a apporté ce projet

### Router

J'ai pu découvrir comment faire fonctionner un router sur vueJS ainsi que la mise en place d'une page via un template. J'ai pu constaté que chaque page, même si elles étaient toutes dans le même fichier, étaient finalement bien segmentées à l'aide des objets Vue.

### Observeurs

Contrairement au projet Vivino, ce projet utilise bien plus d'observeurs pour gérer les likes et le panier. Ca m'a permis de bien prendre conscience dans quelle situation il est préférable d'utiliser ``computed``, ``methods`` ou ``watch``.

### Affichages conditionnels et dynamiques

Dans ce projet, j'ai vu encore plus en profondeur les possibilités liées à l'affichage en fonction du contenu des propriétés de notre objet Vue.

J'ai pu constater la simplicité pour afficher un contenu dynamique (tel que le montant total du panier mis à jour après une modification du panier).

### Gestion des cookies

Afin de garder en mémoime les likes de l'utilisateur, ceux ci sont conservés dans un cookie. Ce projet m'a montré comment les gérer, de la création/modification à l'utilisation après un refresh.

### Résumé

C'était un projet très intéressant. La rapidité de VueJS est indéniable et j'ai trouvé cela très pratique sur un site ecommerce, qui demande pas mal de modification d'affichages (avec le panier entre autre).

# Améliorations apportées au projet

Le projet concerve les likes de l'utilisateur, mais pas son panier. J'ai donc apporter les modifications nécessaires pour que celui soit conservé après un refresh.

Contrairement au like, le cookie n'était pas toujours mis à jour (lors de la modification de la quantité par exemple). 
```
cart: {
    $cookies.set('cart', JSON.stringify(this.cart));
}
```
J'ai du mettre la création du cookie dans une méthode et ajouter une propriété deep à true, afin d'observer les modifications du panier en profondeur (ce qui est le cas pour la quantité).
```
cart: {
    handler() {
        $cookies.set('cart', JSON.stringify(this.cart));
    },
    deep: true,
}
```

# Screenshots du résultat

![home](/screenshots/home.png)
![search](/screenshots/search.png)
![like](/screenshots/like.png)
![cart](/screenshots/cart.png)