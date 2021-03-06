const productos = []
const getFormulario = (req, res) => {
    try {
        res.render('form.ejs', { bitForm: 1 })
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}
const getProductos = (req, res) => {
    try {
        res.render('listProductos.ejs', { productos, bitForm: 0 })

    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}

const addProductos = (req, res) => {
    try {
        productos.push(req.body)
        res.redirect('/')
    } catch (e) {
        console.log('Error:', e)
        res.sendStatus(500)
    }
}

module.exports = {
    getFormulario,
    getProductos,
    addProductos
}