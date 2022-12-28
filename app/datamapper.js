const client = require("./database");
const bcrypt = require('bcrypt');

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

    async getAllCategories(){
        const sql = `
            SELECT *
            FROM category`;
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
            WHERE email = $1`;
        const values = [form.email];
        const result = await client.query(sql, values);
        if (result.rows[0]) {
            const user = result.rows[0];
            const pwdOK = await bcrypt.compare(form.password, user.pwd);
            if (pwdOK) {
                return user;
            }
        }
        return false;
    },

    async updateDrink(drinkId, body) {
        const name = body.name;
        const maker = body.maker;
        const infos = body.infos;
        let isalcool;
        if (body.isalcool) {
            isalcool = true;
        } else {
            isalcool = false;
        }
        const sql = `
            UPDATE drink
            SET name = $1, maker = $2, infos = $3, isalcool = $4
            WHERE id = $5`;
        const values = [name, maker, infos, isalcool, drinkId];
        await client.query(sql, values);
    },

    async deleteReview(reviewId) {
        const sql = `
            DELETE FROM review
            WHERE id = $1
            RETURNING drink_id`;
        const values = [reviewId];
        const result = await client.query(sql, values);
        return result.rows[0];
    },

    async deleteDrink(drinkId) {
        const sql = `
            DELETE FROM drink
            WHERE id = $1`;
        const values = [drinkId];
        await client.query(sql, values);
    },

    async availableDrink(drinkId) {
        const sql = `
            UPDATE drink
            SET isavailable = true
            WHERE id = $1`;
        const values = [drinkId];
        await client.query(sql, values);
    },

    async unavailableDrink(drinkId) {
        const sql = `
            UPDATE drink
            SET isavailable = false
            WHERE id = $1`;
        const values = [drinkId];
        await client.query(sql, values);
    },

    async addDrink(body) {
        const category_id = parseInt(body.category_id);
        let isalcool = false;
        if (body.isalcool) {
            isalcool = true;
        }
        const sql = `
            INSERT INTO drink (name, maker, infos, isalcool, category_id)
            VALUES ($1, $2, $3, $4, $5)`;
        const values = [body.name, body.maker, body.infos, isalcool, category_id];
        await client.query(sql, values);
    },

    async updateAverageRate(drinkId) {
        const sql = `
            UPDATE drink
            SET averagerate = (SELECT ROUND(AVG(rate)) FROM review WHERE drink_id = $1)
            WHERE drink.id = $2;`;
        const values = [drinkId, drinkId];
        await client.query(sql, values);
    },

    async addStar(drinkId) {
        const sql = `
            UPDATE drink
            SET starscounter = starscounter + 1
            WHERE drink.id = $1;`;
        const values = [drinkId];
        await client.query(sql, values);
    }
};

module.exports = datamapper;
