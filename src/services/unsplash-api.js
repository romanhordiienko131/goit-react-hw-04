import axios from "axios";

async function fetchImages(query, page) {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: "rGKu6IhP0wBn_lKOwOYJSnAVPqHHLp7MTpjYKm3EwMY",
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
}

export default fetchImages;
