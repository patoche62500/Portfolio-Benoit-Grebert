/**
 * Enleve les espaces entre les mots et le remplace par _
 * @param {string} value - le mot a enlever les espaces
 * @returns {string} - le mot sans espaces
 */
export function removeSpace(value) {
  return value ? value.toLowerCase().split(" ").join("_") : null;
}

export async function fetchData(url) {
  try {
    // Chargez le fichier JSON
    const reponse = await fetch(url);

    if (!reponse.ok) {
      throw new Error("Erreur lors du chargement du fichier JSON");
    }

    // Convertissez la réponse en JSON
    const donneesJSON = await reponse.json();

    console.log("Données récupérées :", donneesJSON);

    return donneesJSON;
  } catch (erreur) {
    // Rejeter la promesse en cas d'erreur
    return Promise.reject(erreur);
  }
}

export function removeMajAndSpace(value) {
  return value.toLowerCase().split(" ").join("");
}

export function arrayProperty(value) {
  let propertys = [];

  for (const property in value) {
    if (value.hasOwnProperty(property)) {
      propertys.push(property);
    }
  }
  //console.log(propertys);
  return propertys;
}

export function searchPropertyArray(arrayValue, value) {
  let newArray = [];

  // Boucle sur le tableau "arrayValue" pour trouver le tableau correspondant à l'ID
  arrayValue.forEach((element) => {
    // Parcours des propriétés de l'élément
    for (const property in element) {
      if (element.hasOwnProperty(property) && property === value) {
        // Retourne le tableau correspondant à la propriété
        newArray = element[property];
        return;
      }
    }
  });

  return newArray;
}

// Fonction de comparaison pour trier par la première lettre
export function comparerPremieresLettres(a, b) {
  // typeof => fait référence au type de variable
  const premierLettreA = (typeof a === "string" ? a : a.title)
    .toLowerCase()
    .charAt(0);
  const premierLettreB = (typeof b === "string" ? b : b.title)
    .toLowerCase()
    .charAt(0);

  if (premierLettreA < premierLettreB) {
    return -1;
  } else if (premierLettreA > premierLettreB) {
    return 1;
  } else {
    return 0;
  }
}
