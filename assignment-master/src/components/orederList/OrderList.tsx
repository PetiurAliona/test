import styles from './OrederList.module.scss';

interface Props {
    packages: [];
    deletePack: (packIndx:number) => void;
}

const OrderList = ({packages, deletePack}:Props)  => {
    return (
        <>
        <h2 className={styles.packageTitle}>Your packages</h2>
            {packages.length ? <p className={styles.totalPrice}>Total price: {packages.reduce((totalPrice, { price }) => totalPrice + price, 0)}</p> :
                <p>You haven`t packages</p>}
        <ul>
                {packages.map(({ weight, height, width, length, price }, index )=>
                <li key={index} className={styles.packageItem}>
                    <p className={styles.packageInfo}>Weight: {weight}</p>
                    <p className={styles.packageInfo}>Height: {height}</p>
                    <p className={styles.packageInfo}>Width: {width}</p>
                    <p className={styles.packageInfo}>Length: {length}</p>
                    <p className={styles.packageInfo}> Price: {price}</p>                        
                    <button className={styles.deleteBtn} onClick = {() => deletePack(index)}>Delete package</button>
                    </li>)}
                
        </ul>
            </>
    );
}

export default OrderList;