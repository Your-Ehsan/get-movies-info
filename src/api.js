export async function fetchInitialReq(search, page) {
  // console.log(search, page)
  const req = await fetch(
    `${import.meta.env.VITE_API_KEY}&s=${search}&page=${page}`
  );
  if (!req.ok) {
    throw {
      message: "Failed to fetch data",
      statusTex: req.statusText,
      status: req.status,
    };
  }
  const Data = await req.json();
  return Data;
}
export async function fetchRequiredReq(obj) {
  const req = await fetch(
    `${import.meta.env.VITE_API_KEY}&i=${obj.params.id}&plot=full`
  );
  if (!req.ok) {
    throw {
      message: "Failed to fetch required movie data",
      statusTex: req.statusText,
      status: req.status,
    };
  }
  const Data = await req.json();
  return Data;
}
