import { useState, useEffect } from "react";
import styles from './HappyCustomers.module.css';
import { useTranslation } from 'react-i18next';

const HappyCustomers = () => {
    const { t } = useTranslation();
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0); 

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const response = await fetch('https://aqua-track-project-back.onrender.com/auth/total-users');
                const data = await response.json();

                if (data.status === 200) {
                    setTotalUsers(data.totalUsers)
                }
                setUsers([
                    { avatar: '../../assets/images/avatar_1.jpg' },
                    { avatar: '../../assets/images/avatar_2.jpg' },
                    { avatar: '../../assets/images/avatar_3.jpg' },
                ]);
            } catch (error) {
                console.error('ERROR:', error);
                setUsers([]); 
                setTotalUsers(0); 
            }
        };

        fetchUsersData();
    }, []);

    return (
        <div className={styles.happyCustomers}>
            <div className={styles.avatars}>
                {users.map((user, index) => (
                    <div
                        key={index}
                        className={styles.avatar}
                    ></div>
                ))}
            </div>
            <div className={styles.text}>
                <p className={styles.textParagraph}>
                    {t('homepage.advantages.our')}
                    <span className={styles.happy}>{t('homepage.advantages.accent')}</span>
                    {t('homepage.advantages.customers')}
                </p>
                <p className={styles.total}>+{totalUsers}</p>
            </div>
        </div>
    );
};

export default HappyCustomers;
