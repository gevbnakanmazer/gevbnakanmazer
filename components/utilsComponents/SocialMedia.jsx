import {SocialIcon} from 'react-social-icons';


export const SocialMedia = () => {
  return (
    <div className="list-none flex items-center [&>li]:p-2">
      <li>
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/beautysalongayane"
        />
      </li>
      <li>
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/gevbnakanmazer/"
        />
      </li>
    </div>
  );
};
