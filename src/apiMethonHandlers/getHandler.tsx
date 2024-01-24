const getHandler = async (url: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + url
  ).catch((err) => {
    if (!err.response) {
        throw new Error("Internal Server Error");
      }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const responseData = await response.json();
  return responseData;
};

export default getHandler;
