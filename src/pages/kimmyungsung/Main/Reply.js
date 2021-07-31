import React from 'react';
import Comments from './Comments';
import CommentList from './CommentList';

class Reply extends React.Component {
  constructor() {
    super();
    this.state = {
      commentBox: [],
      comment: '',
      // className: 'deActiveButton',
    };
  }

  chagneButton = e => {
    this.setState({
      comment: e.target.value,
    });
    // e.target.value.length > 0
    //   ? this.setState({
    //       className: 'activeButton',
    //     })
    //   : this.setState({
    //       className: 'deActiveButton',
    //     });
  };
  uplaodComments = () => {
    const { commentBox, comment } = this.state;
    // commentBox.push({ commentValue: comment });
    // this.setState({ comment: '', className: 'deActiveButton' });
    const newCommentBox = commentBox.concat({ commentValue: comment });
    this.setState({ comment: '', commentBox: newCommentBox });
  };
  eKeyPress = e => {
    if (e.key === 'Enter') {
      this.uplaodComments();
    }
  };

  render() {
    const { comment } = this.state;
    return (
      <>
        <CommentList />
        {this.state.commentBox.map(comment => {
          return <Comments commentContent={comment.commentValue} />;
        })}
        <div className="writeReply" key={this.state.id}>
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
            className={comment > 0 ? 'activeButton' : 'deActiveButton'}
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
