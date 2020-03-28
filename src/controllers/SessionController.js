import connection from "../database/index";

class SessionController {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) res.status(400).json({ error: "No ONG found with this ID" });

    return res.json(ong);
  }
}
export default new SessionController();
