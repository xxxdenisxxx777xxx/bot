// src/UserInfo.js
import React, { useEffect, useState } from "react";

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = () => {
            // Проверяем, доступен ли Telegram Web Apps
            if (window.Telegram) {
                // Получаем информацию о пользователе
                const user = window.Telegram.WebApp.initDataUnsafe.user;

                if (user) {
                    setUserInfo(user);
                } else {
                    setError("No user data available.");
                }
            } else {
                setError("Telegram Web App is not available.");
            }
        };

        getUserData();
    }, []);

    return (
        <div>
            <h2>User Information</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </div>
    );
};

export default UserInfo;
