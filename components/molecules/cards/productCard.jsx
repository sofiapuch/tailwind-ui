import styles from './productCard.module.css';

const ProductCard = () => {

  const imageUrl = 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80';

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt="Image of a car" />
      </div>
      <div className="content">
        <div className="heading">
          <h4>Volkswagen Golf</h4>
          <p>2.0 TSI GTI TCR</p>
        </div>
        <div className="details">
          <div className={styles.detailsRow}>
            <p>Art</p>
            <p>Gebrauchtwagen</p>
          </div>
        </div>
        <div className="pricing">
          <p>32.000€</p>
          <p>mtl. ab 395€</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;