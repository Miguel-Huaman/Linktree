import React, { useState } from 'react';
import { usersData } from '../data/data';
import Foto_0 from '../images/foto_0.png';
import Foto_1 from '../images/foto_1.png';
import Foto_2 from '../images/foto_2.png';
import Foto_3 from '../images/foto_3.png';
import Foto_4 from '../images/foto_4.png';
import Foto_5 from '../images/foto_5.png';
import Foto_6 from '../images/foto_6.png';
import Foto_7 from '../images/foto_7.png';
import Foto_8 from '../images/foto_8.png';
import Foto_9 from '../images/foto_9.png';
import Foto_10 from '../images/foto_10.png';
import Foto_11 from '../images/foto_11.png';
import RandomNumber from './RandomNumber';

const UpdateHooks = () => {

    const [userName, updateName] = useState(usersData[0].name);
    const [userBio, updateBio] = useState(usersData[0].bio);
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

        updateBio(
            usersData[sameRandomNumber].bio
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
                    case 7:
                        return Foto_7
                    case 8:
                        return Foto_8
                    case 9:
                        return Foto_9
                    case 10:
                        return Foto_10
                    case 11:
                        return Foto_11
                    default:
                        return Foto_0
                }
            }
        )
    };

    return {
        userName,
        userBio,
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