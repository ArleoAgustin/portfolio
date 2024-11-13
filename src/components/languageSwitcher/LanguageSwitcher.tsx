import { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import style from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { i18n } = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        handleClose();
    };

    return (
        <div className={style.containerLanguage}>
            <IconButton className={style.iconButton}
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem 
                    onClick={() => handleLanguageChange('es')}
                    selected={i18n.language === 'es'}
                >
                    Español
                </MenuItem>
                <MenuItem 
                    onClick={() => handleLanguageChange('en')}
                    selected={i18n.language === 'en'}
                >
                    English
                </MenuItem>
            </Menu>
        </div>
    );
}

export default LanguageSwitcher;