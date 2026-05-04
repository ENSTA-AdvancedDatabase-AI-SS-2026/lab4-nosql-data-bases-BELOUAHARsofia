/**
 * TP2 - Exercice 3 : Pipelines d'Agrégation
 * Use Case : Statistiques médicales HealthCare DZ
 */

use("medical_db");

// ─── 3.1 : Distribution des diagnostics par wilaya ────────────────────────────
print("=== 3.1 : Top diagnostics par wilaya ===");

const diagParWilaya = db.patients.aggregate([
  // TODO: Étape 1 - $unwind sur consultations
  // TODO: Étape 2 - $group par wilaya + diagnostic
  // TODO: Étape 3 - $sort par count
  // TODO: Étape 4 - $limit 20
]).toArray();

// printjson(diagParWilaya);

// ─── 3.2 : Médicament le plus prescrit par spécialité ─────────────────────────
print("\n=== 3.2 : Top médicaments par spécialité ===");

const medsParSpecialite = db.patients.aggregate([
  // TODO: $unwind consultations, puis $unwind medicaments
  // $group par specialite + nom_medicament
  // $sort + $group pour garder le top 1 par spécialité
]).toArray();

// ─── 3.3 : Évolution mensuelle des consultations ──────────────────────────────
print("\n=== 3.3 : Consultations par mois (12 derniers mois) ===");

const evolutionMensuelle = db.patients.aggregate([
  { $unwind: "$consultations" },
  { $match: {
    "consultations.date": {
      $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    }
  }},
  // TODO: $group par année + mois
  // TODO: $sort par date
  // TODO: $project pour formater la date en "YYYY-MM"
]).toArray();

// ─── 3.4 : Patients à risque multiple ────────────────────────────────────────
print("\n=== 3.4 : Profil patients à risque élevé ===");

const patientsRisque = db.patients.aggregate([
  {
    $match: {
      antecedents: { $all: ["Diabète type 2", "HTA"] },
      // TODO: Ajouter filtre âge > 60
    }
  },
  // TODO: $addFields pour calculer l'âge et le nombre de consultations
  // TODO: $group pour les statistiques globales
]).toArray();

// ─── 3.5 : Rapport médecins ───────────────────────────────────────────────────
print("\n=== 3.5 : Top 5 médecins & taux de ré-consultation ===");

const rapportMedecins = db.patients.aggregate([
  { $unwind: "$consultations" },
  // TODO: $group par médecin, compter patients uniques et consultations totales
  // TODO: $addFields pour calculer le taux de ré-consultation
  // = (total_consultations - patients_uniques) / patients_uniques * 100
  // TODO: $sort + $limit 5
]).toArray();

printjson(rapportMedecins);
