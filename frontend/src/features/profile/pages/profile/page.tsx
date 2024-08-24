import { ErrorPage } from '@src/shared';
import { useGetUserQuery } from '../..';
import { ProfileCategoryContainer, ProfileInfoContainer } from './components';
import style from './style.module.css'

const ProfilePage = () => {
  const { data } = useGetUserQuery();
  if (data && data.process) {
    return (
      <div className={`${style.profilePage}`}>
        <div className={`${style.profileInfosContainer}`}>
          <ProfileInfoContainer />
        </div>
        <div className={`${style.profileCategoriesContainer}`}>
          <ProfileCategoryContainer />
        </div>
      </div>
    )
  } else {
    return (
      <ErrorPage />
    );
  }

};

export default ProfilePage;