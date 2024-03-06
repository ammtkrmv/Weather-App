export const fetchCities = async (search: string) => {
  const url = `https://api.api-ninjas.com/v1/city?name=${search}`;
  const headers = process.env.REACT_APP_CITY_API_KEY ? { 'X-Api-Key': process.env.REACT_APP_CITY_API_KEY } : undefined;

  const res = await (
    await fetch(url, {
      method: 'GET',
      headers: headers,
    })
  ).json();

  console.log(res)

  return res
    .map((i: any) => {
      return i.name + ', ' + i.country;
    });
};
