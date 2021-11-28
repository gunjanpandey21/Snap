//Base URL
const base_url = "https://api.rawg.io/api/";
//https://api.rawg.io/api/games?key=033f23c91f8346e8b2ab10a33c8e6e5c&dates=2019-09-01,2019-09-30&platforms=18,1,7
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=033f23c91f8346e8b2ab10a33c8e6e5c`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=033f23c91f8346e8b2ab10a33c8e6e5c`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=033f23c91f8346e8b2ab10a33c8e6e5c`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=033f23c91f8346e8b2ab10a33c8e6e5c`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=033f23c91f8346e8b2ab10a33c8e6e5c`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=033f23c91f8346e8b2ab10a33c8e6e5c`;
