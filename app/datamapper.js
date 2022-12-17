const client = require("./database");

const datamapper = {
    async getAllCategoriesWithDrinks(){
        try {
            const sql = `
            SELECT category.name AS name, JSON_agg(drink) AS drinks
            FROM drink
            JOIN category ON category.id = drink.category_id
            GROUP BY category.name
        `;
            const result = await client.query(sql);
            return result.rows;
        } catch (error) {
            console.error(error);
            return;
        }
    }
};

module.exports = datamapper;