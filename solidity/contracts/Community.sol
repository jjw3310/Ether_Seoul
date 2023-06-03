// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./User.sol";
import "./Tree.sol";
import "./Ecoin.sol";

contract Community {
    // 각 리워드 좋아요 기준 개수 
    uint constant ten = 10;
    uint constant fifty = 50;
    uint constant Hundred = 100;
    uint constant Fivehundred = 500;
    uint constant Thousand  = 1000;

    User userContract;
    Tree treeContract;
    Ecoin ecoinContract;

    constructor(address _addr, address _tree, address _ecoin) {
        userContract = User(_addr);
        treeContract = Tree(_tree);
        ecoinContract = Ecoin(_ecoin);
    }

    // 게시글 구조체
    struct Post {
        uint id;            // Post ID (전체 게시글의 index)
        uint myId;          // My PostID (내 게시글(myPosts매핑) 관리를 위한 index)
        address writer;     // 작성자 유저
        PostKinds kind;     // 게시글 종류 
        string content;     // 게시글 내용
        string[] imgUrl;    // 이미지         -> todo : json형식에 키 벨류값을 추가하는 형식으로 바꿀까...
        string[] hashtag;   // 해시 태그 
        uint writeDate;     // 작성일자 
        uint updateDate;    // 수정일자 
        bool deleteCheck;   // 삭제 여부 
    }

    // 게시글 종류 
    enum PostKinds { myTreeNft, ecoInfo, ecoLifeStyle }

    // 댓글 구조체
    struct Comment {
        uint postId;     // 게시글 ID
        uint commentId;  // 댓글 ID
        address writer;     // 댓글 작성자 
        string contents;    // 댓글 내용
        uint writeDate;     // 댓글 작성일자 
        bool deleteCheck;   // 댓글 삭제 여부 
    } 

    // 제목으로 게시물 찾을때 편하게 index 찾을수 있게 맵핑 -> 필요 없을듯 
    //mapping(string => uint) communityIndex;

    // 모든 게시물 목록
    Post[] allPost;

    // 좋아요 관리 (게시물id -> 좋아요 누른 유저 -> 좋아요 체크 여부)
    mapping(uint => mapping(address => bool)) likeCheck; 

    // 리워드 받은적 있는지 (유저 -> 포스트ID -> 좋아요 개수 -> bool)
    mapping(address => mapping(uint => mapping(uint => bool))) isReward; 
    // 좋아요 갯수 관리
    //mapping(uint => uint) postLikeCnt;
    uint[] postLikeCnt;

    // 댓글 개수 관리 
    uint[] postCommentCnt;

    // 게시물 댓글 관리
    mapping(uint => Comment[]) commentlist; 
    //Comment[][] commentlist;

    // 특정 유저 게시물 목록(마이 페이지용)
    mapping(address => Post[]) myPosts;


    ///////////////////// 밑에는 함수 


    //모든 게시물 Read
    function getAllPosts() public view returns(Post[] memory, User.user[] memory, uint[] memory, uint[] memory) {
        //return allPost; 
        // TODO : 함수 실행시킨 유저 각 포스트 좋아요 눌렀는지 Bool 배열도 리턴..?
        Post[] memory tmp = allPost;
        uint len = allPost.length;
        address tmpUser;
        User.user[] memory tmpUsers = new User.user[](len);
        for(uint i=0;i<len;i++) {
            tmpUser = allPost[i].writer;
            tmpUsers[i] = userContract.getUser(tmpUser); //allPost의 index에 맞춰 User배열 생성 
            // TODO : 함수 실행시킨 유저 각 포스트 좋아요 눌렀는지 Bool 배열도 리턴..?
        }
            
        return (tmp, tmpUsers, postLikeCnt, postCommentCnt); // 포스트, 유저, 포스트 좋아요 수, 포스트 댓글 수 모두 같은 index로 배열로 return 
    }

    // 게시물 Create
    function createPost(uint _kind, string memory _content, string[] memory _imgUrls, string[] memory _hashTags, uint _writeDate) public returns (uint256) {
        //리엑트에서 빈값 체크 해줘도 될듯듯
        // require(!isEmptyString(_content), "title is empty.");

        uint _id = allPost.length; 
        uint _myId = myPosts[msg.sender].length;
        Post memory tmpPost = Post(_id, _myId, msg.sender, PostKinds(_kind), _content, _imgUrls, _hashTags, _writeDate, _writeDate, false);
 
        // 1. 모든 게시물 배열에 넣기
        allPost.push(tmpPost);

        // 2. 게시물 title 맵핑에 넣기
        //communityIndex[_title] = _id;

        // 3. 특정 유저 게시물 목록에 넣기
        myPosts[msg.sender].push(tmpPost);

        // 좋아요, 댓글 개수 관리 
        postLikeCnt.push(0);
        postCommentCnt.push(0);

        return allPost.length-1;
    }

    // 게시물 Update
    function updatePost(uint _id, string memory _content, string[] memory _imgUrls, string[] memory _hashTags, uint _updateDate) public returns (uint) {
        require(msg.sender == allPost[_id].writer, "you are not writer.");
        allPost[_id].content = _content; 
        allPost[_id].imgUrl = _imgUrls;
        allPost[_id].hashtag = _hashTags;
        allPost[_id].updateDate = _updateDate;

        return _id;
    }

    // 게시물 Delete
    function deletePost(uint _id, uint _myId) public {
        require(msg.sender == allPost[_id].writer, "you are not writer.");
        // TODO : 어차피 deleteCheck 있으니까 delete써서 가스비 많이내지말고 deleteCheck만 바꿔도 될까까

        // 1. 모든 게시물 배열에 넣기
        //delete allPost[_id];
        allPost[_id].deleteCheck = true;

        // 2. 게시물 title 맵핑에 넣기
        //delete communityIndex[_title];

        // 3. 특정 유저 게시물 목록에 넣기
        //delete myPosts[msg.sender][_myId];
        myPosts[msg.sender][_myId].deleteCheck = true;
    }

    // 특정 유저 게시물 Read
    function getUsersPosts() public view returns(Post[] memory) {
        return myPosts[msg.sender];
    }

    // 좋아요 누르기
    function pushLike(uint _id) public returns(uint256) {
        require(_id < allPost.length, "Invalid post ID"); //id값 이상 없는지 체크 
        
        bool isCheck = likeCheck[_id][msg.sender]; //좋아요 눌렀는지 체크 
        likeCheck[_id][msg.sender] = !isCheck;

        uint256 likeCount = postLikeCnt[_id]; //좋아요 수 체크 
        uint256 mintAmount = 0; // 발행할 토큰 수

        if(!isCheck) likeCount++;
        else likeCount--;

        postLikeCnt[_id] = likeCount; //좋아요 수 업데이트 
        Post memory tmpPost = allPost[_id];
        address rewardMan = tmpPost.writer; //작성자 주소 

        if (likeCount == ten) {
            mintAmount = 4; // 리워드 에코인 수 
            if(!isReward[rewardMan][_id][ten]) { //10개 보상 받은적 없는지 체크 
                ecoinContract.mint(rewardMan, mintAmount);
                isReward[rewardMan][_id][ten] = true;
            }
        } else if (likeCount == fifty) {
            mintAmount = 6; // 리워드 에코인 수 
            if(!isReward[rewardMan][_id][fifty]) {  //50개 보상 받은적 없는지 체크 
                ecoinContract.mint(rewardMan, mintAmount); // 해당 리워드 개수 작성자에게 민팅 
                isReward[rewardMan][_id][fifty] = true; // 보상 전적 업데이트 
            }
        } else if (likeCount == Hundred) {
            mintAmount = 10; // 리워드 에코인 수 
            if(!isReward[rewardMan][_id][Hundred]) { //100개 보상 받은적 없는지 체크 
                ecoinContract.mint(rewardMan, mintAmount); // 해당 리워드 개수 작성자에게 민팅 
                isReward[rewardMan][_id][Hundred] = true; // 보상 전적 업데이트 
            }
        } else if (likeCount == Fivehundred) { 
            mintAmount = 20; // 리워드 에코인 수 
            if(!isReward[rewardMan][_id][Fivehundred]) { //500개 보상 받은적 없는지 체크 
                ecoinContract.mint(rewardMan, mintAmount); // 해당 리워드 개수 작성자에게 민팅 
                isReward[rewardMan][_id][Fivehundred] = true; // 보상 전적 업데이트 
            }
        } else if (likeCount == Thousand) { 
            mintAmount = 100; // 리워드 에코인 수 
            if(!isReward[rewardMan][_id][Thousand]) { //1000개 보상 받은적 없는지 체크 
                ecoinContract.mint(rewardMan, mintAmount); // 해당 리워드 개수 작성자에게 민팅 
                isReward[rewardMan][_id][Thousand] = true; // 보상 전적 업데이트 
            }
        }        

        return postLikeCnt[_id];
    }

    // 좋아요 체크 여부
    function isPushLike(uint _id) public view returns(bool) {
        return likeCheck[_id][msg.sender];
    }

    // 댓글 달기
    function writeComment(uint _id, string memory _commentContent, uint _writeDate) public returns(uint, uint) {
        uint _commnetId = commentlist[_id].length; //해당 포스트의 댓글 ID 구하기 
        Comment memory tmpComment = Comment(_id, _commnetId, msg.sender, _commentContent, _writeDate, false); //Comment 생성 
        postCommentCnt[_id]++; //해당 게시글 댓글수 Up
        commentlist[_id].push(tmpComment); //실제 갯글 관리 매핍/배열에 등록

        return (_id, _commnetId); // return 게시물ID, 댓글ID
    }

    // 댓글 불러오기
    function getPostCommnet(uint _id) public view returns (Comment[] memory) {
        return commentlist[_id];
    }

    // 댓글 삭제 
    function deltetePostComment(uint _id, uint commentId) public {
        postCommentCnt[_id]--;
        // delete commentlist[_id][commentId];
        commentlist[_id][commentId].deleteCheck = true;
    }
}