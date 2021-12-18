/**
 * Format user datas activity for charts component
 */

/**
 * Genrate a array of object with the correct format for the Radialchart component
 * @param { number } score The URL of the API
 * @return { array }
 */
const formatUserScore = (score) => {
  const array = [
    { name: "do", value: score, color: "#e60000" },
    {
      name: "todo",
      value: 1 - score,
      color: "transparent",
    },
  ];
  return array;
};

/**
 * Im here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * Genrate a array of object with the correct format for the Radialchart component
 * @param { number } score The URL of the API
 * @return { array }
 */
const formatUserActivity = (data) => {
  const array = [];

  const dataMinMax = {
    maxKg: Math.max(...data.map((e) => e.kilogram)),
    minKg: Math.min(...data.map((e) => e.kilogram)),
    maxKcal: Math.max(...data.map((e) => e.calories)),
    minKcal: Math.min(...data.map((e) => e.calories)),
  };

  array.push(
    data.map((e) => {
      const day = parseInt(e.day.slice(8));
      return {
        day: day,
        kilogram: e.kilogram,
        calories: e.calories,
      };
    })
  );

  array.push(dataMinMax);
  return array;
};

const formatUserAverageSessions = (data) => {
  const day = ["L", "M", "M", "J", "V", "S", "D"];
  const array = data.map((e, i) => {
    return { day: day[e.day - 1], sessionLength: e.sessionLength };
  });
  return array;
};

const formatUserPerformance = (data) => {
  const getData = data.data;
  const getKind = data.kind;
  const formatData = [];

  getData.map((e, i) => {
    return formatData.push({
      subject: getKind[i + 1],
      value: e.value,
    });
  });
  return formatData;
};

const userDataFormat = {
  formatUserScore,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
};

export default userDataFormat;
