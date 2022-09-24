import React from "react";
import * as S from "./styled";
import { GithubContext } from "../../providers/users";
import { FaMapMarkerAlt, FaTwitter, FaLink } from "react-icons/fa";

const InfoUser = () => {
  const { data } = React.useContext(GithubContext);
  return (
    <S.Container>
      {data.message === "Not Found" || data.length === 0 ? (
        <S.NoUser>
          <p>Por favor, digite um usuário valido.</p>
        </S.NoUser>
      ) : (
        <S.InfoUserWrapper>
          <S.AvatarBox>
            <div>
              <img src={data.avatar_url} alt={data.login} />
            </div>
          </S.AvatarBox>
          <S.InfoUserBox>
            <S.TitleUser>
              <h2>
                <a href={data.html_url} target="_black">
                  {data.name}
                </a>
                <a href={data.html_url} target="_black">
                  <i>@{data.login}</i>
                </a>
              </h2>
            </S.TitleUser>
            <S.BoxInfoBio>
              <p>{data.bio}</p>
            </S.BoxInfoBio>
            <S.UserFollowers>
              <div>
                <p>Repos</p>
                <h3>{data.public_repos}</h3>
              </div>
              <div>
                <p>Followers</p>
                <h3>{data.followers}</h3>
              </div>
              <div>
                <p>Following</p>
                <h3>{data.following}</h3>
              </div>
            </S.UserFollowers>
            <S.SubInfo>
              {data.location && (
                <span>
                  <FaMapMarkerAlt /> {data.location}
                </span>
              )}
              {data.twitter_username && (
                <span>
                  <FaTwitter />{" "}
                  <a
                    href={"https://twitter.com/" + data.twitter_username}
                    target="_blanck"
                  >
                    {data.twitter_username}
                  </a>
                </span>
              )}
              {data.blog && (
                <span>
                  <FaLink />
                  <a href={data.blog} target="_blanck">
                    {data.blog}
                  </a>
                </span>
              )}
            </S.SubInfo>
          </S.InfoUserBox>
        </S.InfoUserWrapper>
      )}
    </S.Container>
  );
};

export default InfoUser;
