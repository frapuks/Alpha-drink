const client = require("./database");

const datamapper = {
    async getAllCategoriesWithDrinks(){
        const sql = `
            SELECT category.name AS name, JSON_agg(drink) AS drinks
            FROM drink
            JOIN category ON category.id = drink.category_id
            GROUP BY category.name`;
        const result = await client.query(sql);
        return result.rows;
    },

    async getOneDrinkById(id) {
        // TODO Récupérer la boisson selon le paramètre id, avec sa catégorie et ses commentaires
        const sql = `
            SELECT *,drink.id AS id, drink.name AS name, category.name AS category
            FROM drink
            JOIN category ON category.id = drink.category_id
            WHERE drink.id = $1`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async getReviewByDrinkId(id) {
        const sql = `
            SELECT *
            FROM review
            WHERE drink_id = $1
            ORDER BY id DESC`;
        const values = [id];
        const result = await client.query(sql, values);
        return result.rows;
    },

    async createReview(form) {
        const currentDate = new Date();
        const sql = `
            INSERT INTO review (name, date, rate, content, drink_id)
            VALUES ($1, $2, $3, $4, $5)`;
        const values = [form.name, currentDate, form.rate, form.contentReview, form.drink_id];
        await client.query(sql, values);
    },

    async findUser(form) {
        const sql = `
            SELECT *
            FROM "user"
            WHERE email = $1 AND pwd = $2`;
        const values = [form.email, form.password];
        const result = await client.query(sql, values);
        return result.rows[0];
    }
};

module.exports = datamapper;
