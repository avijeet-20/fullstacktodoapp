const z = require('zod');

const todoschema = z.object({
    title:z.string(),
    description:z.string(),
})

const fetchschema = z.object({
    id:z.string()
})

module.exports = {
    todoschema,
    fetchschema
}