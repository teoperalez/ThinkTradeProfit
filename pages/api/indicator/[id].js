import { data } from "../../../viddata";

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const { id } = request.query;

    const indi = data.find((indi) => indi.id.toString() === id);

    if (!indi) {
      return response.status(400).json("Indicator not found");
    }

    return response.status(200).json(indi);
  }
}