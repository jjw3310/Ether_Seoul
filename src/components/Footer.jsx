import { TbBusinessplan } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { truncate, useGlobalState } from '../store';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BottomHouse from '../assets/images/BottomHouse.png';
import BottomTree from '../assets/images/BottomTree.png';
import BottomConversation from '../assets/images/BottomConversation.png';
import BottomCampaign from '../assets/images/BottomCampaign.png';
import BottomMarket from '../assets/images/BottomMarket.png';

import BottomHouseHover from '../assets/images/BottomHouseHover.png';
import BottomTreeHover from '../assets/images/BottomTreeHover.png';
import BottomConversationHover from '../assets/images/BottomConversationHover.png';
import BottomCampaignHover from '../assets/images/BottomCampaignHover.png';
import BottomMarketHover from '../assets/images/BottomMarketHover.png';

function Footer() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    navigate(`/${iconName}`);
  };

  const getIconImage = (iconName) => {
    if (selectedIcon === iconName) {
      // Return hover state image for the selected icon
      switch (iconName) {
        case 'house':
          return BottomHouseHover;
        case 'tree':
          return BottomTreeHover;
        case 'conversation':
          return BottomConversationHover;
        case 'campaign':
          return BottomCampaignHover;
        case 'market':
          return BottomMarketHover;
        default:
          return null;
      }
    } else {
      // Return normal state image for the icon
      switch (iconName) {
        case 'house':
          return BottomHouse;
        case 'tree':
          return BottomTree;
        case 'conversation':
          return BottomConversation;
        case 'campaign':
          return BottomCampaign;
        case 'market':
          return BottomMarket;
        default:
          return null;
      }
    }
  };

  return (
    <>
      {/* 페이지 컨텐츠를 포함하는 레이아웃 요소 */}
      <div className="page-content">
        {/* 페이지 내용 */}
      </div>

      {/* 푸터 */}
      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-5" style={{ backgroundColor: "#84A27E", zIndex: 999 }}>
        <div className="flex items-center space-x-4 flex-grow-1">
          <img
            src={getIconImage('house')}
            alt="Bottom House"
            className="w-9 h-9 cursor-pointer"
            onClick={() => handleIconClick('house')}
            style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <img
            src={getIconImage('tree')}
            alt="Bottom Tree"
            className="w-9 h-9 cursor-pointer"
            onClick={() => handleIconClick('tree')}
            style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <img
            src={getIconImage('conversation')}
            alt="Bottom Conversation"
            className="w-9 h-9 cursor-pointer"
            onClick={() => handleIconClick('conversation')}
            style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <img
            src={getIconImage('campaign')}
            alt="Bottom Campaign"
            className="w-9 h-9 cursor-pointer"
            onClick={() => handleIconClick('campaign')}
            style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <img
            src={getIconImage('market')}
            alt="Bottom Market"
            className="w-9 h-9 cursor-pointer"
            onClick={() => handleIconClick('market')}
            style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
