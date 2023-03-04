import {
  VITE_GIT_HUB_API_USERS_URL,
  VITE_WEATHER_API_KEY,
  VITE_WEATHER_API_BASE_URL,
} from "../config";

export const getGitHubUrl = async ({ nickName }: { nickName: string }) => {
  const result = await fetch(`${VITE_GIT_HUB_API_USERS_URL}${nickName}`).then(
    (res) => res.json().then((data) => data?.html_url)
  );

  return result;
};

export const getWeatherByCity = async ({ city }: { city: string }) => {
  const result = await fetch(
    `${VITE_WEATHER_API_BASE_URL}?q=${city}&units=imperial&appid=${VITE_WEATHER_API_KEY}`
  ).then((res) => res.json());

  return result;
};
