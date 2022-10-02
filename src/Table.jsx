import React, { useState } from "react";

import _ from "lodash";
import "./table.css";

export const Table = () => {
  let lstProducts = [
    {
      BrandCode: "SAMSUNG",
      CateProCode: "DIENTHOAI",
      ProductCode: "GALAXYS22ULTRA",
      ProductName: "Galaxy S22 Ultra 5G 128GB",
      Price: 27000000,
      UPDc: 2000000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 0,
    },
    {
      BrandCode: "SAMSUNG",
      CateProCode: "DIENTHOAI",
      ProductCode: "GALAXYZFLIP3",
      ProductName: "Galaxy Z Flip3 5G 256GB",
      Price: 17000000,
      UPDc: 1700000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
    {
      BrandCode: "IPHONE",
      CateProCode: "DIENTHOAI",
      ProductCode: "IPHONE13PROMAX",
      ProductName: "iPhone 13 Pro Max 128GB",
      Price: 29000000,
      UPDc: 2900000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
    {
      BrandCode: "IPHONE",
      CateProCode: "DIENTHOAI",
      ProductCode: "IPHONE13MINI",
      ProductName: "iPhone 13 Mini 526GB",
      Price: 24000000,
      UPDc: 3000000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 0,
    },
    {
      BrandCode: "OPPO",
      CateProCode: "DIENTHOAI",
      ProductCode: "OPPORENO7",
      ProductName: "Oppo Reno7",
      Price: 9990000,
      UPDc: 1500000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 1,
    },
    {
      BrandCode: "XIAOMI",
      CateProCode: "DIENTHOAI",
      ProductCode: "XIAOMIREDMINOTE11",
      ProductName: "Xiaomi Redmi Note 11",
      Price: 4490000,
      UPDc: 449000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
  ];

  const [listProducts, setListProducts] = useState(lstProducts);
  console.log(listProducts);
  //   ==================================
  const handleDelete = (name) => {
    // let currentListProduct = _.clone(listProducts);
    let currentListProduct = [...listProducts];
    currentListProduct = currentListProduct.filter(
      (item) => item.ProductName !== name
    );
    setListProducts(currentListProduct);
    console.log("ITem", name);
  };

  //   =========================
  const handleShowAll = () => {
    setListProducts(lstProducts);
  };

  const handleShowFlagTrue = () => {
    let currentListProduct = [...lstProducts];
    currentListProduct = currentListProduct.filter(
      (item) => item.FlagActive == 1
    );
    setListProducts(currentListProduct);
  };

  const handleShowFlagFalse = () => {
    let currentListProduct = [...lstProducts];
    currentListProduct = currentListProduct.filter(
      (item) => item.FlagActive == 0
    );
    setListProducts(currentListProduct);
  };

  //   ========================
  const [addProduct, setAddProduct] = useState("");
  const [brandCode, setBrandCode] = useState("");
  const [CateProCode, setCateProCode] = useState("");

  const handleBrandCode = (e) => {
    setBrandCode(e);
  };

  const handleBrandName = (e) => {
    setCateProCode(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {
      BrandCode: brandCode,
      CateProCode: CateProCode,
    };
    setAddProduct(formValue);

    const newProduct = {
      ...addProduct,
    };
    setListProducts([...listProducts, newProduct]);
  };

  console.log(listProducts);
  return (
    <div className="container">
      <div className="table">
        <div className="add-product">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder=" Mã thương hiệu"
              brandCode={brandCode}
              onChange={(e) => handleBrandCode(e.target.value)}
            />
            <br></br>
            <input
              type="text"
              placeholder=" Tên thương hiệu"
              cateProCode={CateProCode}
              onChange={(e) => handleBrandName(e.target.value)}
            />
            <button type="submit">Thêm</button>
          </form>
        </div>
        <table>
          <tr>
            <th>STT</th>
            <th>Check</th>
            <th>Action</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Gía sản phẩm</th>
            <th>% Khuyến mãi</th>
            <th>Giá khuyến mãi</th>
            <th>Khuyến mãi theo giá</th>
            <th>Thương hiệu</th>
            <th>Nhóm sản phẩm</th>
            <th>Trạng thái</th>
          </tr>

          {listProducts &&
            listProducts.length > 0 &&
            listProducts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td></td>
                  <td onClick={() => handleDelete(item.ProductName)}>Delete</td>
                  <td>{item.ProductCode}</td>
                  <td>{item.ProductName}</td>
                  <td>{item.Price}</td>
                  <td>{item.UPRateDc}</td>
                  <td>{item.UPDc}</td>
                  <td>{item.FlagPrice}</td>
                  <td>{item.BrandCode}</td>
                  <td>{item.CateProCode}</td>
                  <td>{item.FlagActive}</td>
                </tr>
              );
            })}
        </table>

        <ul className="list">
          <li className="item" onClick={() => handleShowAll()}>
            Danh sách tất cả sản phẩm
          </li>
          <li className="item" onClick={() => handleShowFlagTrue()}>
            Danh sách các sản phẩm đang kinh doanh
          </li>
          <li className="item" onClick={() => handleShowFlagFalse()}>
            Danh sách các sản phẩm ngừng kinh doanh
          </li>
        </ul>
      </div>
    </div>
  );
};
