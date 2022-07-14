import styles from "./Pagination.module.css";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  onClick: (e: any) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  onClick,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li className={styles.item} key={number} onClick={onClick}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
