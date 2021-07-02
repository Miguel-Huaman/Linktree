import React, { Fragment } from 'react';
import './App.css';
import UpdateHooks from './functions/UpdateHooks';
import PhotoUser from './components/PhotoUser';
import TitleUser from './components/TitleUser';
import SubtitleUser from './components/SubtitleUser';
import ButtonLink from './components/ButtonLink';
import ButtonRandom from './components/ButtonRandom';

function App() {

  const {
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
  } = UpdateHooks();

  return (
    <Fragment>
      <ButtonRandom function={randomUser} />
      <PhotoUser src={userPhoto} alt={userName} />
      <TitleUser username={userName} />
      <SubtitleUser userBio={userBio} />
      <ButtonLink text={userText1} link={userLink1} />
      <ButtonLink text={userText2} link={userLink2} />
      <ButtonLink text={userText3} link={userLink3} />
    </Fragment>
  )
};

export default App;