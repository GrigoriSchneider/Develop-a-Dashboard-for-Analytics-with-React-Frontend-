import React, { useState, useEffect } from 'react';
import AverageSession from './AverageSession';
import DailyActivity from './DailyActivity';

import Greeting from './Greeting';
import KeyData from './KeyData';
import ScorePiChart from './ScorePiChart';
import Performance from './Performance';

function Fetch(id) {
  const [posts, setPosts] = useState([]);
  const [activity, setActivity] = useState([]);
  const [averageSession, setAverageSession] = useState([]);
  const [performance, setPerformance] = useState([]);

  /**  Capitalize first letter from string */
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // convert array of object to => [{value: 80, kind: 'cardio'}, ...]
  const convert = (data) => {
    let newArrayOfObjects;
    let array = data.data;
    let kind = data.kind;
    newArrayOfObjects = array.map((entry) => {
      let capitalizedWord = capitalizeFirstLetter(kind[entry.kind]);
      return {
        value: entry.value,
        kind: capitalizedWord,
      };
    });
    /** useState => setPerfornance */
    setPerformance(newArrayOfObjects);
  };

  /**  Score Keydata Userdata */
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  /**  Activity */
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id.id}/activity`)
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  /**  Average-Session */
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id.id}/average-sessions`)
      .then((response) => response.json())
      .then((data) => {
        setAverageSession(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  /**  Performance */
  useEffect(() => {
    fetch(`http://localhost:3000/user/${id.id}/performance`)
      .then((response) => response.json())
      .then((data) => {
        convert(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (posts.length === 0 || activity.length === 0) {
    return <div>data is loading</div>;
  } else {
    return (
      <>
        <Greeting firstName={posts.userInfos.firstName} />
        <KeyData
          calorieCount={posts.keyData.calorieCount}
          proteinCount={posts.keyData.proteinCount}
          carbohydrateCount={posts.keyData.carbohydrateCount}
          lipidCount={posts.keyData.lipidCount}
        />
        <ScorePiChart score={posts.score} />
        <DailyActivity sessions={activity.sessions} />
        <AverageSession averageSession={averageSession.sessions} />
        <Performance performance={performance} />
      </>
    );
  }
}

export default Fetch;
