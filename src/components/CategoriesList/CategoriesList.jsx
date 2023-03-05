import { Link } from 'react-router-dom';
import css from './CategoriesList.module.scss';
import { itemData } from 'utils/categoriesData';

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
