import styles from "./Cart.module.css";
import Modal from '../UI/Modal'
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Daal Chawal", amount: "1", price: "220" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>256</span>
      </div>
      <div className={styles.actions}>
        <button className={styles[`button--alt`]}>Close</button>
        <button className={styles.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
