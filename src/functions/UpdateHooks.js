import React, { useState } from 'react';
import { usersData } from '../data/data';
import Foto_0 from '../images/foto_0.png';
import Foto_1 from '../images/foto_1.png';
import Foto_2 from '../images/foto_2.png';
import Foto_3 from '../images/foto_3.png';
import Foto_4 from '../images/foto_4.png';
import Foto_5 from '../images/foto_5.png';
import Foto_6 from '../images/foto_6.png';
import RandomNumber from './RandomNumber';

const UpdateHooks = () => {

    const [userName, updateName] = useState(usersData[0].name);
    const [userText1, updateText1] = useState(usersData[0].text1);
    const [userText2, updateText2] = useState(usersData[0].text2);
    const [userText3, updateText3] = useState(usersData[0].text3);
    const [userLink1, updateLink1] = useState(usersData[0].url1);
    const [userLink2, updateLink2] = useState(usersData[0].url2);
    const [userLink3, updateLink3] = useState(usersData[0].url3);
    const [userPhoto, updateFoto] = useState(Foto_0);

    const randomUser = () => {

        <RandomNumber />

        var sameRandomNumber = RandomNumber();

        updateName(
            usersData[sameRandomNumber].name
        );

        updateText1(
            usersData[sameRandomNumber].text1
        );

        updateText2(
            usersData[sameRandomNumber].text2
        );

        updateText3(
            usersData[sameRandomNumber].text3
        );

        updateLink1(
            usersData[sameRandomNumber].url1
        );

        updateLink2(
            usersData[sameRandomNumber].url2
        );

        updateLink3(
            usersData[sameRandomNumber].url3
        );
        updateFoto(
            () => {
                switch (sameRandomNumber) {
                    case 1:
                        return Foto_1
                    case 2:
                        return Foto_2
                    case 3:
                        return Foto_3
                    case 4:
                        return Foto_4
                    case 5:
                        return Foto_5
                    case 6:
                        return Foto_6
                    default:
                        return Foto_0
                }
            }
        )
    };

    return {
        userName,
        userPhoto,
        userText1,
        userText2,
        userText3,
        userLink1,
        userLink2,
        userLink3,
        randomUser
    }
};

export default UpdateHooks;