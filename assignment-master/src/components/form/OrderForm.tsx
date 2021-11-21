import React, { useState, useEffect } from "react";
import { addOrder, addQuote, getCountry } from "../../utils/apiService";
import styles from './OrderForm.module.scss';

import { toast } from "react-toastify";
import Input from "../input/Input";

interface Props {
  setPackages: any;
  packages: []
}

interface IPackageInfo {
  weight: number | string; height: number | string; width: number | string; length: number | string;
}

interface IError {
  name: string;
  message: string;
}

const OrderForm = ({setPackages, packages}:Props) => {
  const [countryFrom, setCountryFrom] = useState("SI")
  const [countryTo, setCountryTo] = useState("SI")
  const [countries, setCountries] = useState([]) 
  const [error, setError] = useState({weight: "" , height: "" , width: "" , length: "" }) 
 
  const [packageInfo, setPackageInfo] = useState<IPackageInfo>({ weight: "" , height: "" , width: "" , length: ""  })    
  
  useEffect(() => {
    getCountry()
      .then(data => setCountries(data))
      .catch(err=>console.log(err))
  }, [])

   useEffect(() => {
   setPackages([])
  }, [countryFrom, countryTo, setPackages ])

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPackageInfo((prev) => ({ ...prev, [name]: Number(value)}))
    setError((prev) => ({ ...prev, [name]: ""}))
  }

  const onChangePackages = () => {
    if (!packages.length) {
      toast.error(`You have not packages`)
      return
    }
    addOrder({ countryFrom, countryTo, packages })
      .then(({ message, totalPrice}) => {
        toast.success(`${message}! Total price:${totalPrice}`)
        setPackages([])
      });
    
  }


    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();     
      addQuote({ countryFrom, countryTo, packages: [packageInfo] })
        .then(({ quote: { packages } }) => {
          setPackages((prev: []) => ([...prev, { ...packageInfo, price: packages[0].price }]))
          setPackageInfo({ weight: "", height: "", width: "", length: "" })
        })
        .catch(({ errors }) => errors.forEach(({ name, message }: IError) => {
          const newName = name.slice(name.indexOf('.')+1) 
          setError((prev) => ({ ...prev, [newName]: message }))
                }))
      
    };

    return (
        <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Make an order</h1>
            <form onSubmit={onHandleSubmit}>
                <label  className={styles.selectLabel}>
                        Choose origin country
                         <select name="countryFrom"
                                 className={styles.selectCountry}
                                 defaultValue={countryFrom}
                                 onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountryFrom(e.target.value)}>
                                 {countries.map(({ id, name}) => <option value={id} key={id}>{name}</option>)}
                        </select>                
                  
                </label>
                 <label className={styles.selectLabel}>
                    Choose destination country
                    <select  name="countryTo"          
                              className={styles.selectCountry}
                              defaultValue={countryTo}
                              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountryTo(e.target.value)}>
                            {countries.map(({ id, name}) => <option value={id} key={id}>{name}</option>)}                           
                        </select>  
            </label>
            <h2>Packages</h2>
             
            <Input onChange={onHandleChange}
                    type="number"
                    name="weight"
                    value={packageInfo.weight}
                    label="Weight"
                    isError={error.weight}
            />
            <Input onChange={onHandleChange}
                    type="number"
                    name="height"
                    value={packageInfo.height}
              label="Height"
            isError={error.height}/>
            <Input onChange={onHandleChange}
                    type="number"
                    name="width"
                    value={packageInfo.width}
              label="Width"
              isError={error.width}

            />
            <Input onChange={onHandleChange}
                    type="number"
                    name="length"
                    value={packageInfo.length}
              label="Length"
            isError={error.length}/>
            
          <button type="submit" className={styles.addBtn}>Add package</button>
          <button type="button" onClick={onChangePackages} className={styles.addBtn}>Make an order</button>
                </form>
                
                </div>
     </>
    );
}

export default OrderForm;