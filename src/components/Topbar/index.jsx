import React from 'react'
import styles from './topbar.module.scss'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Avatar from '@mui/material/Avatar';
import avatar from '../../assets/avatar.png'
import { useAuth } from '../../context/AuthContext'
const Topbar = ({ activeSide, setActiveSide }) => {
  const { setUser } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user');

  }

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.left}>
        <MenuOutlinedIcon className={styles.hamburgerIcon} onClick={()=>{setActiveSide(!activeSide)}} />
      </div>

      <div className={styles.searchBar}>

        <input type="text" placeholder='Search' />

      </div>
      <div className={styles.account}>
        <Avatar
          alt="Akin Sel Coskun"
          src={avatar}
          sx={{ width: 34, height: 34 }}
          onClick={handleClick}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Topbar