export const personageMag = { name: 'Маг', health: 90 };
export const personageWarrior = { name: 'Воин', health: 40 };
export const personageDwarf = { name: 'Воин', health: 10 };

export default function healthStatus(obj) {
  let status;

  if (obj.health < 15) {
    status = 'critical';
  }

  if (obj.health < 50 && obj.health >= 15) {
    status = 'wounded';
  }

  if (obj.health > 50) {
    status = 'healthy';
  }

  return status;
}
