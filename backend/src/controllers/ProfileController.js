const db = require('../database/connection');
const TABLE_NAME = 'incidents';
module.exports = {
    async index(req, res) {
        const ong_id = req.headers.autorization;
        const result = await db(TABLE_NAME)
            .where('ong_id',ong_id)
            .select('*');
        return  res.json(result);
    }
}