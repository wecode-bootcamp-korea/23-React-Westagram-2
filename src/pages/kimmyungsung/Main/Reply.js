import React from 'react';
import Comments from './Comments';
import CommentList from './CommentList';

class Reply extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
      className: 'deActiveButton',
    };
  }

  chagneButton = e => {
    this.setState({
      comment: e.target.value,
    });
    e.target.value.length > 0
      ? this.setState({
          className: 'activeButton',
        })
      : this.setState({
          className: 'deActiveButton',
        });
  };
  uplaodComments = () => {
    const { commentBox, comment } = this.state;
    commentBox.push({ commentValue: comment });
    this.setState({ comment: '', className: 'deActiveButton' });
  };
  eKeyPress = e => {
    if (e.key === 'Enter') {
      this.uplaodComments();
    }
  };

  render() {
    return (
      <>
        <CommentList />
        {this.state.commentBox.map(comment => {
          return <Comments commentContent={comment.commentValue} />;
        })}
        <div className="writeReply">
          <input
            type="text"
            className="replyText"
            placeholder="댓글 달기..."
            value={this.state.comment}
            onChange={this.chagneButton}
            onKeyPress={this.eKeyPress}
          />
          <button
            type="submit"
            className={this.state.className}
            onClick={this.uplaodComments}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Reply;
