import { Link } from 'react-router-dom';
import css from './CategoriesList.module.scss';

export default function CategoriesList() {
  return (
    <ul className={css.imageList}>
      {itemData.map((item, index) => (
        <li className={css.imgBox} key={index}>
          <Link className={css.linkImage} to={item.link}>
            <img
              className={css.imgCategory}
              src={`${item.img}?w=800&h=300&fit=crop&auto=format`}
              srcSet={`${item.img}?w=800&h=300&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <span className={css.imageText}>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147',
    title: 'electronics',
    link: 'electronics',
  },
  {
    img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427',
    title: 'jewelery',
    link: 'jewelery',
  },
  {
    img: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95',
    title: 'For Her',
    link: 'woman',
  },
  {
    img: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647',
    title: 'For Him',
    link: 'men',
  },
];
