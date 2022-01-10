import { data } from "../../../viddata";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { slug } = request.query;

    const vid = data.find((indi) => indi.slug.toString() === slug);

    if (!vid) {
      return response.status(400).json("Video not found");
    }

    return response.status(200).json(vid);
  }
}