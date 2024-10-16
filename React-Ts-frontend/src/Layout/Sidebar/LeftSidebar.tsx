import './left-sidebar.css';
import { MdOutlineDashboard } from 'react-icons/md';
import { GoGoal } from 'react-icons/go';
import { IoMdChatbubbles } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineHub } from 'react-icons/md';
import { GrResources } from 'react-icons/gr';
import { HiUserGroup } from 'react-icons/hi';
import { GoSignOut } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi';

import UserInfo from './UserInfo';
import SidebarLinks from './SidebarLinks';
import { Link } from './types';

const Sidebar = () => {
  const links_in_links_div: Link[] = [
    { icon: <MdOutlineDashboard />, text: 'Dashboard' },
    { icon: <GoGoal />, text: 'My Goals' },
    { icon: <IoMdChatbubbles />, text: 'Inbox' },
    { icon: <IoCalendarOutline />, text: 'Program Schedule' },
    { icon: <MdOutlineHub />, text: 'Community' },
    { icon: <GrResources />, text: 'Resources' },
  ];

  return (
    <div className="sidebar-container">
      {/* Program Info Section */}
      <div className="sidebar-div-program" id='1'>
        <h1>PeerConnect</h1>
        <p><i>University of Maryland Baltimore County</i></p>
      </div>

      {/* Links Section */}
      <SidebarLinks links={links_in_links_div} />

      {/* Group Section */}
      <div className="sidebar-div-mygroup">
        <div className="group-section">
          <HiUserGroup className="group-icon" />
          <p>MyGroup</p>
        </div>
        <div className='group-info-section'>
          {/* Mentor Section */}
          <UserInfo name="John Doe" degree="BS Information Systems" role="Mentor" />

          {/* Mentee Section */}
          <UserInfo name="Jane Smith" degree="BS Information Systems" role="Mentee-buddy" />
        </div>
      </div>

      {/* Misc Section */}
      <div className='misc'>
        <div className='horizontal'><FiExternalLink /><p>Student Portal</p></div>
        <div className='horizontal'><GoSignOut /> <p>Signout</p></div>
      </div>
    </div>
  );
};

export default Sidebar;
