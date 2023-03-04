import { VITE_GIT_HUB_API_USERS_URL } from "../config";

type Props = {
  nickName?: string;
};

export const getGitHubUrl = async ({ nickName }: Props) => {
  const result = await fetch(`${VITE_GIT_HUB_API_USERS_URL}${nickName}`).then(
    (res) => res.json().then((data) => data?.html_url)
  );

  return result;
};
