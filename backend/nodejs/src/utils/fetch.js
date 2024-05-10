// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fetchGet = async ({ url, params }) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const fetchPost = async ({ url, data }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const fetchPatch = async ({ url, data }) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const fetchDelete = async ({ url }) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export { fetchGet, fetchPost, fetchPatch, fetchDelete };
