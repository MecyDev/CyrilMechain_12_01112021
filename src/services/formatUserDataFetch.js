/**
 * Format user datas activity for charts component
 */

/**
 * Generate a array with the correct data format for the Radialchart component
 * @param { number } score
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
 *
 * Generate a array with the correct data format for the Barchart component
 * @param { object } data
 * @return { array }
 */
const formatUserActivity = (data) => {
  /** @type { array } */
  const array = [];

  /** @type { object } */
  const dataMinMax = {
    maxKg: Math.max(...data.map((e) => e.kilogram)),
    minKg: Math.min(...data.map((e) => e.kilogram)),
    maxKcal: Math.max(...data.map((e) => e.calories)),
    minKcal: Math.min(...data.map((e) => e.calories)),
  };

  array.push(
    data.map((e) => {
      /** @type { object } */
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

/**
 * Generate a array with the correct data format for the Linechart component
 * @param { object } data
 * @return { array }
 */
const formatUserAverageSessions = (data) => {
  /** @type { array } */
  const day = ["L", "M", "M", "J", "V", "S", "D"];
  /** @type { array } */
  const array = data.map((e, i) => {
    return { day: day[e.day - 1], sessionLength: e.sessionLength };
  });
  return array;
};

/**
 * Generate a array with the correct data format for the Linechart component
 * @param { object } data
 * @return { array }
 */
const formatUserPerformance = (data) => {
  /** @type { array } */
  const getData = data.data;
  /** @type { object } */
  const getKind = data.kind;
  /** @type { array } */
  const formatData = [];

  getData.map((e, i) => {
    return formatData.push({
      subject: getKind[i + 1],
      value: e.value,
    });
  });
  return formatData;
};

/** @type { object } */
const userDataFormat = {
  formatUserScore,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance,
};

export default userDataFormat;
