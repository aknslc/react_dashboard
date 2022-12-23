import React from 'react'
import styles from './dashcard.module.scss'
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
const DashCard = () => {
    return (

        <div className={styles.cardsArea}>
            <div className="row m-0">
                <div className={`${styles.cardItem} col-lg-3 col-md-6 col-sm-12`}>
                    <div className={styles.cardBody}>
                        <div className={styles.info}>
                            <h3>1,533</h3>
                            <p>Daily Signups</p>
                        </div>

                 
                            <PersonAddAltSharpIcon className={styles.icon}/>
                     
                    </div>
                </div>
                <div className={`${styles.cardItem} col-lg-3 col-md-6 col-sm-12`}>
                    <div className={styles.cardBody}>
                        <div className={styles.info}>
                            <h3>31,533</h3>
                            <p>Daily Visitors</p>
                        </div>
                            <VisibilityOutlinedIcon className={styles.icon}/>
                    </div>
                </div>
                <div className={`${styles.cardItem} col-lg-3 col-md-6 col-sm-12`}>
                    <div className={styles.cardBody}>
                        <div className={styles.info}>
                            <h3>14,533</h3>
                            <p>Daily Order</p>
                        </div>

                 
                            <AddShoppingCartOutlinedIcon className={styles.icon}/>
                     
                    </div>
                </div>
                <div className={`${styles.cardItem} col-lg-3 col-md-6 col-sm-12`}>
                    <div className={styles.cardBody}>
                        <div className={styles.info}>
                            <h3>$61,533</h3>
                            <p>Daily Revenue</p>
                        </div>

                 
                            <AttachMoneyOutlinedIcon className={styles.icon}/>
                     
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashCard