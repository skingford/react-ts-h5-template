import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
import routers from '../../routers';
import styles from './index.module.scss';
const TabBarView: FC = () => {
  const nav = useNavigate();
  const location = useLocation();
  const tabBars = useRef(routers.find((v) => v.tabBars)?.tabBars);
  const [state, setstate] = useState(
    tabBars.current?.findIndex((v) => v.path === window.location.pathname),
  );
  const OnTabClick = useCallback(
    (index, path) => {
      setstate(index);
      nav(path);
    },
    [nav],
  );
  useEffect(() => {
    setstate(
      tabBars.current?.findIndex((v) => matchPath(v.path, location.pathname)),
    );
  }, [location]);
  const isTabBar =
    tabBars.current?.findIndex((v) => matchPath(v.path, location.pathname)) !==
    -1;
  return (
    <div
      className={`${styles.tabBar} row_center ${
        isTabBar ? styles.in_page : styles.out_page
      }`}>
      {tabBars.current?.map(({ title, path, icon }, index) => (
        <div
          className={`column_center ${styles.tabBarItem} ${
            state === index ? styles.chooseed : ''
          }`}
          key={title}
          onClick={() => {
            OnTabClick(index, path);
          }}>
          <i className={icon} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};
export default memo(TabBarView);
