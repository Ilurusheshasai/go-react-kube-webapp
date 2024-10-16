import { RiUserLine } from "react-icons/ri";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { UserInfoProps } from './types';

const UserInfo = ({ name, degree, role }: UserInfoProps) => (
  <div className={`user-info-section ${role.toLowerCase()}-section`}>
    <RiUserLine className="user-icon" />
    <div>
      <p>{role}</p>
      <div className="info">
        <div>
          <p id="name">{name}</p>
          <p id="Degree">{degree}</p>
        </div>
        <IoArrowForwardCircleOutline className="arrow-icon" />
      </div>
    </div>
  </div>
);

export default UserInfo;
