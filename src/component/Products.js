import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/cart-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addLocalProduct } from "./localStorage";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col" key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "300px" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.Title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(product));
                      dispatch(addLocalProduct(product));
                    }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
export default Products;
