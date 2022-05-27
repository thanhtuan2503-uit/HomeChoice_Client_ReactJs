const product_01_image_01 = require('../images/products/product-01.webp').default
const product_01_image_02 = require('../images/products/product-01.webp').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02.webp').default
const product_02_image_02 = require('../images/products/product-02.webp').default

const product_03_image_01 = require('../images/products/product-03.webp').default
const product_03_image_02 = require('../images/products/product-03.webp').default

const product_04_image_01 = require('../images/products/product-04.webp').default
const product_04_image_02 = require('../images/products/product-04.webp').default

const product_05_image_01 = require('../images/products/product-04.webp').default
const product_05_image_02 = require('../images/products/product-04.webp').default

const product_06_image_01 = require('../images/products/product-01.webp').default
const product_06_image_02 = require('../images/products/product-01.webp').default

const product_07_image_01 = require('../images/products/product-02.webp').default
const product_07_image_02 = require('../images/products/product-02.webp').default

const product_08_image_01 = require('../images/products/product-03.webp').default
const product_08_image_02 = require('../images/products/product-03.webp').default

const product_09_image_01 = require('../images/products/product-04.webp').default
const product_09_image_02 = require('../images/products/product-04.webp').default

const product_10_image_01 = require('../images/products/product-01.webp').default
const product_10_image_02 = require('../images/products/product-01.webp').default

const product_11_image_01 = require('../images/products/product-02.webp').default
const product_11_image_02 = require('../images/products/product-02.webp').default

const product_12_image_01 = require('../images/products/product-03.webp').default
const product_12_image_02 = require('../images/products/product-03.webp').default

const products = [
    {
        title: "Nồi chiên không dầu Magic Eco AC-110",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "noi-chien",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."    
    },
    {
        title: "Nồi chiên không dầu Magic Korea A-83 (Trắng) ",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "noi-chien",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi cơm Niêu điện tử Magic Korea A-86",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "noi-com",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>- Thiết kế hiện đại, sang trọng, phù hợp với mọi không gian.<br>- Thương hiệu Hàn Quốc.<br>- Lòng nồi niêu hợp kim nhôm không gỉ siêu bền.<br>-Dung tích lên đến 1,8 lít.<br>-Công nghệ nhiệt 3D giúp cơm chín đều và nhanh hơn.<br>-6 chức năng nấu đa dạng.<br>-Bảng điều khiển dễ dàng sử dụng.<br>-Chức năng hẹn giờ nấu tiện dụng.<br>-Dễ dàng vệ sinh chùi rửa."
    },
    {
        title: "Quạt làm mát và lọc không khí Iruka I-99",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "quat-lanh",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"],
        description: "TÍNH NĂNG NỔI BẬT<br>- Chế độ làm lạnh nhanh <br>- Chế độ tạo ion lọc không khí<br>- Cánh quạt tự đóng khi tắt<br>- Màn hình điều khiển cảm ứng<br>- Chế độ hẹn giờ thông minh<br>- 3 chế độ gió tự động<br>- 4 chế độ đảo chiều gió<br>- Remote điều khiển từ xa<br>- 4 bánh xe thuận tiện di chuyển <br>- Lưu lượng gió lên tới 2268m3/h <br>- Lưới lọc bằng gỗ sồi dày<br>- Motor 100% bằng đồng<br>- Dung tích hộc chứa nước 17 lít"
    },
    {
        title: "Quạt làm mát và lọc không khí Iruka I-99",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "quat-lanh",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"],
        description: "TÍNH NĂNG NỔI BẬT<br>- Chế độ làm lạnh nhanh <br>- Chế độ tạo ion lọc không khí<br>- Cánh quạt tự đóng khi tắt<br>- Màn hình điều khiển cảm ứng<br>- Chế độ hẹn giờ thông minh<br>- 3 chế độ gió tự động<br>- 4 chế độ đảo chiều gió<br>- Remote điều khiển từ xa<br>- 4 bánh xe thuận tiện di chuyển <br>- Lưu lượng gió lên tới 2268m3/h <br>- Lưới lọc bằng gỗ sồi dày<br>- Motor 100% bằng đồng<br>- Dung tích hộc chứa nước 17 lít"
    },
    {
        title: "Nồi chiên không dầu Magic Eco AC-110",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "noi-chien",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi chiên không dầu Magic Korea A-83 (Trắng) ",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "noi-chien",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi cơm Niêu điện tử Magic Korea A-86",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "noi-com",
        colors: ["white", "red", "black"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>- Thiết kế hiện đại, sang trọng, phù hợp với mọi không gian.<br>- Thương hiệu Hàn Quốc.<br>- Lòng nồi niêu hợp kim nhôm không gỉ siêu bền.<br>-Dung tích lên đến 1,8 lít.<br>-Công nghệ nhiệt 3D giúp cơm chín đều và nhanh hơn.<br>-6 chức năng nấu đa dạng.<br>-Bảng điều khiển dễ dàng sử dụng.<br>-Chức năng hẹn giờ nấu tiện dụng.<br>-Dễ dàng vệ sinh chùi rửa."
    },
    {
        title: "Quạt làm mát và lọc không khí Iruka I-99",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "quat-lanh",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"],
        description: "TÍNH NĂNG NỔI BẬT<br>- Chế độ làm lạnh nhanh <br>- Chế độ tạo ion lọc không khí<br>- Cánh quạt tự đóng khi tắt<br>- Màn hình điều khiển cảm ứng<br>- Chế độ hẹn giờ thông minh<br>- 3 chế độ gió tự động<br>- 4 chế độ đảo chiều gió<br>- Remote điều khiển từ xa<br>- 4 bánh xe thuận tiện di chuyển <br>- Lưu lượng gió lên tới 2268m3/h <br>- Lưới lọc bằng gỗ sồi dày<br>- Motor 100% bằng đồng<br>- Dung tích hộc chứa nước 17 lít"
    },
    {
        title: "Nồi chiên không dầu Magic Eco AC-110",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "noi-chien",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi chiên không dầu Magic Korea A-83 (Trắng) ",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "noi-chien",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        size: ["s", "m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi cơm Niêu điện tử Magic Korea A-86",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "noi-com",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>- Thiết kế hiện đại, sang trọng, phù hợp với mọi không gian.<br>- Thương hiệu Hàn Quốc.<br>- Lòng nồi niêu hợp kim nhôm không gỉ siêu bền.<br>-Dung tích lên đến 1,8 lít.<br>-Công nghệ nhiệt 3D giúp cơm chín đều và nhanh hơn.<br>-6 chức năng nấu đa dạng.<br>-Bảng điều khiển dễ dàng sử dụng.<br>-Chức năng hẹn giờ nấu tiện dụng.<br>-Dễ dàng vệ sinh chùi rửa."
    },
    {
        title: "Nồi chiên không dầu Magic Eco AC-110",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "noi-chien",
        colors: ["white", "red"],
        slug: "ao-thun-dinosaur-13",
        size: ["s", "m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi chiên không dầu Magic Korea A-83 (Trắng)",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "noi-chien",
        colors: ["white", "blue"],
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>Thương hiệu Hàn Quốc.<br>Made in Thailand.<br>Bảo hành chính hãng 2 năm.<br>Công nghệ Rapid Air - Xoáy nhiệt tách dầu.<br>Dung tích cực lớn 6 Lít.<br>Giảm 90% lượng dầu mỡ.<br>Màn hình cảm ứng Siêu nhạy.<br>Tích hợp 8 chức năng nấu tự động.<br>Thiết kế sang trọng, hiện đại.<br>Lòng nồi thép không gỉ, chống dính.<br>Đa dạng chế biến thực phẩm.<br>Lọc mùi, giảm khói.<br>Dễ dàng vệ sinh, chùi rửa."
    },
    {
        title: "Nồi cơm Niêu điện tử Magic Korea A-86",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "noi-com",
        colors: ["red", "blue"],
        slug: "ao-thun-dinosaur-15",
        size: ["xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>- Thiết kế hiện đại, sang trọng, phù hợp với mọi không gian.<br>- Thương hiệu Hàn Quốc.<br>- Lòng nồi niêu hợp kim nhôm không gỉ siêu bền.<br>-Dung tích lên đến 1,8 lít.<br>-Công nghệ nhiệt 3D giúp cơm chín đều và nhanh hơn.<br>-6 chức năng nấu đa dạng.<br>-Bảng điều khiển dễ dàng sử dụng.<br>-Chức năng hẹn giờ nấu tiện dụng.<br>-Dễ dàng vệ sinh chùi rửa."
    },
    {
        title: "Nồi cơm Niêu điện tử Magic Korea A-86",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "noi-com",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        size: ["m", "xl"],
        description: "TÍNH NĂNG NỔI BẬT CỦA SẢN PHẨM<br>- Thiết kế hiện đại, sang trọng, phù hợp với mọi không gian.<br>- Thương hiệu Hàn Quốc.<br>- Lòng nồi niêu hợp kim nhôm không gỉ siêu bền.<br>-Dung tích lên đến 1,8 lít.<br>-Công nghệ nhiệt 3D giúp cơm chín đều và nhanh hơn.<br>-6 chức năng nấu đa dạng.<br>-Bảng điều khiển dễ dàng sử dụng.<br>-Chức năng hẹn giờ nấu tiện dụng.<br>-Dễ dàng vệ sinh chùi rửa."
    },
    {
        title: "Quạt làm mát và lọc không khí Iruka I-99",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "quat-lanh",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        size: ["s", "l", "xl"],
        description: "TÍNH NĂNG NỔI BẬT<br>- Chế độ làm lạnh nhanh <br>- Chế độ tạo ion lọc không khí<br>- Cánh quạt tự đóng khi tắt<br>- Màn hình điều khiển cảm ứng<br>- Chế độ hẹn giờ thông minh<br>- 3 chế độ gió tự động<br>- 4 chế độ đảo chiều gió<br>- Remote điều khiển từ xa<br>- 4 bánh xe thuận tiện di chuyển <br>- Lưu lượng gió lên tới 2268m3/h <br>- Lưới lọc bằng gỗ sồi dày<br>- Motor 100% bằng đồng<br>- Dung tích hộc chứa nước 17 lít"
    },
    {
        title: "Quần jean phong cách 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-18",
        size: ["s", "m", "l", "xl"],
        description: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động <br><br><br> Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động"
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData