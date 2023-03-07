export function getPetExerciseInfo(type, age) {
  // Tu código aquí 🤟🏻🔥
  switch (type) {
    case "perro":
        if (age <= 1){
            return "Los cachorros necesitan pequeñas y frecuentes sesiones de  juego";
        }

        if (age > 1 && age <= 7) {
            return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
        }

        if (age >= 8) {
            return "Los perros viejos necesitan caminatas más cortas";
        }

        break;

    case "gato":
        if (age <= 1){
            return "Los gatitos necesitan frecuentes sesiones de juego";
        }

        if (age > 1 && age <= 7) {
            return "Los gatos a esta edad necesitan jugar diariamente";
        }

        if (age >= 8) {
            return "Los gatos viejos necesitan sesiones de juego más cortas";
        }

        break;

    case "ave":
        if (age <= 1){
            return "Las aves jóvenes necesitan mucho espacio para volar";
        }

        if (age > 1 && age <= 7) {
            return "Las aves necesitan jugar diariamente y un lugar para volar";
        }

        if (age >= 8) {
            return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
        }

        break;

    default:
        return "Tipo de mascota inválida";
  };

}
