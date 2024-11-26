// helpers/groupPassengersByCountry.ts


export function grupoPais(data: any[]) {
  const mapaPaises: { [key: string]: { id: number; passenger_name: string }[] } = {};

  data.forEach(({ id, passenger_name, origin, destination }) => {
    if (!mapaPaises[origin]) mapaPaises[origin] = [];
    if (!mapaPaises[destination]) mapaPaises[destination] = [];

    mapaPaises[origin].push({ id, passenger_name });
    mapaPaises[destination].push({ id, passenger_name });
  });

  const categorias = Object.keys(mapaPaises)
    .sort() 
    .map((country) => ({
      title: `${country} (${mapaPaises[country].length})`,
      data: mapaPaises[country],
    }));

  return categorias;
}
