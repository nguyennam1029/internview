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
              placeholder=" M?? th????ng hi???u"
              brandCode={brandCode}
              onChange={(e) => handleBrandCode(e.target.value)}
            />
            <br></br>
            <input
              type="text"
              placeholder=" T??n th????ng hi???u"
              cateProCode={CateProCode}
              onChange={(e) => handleBrandName(e.target.value)}
            />
            <button type="submit">Th??m</button>
          </form>
        </div>
        <table>
          <tr>
            <th>STT</th>
            <th>Check</th>
            <th>Action</th>
            <th>M?? s???n ph???m</th>
            <th>T??n s???n ph???m</th>
            <th>G??a s???n ph???m</th>
            <th>% Khuy???n m??i</th>
            <th>Gi?? khuy???n m??i</th>
            <th>Khuy???n m??i theo gi??</th>
            <th>Th????ng hi???u</th>
            <th>Nh??m s???n ph???m</th>
            <th>Tr???ng th??i</th>
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
            Danh s??ch t???t c??? s???n ph???m
          </li>
          <li className="item" onClick={() => handleShowFlagTrue()}>
            Danh s??ch c??c s???n ph???m ??ang kinh doanh
          </li>
          <li className="item" onClick={() => handleShowFlagFalse()}>
            Danh s??ch c??c s???n ph???m ng???ng kinh doanh
          </li>
        </ul>
      </div>
    </div>
  );
};
