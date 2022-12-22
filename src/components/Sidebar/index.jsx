import styles from './sidebar.module.scss'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
const Sidebar = ({ openSideBar }) => {
    return (
        <>

            {openSideBar ? (
                <div className={styles.sideBarContainer}>
                    <div className={styles.sideBarHeader}>
                        <h1>ADMIN</h1>
                    </div>
                    <div className={styles.sideBarItems}>
                        <div className={styles.sideBarItem}>
                            <DashboardIcon className={styles.sideBarItemIcon} />
                            <Link to='/'>Dashboard</Link>
                        </div>
                        <div className={styles.sideBarItem}>
                            <CategoryOutlinedIcon className={styles.sideBarItemIcon} />
                            <Link to='/products'>Products</Link>
                        </div>
                        <div className={styles.sideBarItem}>
                            <ShoppingBagOutlinedIcon className={styles.sideBarItemIcon} />
                            <Link to='/orders'>Orders</Link>
                        </div>
                        <div className={styles.sideBarItem}>
                            <PeopleAltOutlinedIcon className={styles.sideBarItemIcon} />
                            <Link to='/users'>Users</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.sideBarMobile}>

                    <div className={styles.mobileItems}>
                        <Link to="/">
                            <DashboardIcon className={styles.sideBarItemIcon} />
                        </Link>
                        <Link to="/products">
                            <CategoryOutlinedIcon className={styles.sideBarItemIcon} />
                        </Link>
                        <Link to="/orders">
                            <ShoppingBagOutlinedIcon className={styles.sideBarItemIcon} />
                        </Link>
                        <Link to="/users">
                            <PeopleAltOutlinedIcon className={styles.sideBarItemIcon} />
                        </Link>
                    </div>

                    <div>
                    </div>

                </div>
            )}

        </>

    )
}

export default Sidebar