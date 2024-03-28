import axios from "axios";

export const getTags = async () => {
  try {
    const tags = await axios.get(
      "https://api.stackexchange.com/2.3/tags?order=asc&sort=popular&site=stackoverflow"
    );
    return { tags: tags.data };
  } catch (error) {
    console.error("Error fetching tags: " + error);
    throw error;
  }
};
