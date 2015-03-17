var Index = require('../app/controllers/index')
var Category = require('../app/controllers/category')
var Article = require('../app/controllers/article')
module.exports = function(app) {
    app.get('/', Index.index)
    app.get('/admin/category/new', Category.new)
    app.get('/admin/category/list', Category.list)
    app.post('/admin/category', Category.save)
    app.delete('/admin/category/list',Category.del)
    app.get('/admin/article/new', Article.new)
}
