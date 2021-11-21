import React, { useState } from "react";

import OrderForm from "../form/OrderForm";
import OrderList from "../orederList/OrderList";

import styles from './Order.module.scss';

type TPackages = []
type TDelete = (packIndx:number) => void

const Order = () => {
    const [packages, setPackages] = useState<TPackages>([])
    
    const deletePack: TDelete = (packIndx) => {
        const newPack:any = packages.filter((el, index) => index !== packIndx)
        setPackages(newPack)
    }
           
    return (      
        <>
        <div className={styles.container}>    
            <OrderForm setPackages ={setPackages} packages={packages} />
            <OrderList packages={packages} deletePack={deletePack}/>
        </div>     
        </>
    );
}

export default Order;