import { useState } from "react";

const ProductTransfer = () => {
  const [uploadedProducts, setUploadedProducts] = useState([]); // Products from the uploaded file
  const [selectedProducts, setSelectedProducts] = useState([]); // Selected products in the left box
  const [movedProducts, setMovedProducts] = useState([]); // Products moved to the right box

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Mock data, replace this with actual file parsing logic
      const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ];
      setUploadedProducts(products);
    }
  };

  const toggleSelectProduct = (product) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(product)
        ? prevSelected.filter((p) => p !== product)
        : [...prevSelected, product]
    );
  };

  const moveToRight = () => {
    setMovedProducts((prev) => [...prev, ...selectedProducts]);
    setUploadedProducts((prev) =>
      prev.filter((p) => !selectedProducts.includes(p))
    );
    setSelectedProducts([]);
  };

  const moveToLeft = () => {
    setUploadedProducts((prev) => [...prev, ...selectedProducts]);
    setMovedProducts((prev) =>
      prev.filter((p) => !selectedProducts.includes(p))
    );
    setSelectedProducts([]);
  };

  return (
    <>
      <div
        className="row align-items-center justify-content-between"
        style={{ maxHeight: "80vh", height: "100%" }}
      >
        {/* Left Container */}
        <div className="col-md-5 border p-2">
          <h5>Uploaded Products</h5>
          {uploadedProducts.map((product) => (
            <div key={product.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedProducts.includes(product)}
                onChange={() => toggleSelectProduct(product)}
              />
              <label className="form-check-label">{product.name}</label>
            </div>
          ))}
        </div>

        {/* Move Buttons */}
        <div className="col-md-2 d-flex flex-column align-items-cente ">
          <button
            className="btn btn-xs btn-primary mb-1"
            onClick={moveToRight}
            disabled={selectedProducts.length === 0}
          >
            &gt;&gt;
          </button>
          <button
            className="btn btn-xs btn-primary"
            onClick={moveToLeft}
            disabled={selectedProducts.length === 0}
          >
            &lt;&lt;
          </button>
        </div>

        {/* Right Container */}
        <div className="col-md-5 border p-3">
          <h5>Selected Products</h5>
          {movedProducts.map((product) => (
            <div key={product.id} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedProducts.includes(product)}
                onChange={() => toggleSelectProduct(product)}
              />
              <label className="form-check-label">{product.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* File Upload Section */}
      <div className="row mt-4">
        <div className="col-md-4">
          <h3>Upload File</h3>
          <input
            type="file"
            className="form-control"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </>
  );
};

export default ProductTransfer;
