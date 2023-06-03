//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.12;

// import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import "./berry.sol";
// import "./Ecoin.sol";
import "./User.sol";
// import "./Fertilizer.sol";
//    interface IERC20 {
//             function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
//             function balanceOf(address account) external view returns (uint256);
//             function allowance(address owner, address spender) external view returns (uint256);
//         }

//         // ERC1155 Token 인터페이스
//         interface IERC1155 {
//             function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
//             function balanceOf(address account, uint256 id) external view returns (uint256);
//         }

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
            유저는 마켓에서 eco랑 열매를 스왑
            eco로 씨앗을 구매 가능
            열매로 나무키우기 용품 구매 가능
            장바구니에 담기
            장바구니 리스트 조회

            유저 아이템 판매 및 아이템 등록(유저) 추가 아이디어 논의필요(개발 2안)
            */

            // ERC20 Token 인터페이스
     
     
        // EcoToken ecoToken;
        // address EcoTokenContAddr;
        // Berry berryToken;
        // address BerryTokenContAddr;
        User users;
        address UserContAddr;


        // module.exports = {
        //     BERRY_METAURI:
        //         "https://ipfs.io/ipfs/QmcpQWLKDSQ6PzG6uiAuFcctdA53b8XEKDUGKXganrt9bB/{id}.json",
        //     TREE_METAURI:
        //         "https://ipfs.io/ipfs/QmdxY1P6UW3ZUbFqdMDp7U9AGb3wyd7vuKmZL1wtNru4Bg/{id}.json",
        //     FERTILIZER_METAURI:
        //         "https://ipfs.io/ipfs/QmPRNrxVpzdTD56j6Xh2pUZLE6NiGhL4owTCTsq4BuYiwE/{id}.json",
        //     BERRY_CONTRACT_ADDRESS: "0x204650C78cb3404Af7458834b0F600Ea22d1D5C8",
        //     TREE_CONTRACT_ADDRESS: "0xcA9E3aee81C3eb6a58Eaf1F455Cd8F5F1B5DD737",
        //     FERTILIZER_CONTRACT_ADRESS: "0x1Ed6aAA6B9600c55a885513427ba81A2455b7f27",
        //     ECOIN_CONTRACT_ADDRESS: "0x7f7809998d28fd00fB9364a071d3660501EAAb5A",
        //     USER_CONTRACT_ADDRESS: "0x745baD88E28d0075ACd9dE8d599a1F358760835B",
        // };
        // constructor(address _ecotokenAddr, address _berrytokenAddr, address _userAddr) {
        //     ecoToken = EcoToken(_ecotokenAddr);
        //     EcoTokenContAddr = _ecotokenAddr;
        //     berrytoken = BerryToken(_berrytokenAddr);
        //     BerryTokenContAddr = _berrytokenAddr;
        //     users = User(_userAddr);
        //     UserContAddr = _userAddr;
        // }
        constructor(address _userAddr) {
            users = User(_userAddr);
            UserContAddr = _userAddr;
        }
        
        struct Item {
            uint id;
            string name;
            string description;
            uint price;
            string imgUrl;
            Category category;
            BerryName berryType;
        }

        enum Category { seed, fertilizer, lifestyle }
        enum BerryName {GREENAPPLE, REDAPPLE, PEACH, ORANGE, ERROR}
        Item[] Items;
        mapping(string => Item) items;

        uint Itemlength;
        function setItem(string memory _name, string memory _description, uint _price, string memory _imgUri, uint _category, uint _berryType) public {
            Item memory Itemtemp = Item(Itemlength++, _name, _description, _price, _imgUri, Category(_category), BerryName(_berryType));
            Items.push(Itemtemp);
            items[_name] = Itemtemp;
        }

        // 전체 아이템 리스트 반환
        function getItemList() public view returns(Item[] memory) {
            return Items;
        }

        // 아이템 구매
        function buyItem(string memory _name) public {
            //아이템 가격만큼 베리 소모
            //아이템 사용자에게 전송
            // 열매로 씨앗을 구매 가능        
            // 열매로 나무키우기 용품 구매 가능
            // berrytoken.burnBerry(msg.sender, EnumToString(uint(Items[_id-1].berryType)), items[_name].price);

        }

        //enum to 열매
        function EnumToString(uint _enum) public pure returns(string memory) {
            if(_enum==0){
                return "GREENAPPLE";
            } else if(_enum==1){
                return "REDAPPLE";
            } else if(_enum==2){
                return "PEACH";
            } else if(_enum==3){
                return "ORANGE";
            } else {
                return "ERROR";
            }
       }
       

            // 아이템명 검색
            
           
        function searchItem(string memory _name) public view returns(Item memory) {
            return items[_name];
        }
        
        // 키워드 검색기능
        // function searchKeyword(string memory _keyword) public view returns(Item[] memory) {
        //     bytes memory key = bytes(abi.encodePacked(_keyword));
        //     bytes1 keyword = key[0];  
        //     Item[] memory itemlist;
        //     for(uint i=0; i<Items.length; i++) {
        //          bytes memory itemName = bytes(abi.encodePacked(Items[i].name));
        //         for(uint j=0; j<itemName.length; j++) {
        //             if(keyword == itemName[j] ) {
        //                 itemlist.push(Item(Items[j-1]));
        //             }
        //         }

        //     }

        // }


        // // 키워드 검색기능
        // function searchKeyword(string memory _keyword) public view returns(Item[] memory) {
        //     bytes memory key = bytes(abi.encodePacked(_keyword));
        //     bytes1 keyword = key[0];  
        //     uint count = 0;
        //     for(uint i=0; i<Items.length; i++) {
        //         bytes memory itemName = bytes(abi.encodePacked(Items[i].name));
        //         for(uint j=0; j<itemName.length; j++) {
        //             if(keyword == itemName[j] ) {
        //                 count += 1;
        //             }
        //         }
        //     }
        //     Item[] memory itemlist = new Item[](count);
        //     // uint k = 0;
        //     for(uint i=0; i<Items.length; i++) {
        //         bytes memory itemName = bytes(abi.encodePacked(Items[i].name));
        //         for(uint j=0; j<itemName.length; j++) {
        //             if(keyword == itemName[j] ) {
        //                 itemlist[i] = Items[i];
        //                 break;
        //             }
        //         }
        //     }
        //     return itemlist;
        // }


        // 키워드 검색기능
        function searchKeyword(string memory _keyword) public view returns(uint, Item[] memory) {
            bytes memory key = bytes(abi.encodePacked(_keyword));
            bytes memory lowKeyword = bytes(_keyword);
            bytes1 keyword = key[0];  
            uint count = 0;
            for(uint i=0; i<Items.length; i++) {
                bytes memory itemName = bytes(abi.encodePacked(Items[i].name));
                for(uint j=0; j<itemName.length; j++) {
                    if(keyword == itemName[j] ) {
                        count += 1;
                    }
                }
            }
            Item[] memory itemlist = new Item[](count);
            uint k = 0;
            for(uint i=0; i<Items.length; i++) {
                bytes memory itemName = bytes(abi.encodePacked(Items[i].name));
                for(uint j=0; j<itemName.length; j++) {
                    uint lowIndex = j;
                    bool matchKey = true;
                    for(uint m=0; m<lowKeyword.length; m++) {
                        if(itemName[lowIndex] != lowKeyword[m]) {
                            matchKey = false;
                            break;
                        }
                        lowIndex += 1;
                        if(lowIndex == itemName.length) {
                            break;
                        }
                    }
                    if(matchKey) {
                        itemlist[k] = Items[i];
                        k += 1;
                        break;
                    }
                }
            }
            return (count, itemlist);
        }
        
        
        // 유저는 마켓에서 eco랑 열매를 스왑 event emit

        event TokenSwapped(address indexed _ecotokenAddress, uint256 _ecoAmount, address indexed _berrytokenAddress, uint256 indexed _berryId, uint256 _berryAmount);
        

        // 토큰 스왑함수
        // function swapToken(address _ecotokenAddress, uint256 _ecoAmount, address _berrytokenAddress, uint256 _berryId, uint256 _berryAmount) external {
        function swapToken(uint256 _ecoAmount, uint256 _berryId, uint256 _berryAmount) external {
            // ERC20 토큰 instance 생성
            // IERC20 ecotoken = IERC20(_ecotokenAddress);
            // User.Ecoin ecotoken = Ecoin(_ecotokenAddress);
            users.ecoinContract();
            // ERC20 토큰 allowance가 충분한지 확인
            users.ecoinContract().approve(address(users.ecoinContract()),_ecoAmount);
            users.berryContract().setApprovalForAll(address(users.berryContract()), true);
            // require(ecotoken.allowance(msg.sender, address(this)) >= _ecoAmount, "The allowance is not enough.");
            // require(users.ecoinContract().allowance(msg.sender, address(this)) >= _ecoAmount, "The allowance is not enough.");
            // ERC20 토큰 balance가 충분한지 확인
            // require(users.ecoinContract().balanceOf(msg.sender) >= _ecoAmount, "Insufficient balance.");
            // require(ecotoken.balanceOf(msg.sender) >= _ecoAmount, "Insufficient balance.");
            
            // ERC1155 토큰 instance 생성
            // IERC1155 berrytoken = IERC1155(_berrytokenAddress);
            
            // ERC1155 토큰 balance가 충분한지 확인
            // require(users.berryContract().balanceOf(msg.sender, _berryId) >= _berryAmount, "Insufficient balance.");
            
            // ERC20 토큰 전송
            // bool success1 = ecotoken.transferFrom(msg.sender, address(this), _ecoAmount);
            bool success1 = users.ecoinContract().transferFrom(address(users.ecoinContract()), msg.sender, _ecoAmount);
            require(success1, "ERC20 token transfer failure.");
            
            // ERC1155 토큰 전송
            // users.berryContract().safeTransferFrom(msg.sender, address(this), _berryId, _berryAmount, "");
            users.berryContract().safeTransferFrom(address(users.berryContract()), msg.sender, _berryId, _berryAmount, "");
            
            // 토큰 스왑 로그 기록
            // emit TokenSwapped(_ecotokenAddress, _ecoAmount, _berrytokenAddress, _berryId, _berryAmount);
        }

        // UTIL FUNCTIONS
        function strToEnum(string memory _berryName) public pure returns(BerryName) {
            if(equal(_berryName, "GREENAPPLE")){
                return BerryName.GREENAPPLE;
            } else if(equal(_berryName,"REDAPPLE")){
                return BerryName.REDAPPLE;
            } else if(equal(_berryName,"PEACH")){
                return BerryName.PEACH;
            } else if(equal(_berryName,"ORANGE")){
                return BerryName.ORANGE;
            } else {
                return BerryName.ERROR;
            }
        }
        function equal(string memory a, string memory b) internal pure returns (bool) {
           //가스 최적화
            if (bytes(a).length != bytes(b).length) {
                return false;
            }
        return keccak256(bytes(a)) == keccak256(bytes(b));
      }
           
}

