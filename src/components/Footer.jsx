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

function Footer() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    navigate(`/${iconName}`);
  };

  return (
    <header className="flex justify-between items-center p-10" style={{ backgroundColor: "#84A27E" }}>
    <div className="flex items-center space-x-4 flex-grow-1">
        <img
          src={BottomHouse}
          alt="Bottom House"
          className={`w-9 h-9 cursor-pointer ${selectedIcon === 'house' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => handleIconClick('house')}
          style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <img
          src={BottomTree}
          alt="Bottom Tree"
          className={`w-9 h-9 cursor-pointer ${selectedIcon === 'tree' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => handleIconClick('tree')}
          style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <img
          src={BottomConversation}
          alt="Bottom Conversation"
          className={`w-9 h-9 cursor-pointer ${selectedIcon === 'conversation' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => handleIconClick('conversation')}
          style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <img
          src={BottomCampaign}
          alt="Bottom Campaign"
          className={`w-9 h-9 cursor-pointer ${selectedIcon === 'campaign' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => handleIconClick('campaign')}
          style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <img
          src={BottomMarket}
          alt="Bottom Market"
          className={`w-9 h-9 cursor-pointer ${selectedIcon === 'market' ? 'text-blue-500' : 'text-white'}`}
          onClick={() => handleIconClick('market')}
          style={{ marginLeft: '273px', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>
    </header>
  );
}

export default Footer;
