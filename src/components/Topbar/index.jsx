import React from 'react'
import styles from './topbar.module.scss'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

const Topbar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.left}>
        <MenuOpenOutlinedIcon className={styles.hamburgerIcon} onClick={() => setOpenSideBar(!openSideBar)} />
      </div>
    </div>
  )
}

export default Topbar