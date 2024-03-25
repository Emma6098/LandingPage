function calculerPrixAgence(nombreDePosts, prixParPost) {
  return nombreDePosts * prixParPost;
}

// Fonction pour calculer le prix avec Eazia
function calculerPrixEazia(nombreDePosts) {
  const prixFixeEazia = 59; // Prix fixe avec Eazia
  if (nombreDePosts > 100) {
      // Si le nombre de posts dépasse 100, il y a un tarif différent
      // Vous pouvez ajuster cette condition selon vos besoins
      return prixFixeEazia * nombreDePosts;
  } else {
      return prixFixeEazia;
  }
}

// Fonction pour calculer les gains réalisés grâce à Eazia
function calculerGains(prixAgence, prixEazia) {
  return prixAgence - prixEazia;
}
