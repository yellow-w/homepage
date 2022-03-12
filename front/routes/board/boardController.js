exports.list = (req, res) => {
    res.render('board_list')
}

exports.write = (req, res) => {
    res.render('board_write')

}

exports.view = (req, res) => {
    res.render('board_view')
}

exports.update = (req, res) => {
    res.render('board_update')
}