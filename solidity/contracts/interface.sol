//SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

contract Market {
    /*
    buy seed item
    grow tree item
    sell items
    유저는 아이템을 erc20으로 민팅한 토큰으로 구매할 수 있음
    아이템은 카테고리가 있고 씨앗, 나무, 나무 키우기 용품이 있음
    아이템은 owner가 추가 삭제할 수 있음
    아이템 추가 시 이미지를 ipfs에 업로드
    아이템 목록 불러오기



        유저
         상속
         내 닉네임
        

    */

    // User users;

    // constructor(address _a) {
    //     users = User(_a);
    // }

    // function getUserWallet() public view returns(address) {
    //     return users.wallet();
    // }

    // function userGetName(address _a) public {
    //     users.getName(_a);
    // }
        /*
        화폐
         상속
          내가 보유한 화폐
          화폐 충전 기능(이더리움 컨트랙트에 지불, 비율에 따른 열매 스왑이면)
            마켓에서 구현
          else 컨펌(true)에 따른 화폐 충전이면
            캠페인에서 구현

    // Token tokens;

    // constructor(address _a) {
    //     tokens = Token(_a);
    // }

    // function getTokenWallet() public view returns(address) {
    //     return tokens.wallet();
    // }

    // function userGetToken(address _a) public {
    //     tokens.getName(_a);
    // }
        
        아이템
            아이템 등록 및 삭제(운영자)
            아이템은 카테고리가 있음 구조체 또는 enum 생각 씨앗, 나무, 나무 키우기 용품
            아이템 등록 시 이미지를 ipfs에 업로드
            아이템 구매
            전체 아이템 리스트 반환
            아이템명 또는 키워드 검색기능
            장바구니에 담기
            장바구니 리스트 조회
            유저 아이템 판매 및 아이템 등록(유저) 추가 아이디어 논의필요(개발 2안)
            */

        struct Item {
            ecotem status;
            string name;
            uint price;
            string uri;
        }

        enum ecotem { seed, lifestyle, fertilizer }

        mapping(string => Item) items;

        function setItem(string memory _name, uint price, string memory imguri) public {

        }
}


// interface tmi{

    // My Page

    // struct user {
    //     address addr;
    //     string name;
    //     string imgUrl;
    //     uint ecoBalance;
    //     uint berryBalance;
    // }

    // //1번에 펀딩 후 2번에 펀딩
    // mapping(address => mapping(uint => uint)) fundingBalance;

    // user[] users;

    
    // function setUser(string memory _ImgUrl, string memory _name) public {
    // }

    // token ERC721

    // token ERC1155

    // function havest(uint _tokenId) public returns(uint, uint){
    //     return (type, count);
    // }
    // //나무에 필요한 영양?



    // //json -> ipfs
    // struct tree {
    //     uint id;
    //     string name;
    //     string imgUrl;
    //     string info;
    //     uint level;
    //     bool isMaxLevel;
    // }


    // mapping(address => tree) trees;

    // function grow(uint _treeId) public returns(bool, uint){
    // }

    // eth, eco, berry

    // //발행
    // openzepplin erc20(eco, 100000);

    // function setBalance(address _addr) public {
    // }

    // openzepplin erc20(berry, 100000);
 
    // function getEcoBalance(address _addr) public view returns(uint) {
    //     return eco.balanceOf[_addr];
    // }






// 화폐


// 에코인(eco-in)



// 열매



// 나무
// 단순 성장(소유x) (기본 나무)
// 민팅 (활동에 따라 다른 나무 지급?! 커스터마이징?)
// 수확 -> 열매(?) or 에코인

// 프론트
// 마이 페이지
// 내 나무를 심은 숲(화단)
// 화단 내 나무 위치 등 커스터마이징
// 내가 수행한 미션
// 진행 중인 미션
// 내가 보유한 나무
// 내가 보유한 화폐
// 상점 구매 내역
// 구매 아이템 사용


//     //shop
//     berry eco swap;

    


//     campaign

//     펀딩 등록
//     펀딩 수정
//     펀딩 삭제
//     펀딩 정보
//     펀딩 구조체는
 
    // struct Campaign {
    //     uint id;
    //     string title;
    //     string imgUrl;
    //     string info;
    //     address addr;
    //     address[] donators;
    //     uint[] donations;
    //     Category category;
    //     uint totalBalance;
    //     uint startDate;
    //     uint endDate;
    //     uint goalAmount;
    //     Status status;
    // }

    // // Token ecotokens;

    // // constructor(address _a) {
    // //     ecotokens = Token(_a);
    // // }

    // Campaign[] Campaigns;
    // mapping(address => mapping(uint => Campaign)) campaignsMap;
    // mapping(address => uint) fundingBalance;

    // enum Category { funding, challenge }
    // enum Status { plan, request, onGoing, done, cancel }

    // uint camlength;
    // function setCampaign(string memory _title, string memory _imgUrl, string memory _info, address _addr, uint _category, uint _startDate, uint _endDate, uint _goalAmount) public {
    //     camlength = Campaigns.length;
    //     Campaign memory camtemp = Campaign(camlength++, _title, _imgUrl, _info, _addr, new address[](0), new uint[](0), Category(_category), 0, _startDate, _endDate, _goalAmount, Status.plan);
    //     campaignsMap[_addr][camlength-1] = camtemp;
    //     Campaigns.push(camtemp);
    //     uint id;
    // }


    // function getCampaignList() public returns(Campaign[] memory) {
    //     return Campaigns;
    // }

    // function setFundingJoin(uint _id, uint  ) public payable returns(bool){
    //     require(msg.value <= msg.sender.balance, "hello");
    //     require(Campaigns[_id].goalAmount !=0, "sss");
    //     // require("start - end");
    //     campaignsMap[msg.sender][_id].donators.push(msg.sender);
    //     campaignsMap[msg.sender][_id].donations.push(msg.value);
    //     campaignsMap[msg.sender][_id].startdate = block.timestamp;
    //     campaignsMap[msg.sender][_id].enddate = block.timestamp + _duration;
    //     Campaigns[_id].donators.push(msg.sender);
    //     Campaigns[_id].donations.push(msg.value);
    //     // Campaigns.push(Campaign(Campaigns.length++,)
    //     return true;
    // }




    // function cancelFunding(string memory _title, address _addr) public {
    //     //돌려주기
    //     for(uint i=0; i<campaignsMap[_title].join.length; i++) {
    //         // payable(address(campaignsMap[_title].join[i]).tranfer(.balanceOf[_addr]
    // }

    // // function setChallenge(address _addr) public {
    // }



    // function getMyCampaign(address _addr) public view returns(Campaign[] memory) {
        
    //     for(uint i=0; i<10; i++) {
    //         Campaign[] memory myCampaign = campaignsMap[_addr][i];
    //     }
    // }

    // //mypage - mycampaign


    // function setChallenge(string memory _title, string memory _imgUrl, string memory _info, address _addr, uint _category, uint _startDate, uint _endDate) public {

    // }

    // function doneChallenge(uint _id, address[] _addr) public returns(bool) {

    //     block.timestamp + 30day;
    //     //성공 실패 여부
    //     //성공시 리워드 지급
    //     for(uint i=0; i<_addr.length; i++) {
    //         payable(address(_addr[
    //     }
    //     //실패 시 false

    
    // }


//     constructor(address _a) {
//         User users = User(_a);
//     }
//     struct community {
//         uint id;
//         address user;
//         string title;
//         string description;
//         string[] imgUrl;
//         // commnt[] comments;
//         string[] hashtag;
//         uint like;
        
//     }

//      struct comment {
//         uint256 index;
//         address writer;
//         string title;
//         string contents;
//         uint256 likes;
//         uint writeDate;
//         bool deleteCheck;
//     } 
    
//     mapping(uint => mapping(address => bool)) likeCheck; //contents_id => address => bool

//     mapping(uint => comment[]) commentlist; 
    
//     mapping(address => community[]) myCommunities;

//     mapping(string => uint) communityIndex;

//     community[] allCommunity;

//     function getCommunity(uint _index) public view returns(community memory) {
//         return community[_index];
//     }


//     //내가 작성한 댓글
//     mapping(uint => mapping(address => comment[]) comments;

//     function setLike(uint256 _yyyymmdd, uint256 _idx) public returns(bool, uint256) {
//         require(commentlist[_yyyymmdd].length > _idx,"_ERR[1001]:Only one comment in a date available");
//         if(likeCheck[_yyyymmdd][_idx][msg.sender]) {
//             --commentlist[_yyyymmdd][_idx].likes;
//         } else {
//             ++commentlist[_yyyymmdd][_idx].likes;
//         }
//         likeCheck[_yyyymmdd][_idx][msg.sender] = !likeCheck[_yyyymmdd][_idx][msg.sender];
//         return (likeCheck[_yyyymmdd][_idx][msg.sender], commentlist[_yyyymmdd][_idx].likes);
//     }

//     function getIsLiked(uint256 _yyyymmdd, uint256 _cmtidx ) public view returns(bool) {
//         return likeCheck[_yyyymmdd][_cmtidx][msg.sender];
//     }

    




// }