const fetchData = async (URL) => {
  let data = 'no data';
  const response = await fetch(URL);
  if (response.ok) {
    data = await response.json();
    return data;
  }
  return data;
};

export default fetchData;
