import { useAttendees } from '@/hooks/useAttendees';
import { useResult } from '@/hooks/useResult';

/**
 * Embaralha um array de strings.
 *
 * @param {string[]} array - O array de strings a ser embaralhado.
 * @returns {string[]} Um novo array de strings embaralhado.
 *
 * @example
 * const names = ['Alice', 'Bob', 'Charlie'];
 * const shuffledNames = shuffle(names);
 * console.log(shuffledNames); // A ordem dos nomes pode ser diferente em cada execução.
 */
export function shuffle(array: string[]): string[] {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Cria um mapeamento circular, onde cada amigo é associado ao próximo amigo na lista.
 * O último amigo é associado ao primeiro.
 *
 * @param {string[]} friends - Um array de strings representando os amigos.
 * @returns {Map<string, string>} Um mapa onde a chave é o nome do amigo e o valor é o nome do próximo amigo.
 *
 * @example
 * const friends = ['Alice', 'Bob', 'Charlie'];
 * const result = draw(friends);
 * console.log(result);
 * // Saída: Map(3) { 'Alice' => 'Bob', 'Bob' => 'Charlie', 'Charlie' => 'Alice' }
 */
export function draw(friends: string[]) {
  const newResult = new Map<string, string>();
  const totalFriends = friends.length;

  for (let index = 0; index < totalFriends; index++) {
    const friendIndex = index === totalFriends - 1 ? 0 : index + 1;
    newResult.set(friends[index], friends[friendIndex]);
  }

  return newResult;
}

export const useDrawer = () => {
  const { attendees } = useAttendees();
  const { setResult } = useResult();

  return () => {
    const shuffledFriends = shuffle(attendees);
    const newResult = draw(shuffledFriends);
    setResult(newResult);
    return newResult;
  };
};
