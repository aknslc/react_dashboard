import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom';
import { menuLinks } from '../../constant';
import { useState } from 'react';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    return (
        <>
            <div className={styles.sideBarContainer}>
                <div className={styles.sideBarHeader}>
                    <h1>Admin</h1>
                </div>
                <div className={styles.sideBarItems}>
                    {menuLinks.map((item, index) => (
                        <Link to={item.link} className={`${styles.sideBarItem} ${selected === index && styles.active}`}
                         onClick={()=>{
                            setSelected(index)
                         }}>
                            <item.icon className={styles.sideBarItemIcon} />
                            <div className={styles.itemTitle}>{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Sidebar