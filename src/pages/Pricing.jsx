import styles from "./Pricing.module.css" 
function Pricing() {
 return (
   <section className={styles.priceContainer}>
     <div className={`sectionCenter ${styles.priceCenter}`}>
       <div className={styles.priceContent}>
         <h2>
           Simple pricing. Just $9/month. Lorem ipsum dolor, sit amet
           consectetur adipisicing elit. Vitae vel labore mollitia iusto.
          
         </h2>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
           maxime beatae officia, quos sequi perspiciatis dolorem nulla commodi
           pariatur ut blanditiis! Eius, animi sint ea, recusandae maxime
           temporibus beatae doloremque quasi distinctio officiis quo fugit eos
           ad nemo necessitatibus et.
         </p>
       </div>
       <img src="../img-2.jpg" alt="img" className={styles.priceImg} />
     </div>
   </section>
 );
}

export default Pricing
