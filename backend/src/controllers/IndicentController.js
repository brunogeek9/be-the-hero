const con = require('../database/connection');
const TABLE_NAME = 'incidents';
module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.autorization;
        const [id] = await con(TABLE_NAME).insert({ title, description, value, ong_id });
        return res.json({ id });
    },
    async index(req, res) {
        const { page = 1 } = req.params;
        console.log(`Pagina ${page}`);
        const [count] = await con(TABLE_NAME).count();
        console.log(count);
        res.header('X-Total-Count', count['count(*)'])

        const incidents = await con(TABLE_NAME)
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        return res.json(incidents);
    },
    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.autorization;
        const incidents = await con(TABLE_NAME)
            .where('id', id)
            .select('ong_id')
            .first();
        if (incidents.ong_id != ong_id) {
            return res.status(401).json({ error: 'operation not permited' });
        }
        await con(TABLE_NAME).where('id', id).delete();
        return res.status(204).send();

    }
}