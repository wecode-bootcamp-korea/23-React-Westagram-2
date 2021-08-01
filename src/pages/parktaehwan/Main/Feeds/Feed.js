import React from 'react';
import Comment from './Comment';

class Feed extends React.Component {
  render() {
    const { writerName, goToLogin, imageSrc, writeContent } = this.props;
    return (
      <section className="Feed">
        <header className="writer">
          <div className="profileLeft">
            <div className="profileImgBox">
              <img
                className="profileImg"
                src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                alt="profile"
              />
            </div>
            <a href="">
              <div className="profileNameBox">
                {writerName}
                <button onClick={goToLogin}>로그인으로</button>
              </div>
            </a>
          </div>
          <div className="writerDotBox">
            <img
              className="writerDot"
              src="https://image.flaticon.com/icons/png/512/512/512142.png"
              alt="dot"
            />
          </div>
        </header>
        <article className="content">
          <div className="contentImgBox">
            <img className="contentImg" src={imageSrc} alt="person" />
          </div>
          <div className="likeBtnBar">
            <div className="likeLeft">
              <i className="far fa-heart like"></i>
              <i className="far fa-comment like"></i>
              <i className="far fa-paper-plane like"></i>
            </div>
            <div className="likeRight">
              <i className="far fa-bookmark like"></i>
            </div>
          </div>
          <div className="howManyLike">
            <div className="howManyLikeBox">
              <img
                className="howManyLikeImg"
                src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                alt="profile"
              />
            </div>
            <div className="howManyLikeText">
              <span className="bold">mekemeke</span>님{' '}
              <span className="bold">외 10000명</span>이 좋아합니다
            </div>
          </div>
          <div className="content">
            <div className="contentComment newComment">
              <div className="contentWriter">
                <a href="">{writerName}</a> {writeContent}
              </div>
              <div className="commentPop">댓글 10000개 모두 보기</div>
            </div>
          </div>
          <Comment />
        </article>
      </section>
    );
  }
}

export default Feed;
