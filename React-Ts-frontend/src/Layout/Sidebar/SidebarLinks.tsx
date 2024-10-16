import { Link } from './types';  // Importing Link type for props

const SidebarLinks = ({ links }: { links: Link[] }) => (
  <div className="sidebar-div-links" id='2'>
    {links.map((link, index) => (
      <div key={index} className="sidebar-link">
        <div className="icon-box">{link.icon}</div>
        <span>{link.text}</span>
      </div>
    ))}
  </div>
);

export default SidebarLinks;
