document.addEventListener("DOMContentLoaded", function() {
  const application = Stimulus.Application.start();

  application.register("offre", class extends Stimulus.Controller {
    static get targets() {
      return ["pricemensuf", "pricetrimf", "priceanuf", "pricemensub", "pricetrimb", "priceanub", "pricemensup", "pricetrimp", "priceanup"];
    }

    connect() {
      console.log("Vous êtes Connecté !");
    }

    convertToTrimester(event) {
      // Fonction pour convertir le prix en trimestriel
      const buttonClicked = event.currentTarget;
      const buttons = Array.from(buttonClicked.parentElement.children); // Obtient tous les boutons
      buttons.forEach(button => button.classList.remove('active')); // Supprime la classe active de tous les boutons
      buttonClicked.classList.add('active'); // Ajoute la classe active au bouton cliqué

      this.pricetrimfTarget.innerHTML = '<span class="prix">0€</span><span>/trimestre</span>'; // Met à jour l'affichage du prix
      this.pricetrimbTarget.innerHTML = '<span class="prix">51.30€</span><span>/trimestre</span>';
      this.pricetrimpTarget.innerHTML = '<span class="prix">159.30€</span><span>/trimestre</span>';
    }

    convertToMensuel(event) {
      // Fonction pour convertir le prix en mensuel
      const buttonClicked = event.currentTarget;
      const buttons = Array.from(buttonClicked.parentElement.children); // Obtient tous les boutons
      buttons.forEach(button => button.classList.remove('active')); // Supprime la classe active de tous les boutons
      buttonClicked.classList.add('active'); // Ajoute la classe active au bouton cliqué

      this.pricemensufTarget.innerHTML = '<span class="prix">0€</span><span>/mois</span>'; // Met à jour l'affichage du prix
      this.pricemensubTarget.innerHTML = '<span class="prix">19€</span><span>/mois</span>';
      this.pricemensupTarget.innerHTML = '<span class="prix">59€</span><span>/mois</span>';
    }

    convertToAnnuel(event) {
      // Fonction pour convertir le prix en anuel
      const buttonClicked = event.currentTarget;
      const buttons = Array.from(buttonClicked.parentElement.children); // Obtient tous les boutons
      buttons.forEach(button => button.classList.remove('active')); // Supprime la classe active de tous les boutons
      buttonClicked.classList.add('active'); // Ajoute la classe active au bouton cliqué

      this.priceanufTarget.innerHTML = '<span class="prix">0€</span><span>/an</span>'; // Met à jour l'affichage du prix
      this.priceanubTarget.innerHTML = '<span class="prix">159.60€</span><span>/an</span>';
      this.priceanupTarget.innerHTML = '<span class="prix">495.60€</span><span>/an</span>';
    }
  });
});
