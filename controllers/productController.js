export async function getProducts(req, res) {
    res.status(200).json({
        massage: 'Lấy danh sách sản phẩm thành công'
    })
}

export async function getProductById(req, res) {
    res.status(200).json({
        massage: 'Lấy thông tin sản phẩm thành công'
    })
}

export async function insertProduct(req, res) {
    res.status(200).json({
        massage: 'Thêm mới sản phẩm thành công'
    })
}

export async function deleteProduct(req, res) {
    res.status(200).json({
        massage: 'Xóa sản phẩm thành công'
    })
}

export async function updateProduct(req, res) {
    res.status(200).json({
        massage: 'Cập nhật sản phẩm thành công'
    })
}



