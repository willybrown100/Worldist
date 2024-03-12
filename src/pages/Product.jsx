import styles from "./Product.module.css"
function Product() {
 return (
   <section className={styles.section}>
     <div className={`sectionCenter ${styles.prodContainer}`}>
       <img src="./prod-img.jpeg" className={styles.prodImg}/>
       <div className={styles.prodContent}>
         <h2>About Worldist</h2>
         <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
           qui, itaque inventore cumque vel nam enim, eum corporis nihil libero
           magnam, sapiente quas. Autem soluta exercitationem quidem a,
           perferendis facere?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam impedit earum, nihil ullam nisi corrupti modi ipsa voluptatum sit natus eos perferendis ratione incidunt nostrum assumenda doloribus, accusantium officiis.
         </p>
       </div>
     </div>
   </section>
 );
}

export default Product
