/**
 * TP2 - Exercice 4 : Index et Optimisation
 */

use("medical_db");

// ─── 4.1 : Créer les index appropriés ────────────────────────────────────────

// Index 1 : Recherche fréquente par wilaya + antécédents
// TODO: Créer l'index composé approprié
// db.patients.createIndex({ ... });

// Index 2 : Recherche par date de consultation
// TODO:
// db.patients.createIndex({ ... });

// Index 3 : Texte sur diagnostics pour recherche full-text
// TODO:
// db.patients.createIndex({ ... });

// Index 4 : Analyses par patient (lookup)
// TODO:
// db.analyses.createIndex({ ... });


// ─── 4.2 : Comparer avec explain() ────────────────────────────────────────────

// Requête de test
const requeteTest = {
  "adresse.wilaya": "Alger",
  antecedents: "Diabète type 2"
};

print("=== AVANT index ===");
// TODO: Exécuter avec explain("executionStats") et afficher les métriques

print("\n=== APRÈS index ===");
// TODO: Après création de l'index, même requête avec explain()
// Comparer : nReturned, totalDocsExamined, executionTimeMillis

// ─── 4.4 : Index TTL pour archivage ───────────────────────────────────────────
// TODO: Créer un index TTL sur analyses.date pour expirer après 5 ans
// db.analyses.createIndex(
//   { date: 1 },
//   { expireAfterSeconds: ??? }
// );
