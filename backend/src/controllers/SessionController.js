const db = require('../database/connection');
const TABLE_NAME = 'ongs';

module.exports = {
    async create(req, res) {
        const { id } = req.body;
        const ong = await db(TABLE_NAME).where('id', id).select('name').first();
        if (!ong) {
            return res.status(400).json({ error: 'not ong with this id' });
        }
        return res.json(ong);
    }
}