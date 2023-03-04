type Props = {
  nickName?: string;
};

export const getGitHubUrl = async ({ nickName }: Props) => {
  const result = await fetch(`https://api.github.com/users/${nickName}`).then(
    (res) => res.json().then((data) => data?.html_url)
  );

  return result;
};
