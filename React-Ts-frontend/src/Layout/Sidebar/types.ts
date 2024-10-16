export interface UserInfoProps {
    name: string;
    degree: string;
    role: string;  // This distinguishes between Mentor and Mentee
  }
  
  export interface Link {
    icon: JSX.Element;
    text: string;
  }
  