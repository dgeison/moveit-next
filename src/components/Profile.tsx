import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dgeison.png" alt="Dgeison Peixoto" />
      <div>
        <strong>Dgeison Peixoto</strong>
        <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}</p>
      </div>
    </div>
  );
}
