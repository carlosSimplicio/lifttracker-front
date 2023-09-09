import Link from "next/link";
import styles from "./Table.module.css";

type TableProps = {
  title: string;
  columns: {
    key: string;
    title: string;
    isLink?: boolean;
  }[];
  rows: {
    [key: string]: string;
  }[];
};

export default function Table({ columns, rows, title }: TableProps) {
  const gridTemplateColumns = columns.map(() => "1fr").join(" ");

  return (
    <div className={styles["table-outer-container"]}>
      <h3 className={styles["table-title"]}>Seus Macrociclos</h3>
      <div
        className={styles["table-inner-container"]}
        style={{ gridTemplateColumns }}
      >
        {columns.map((column, idx) => (
          <p className={styles["table-column"]} key={idx}>
            {column.title}
          </p>
        ))}
        {rows.flatMap((row) => {
          return columns.map((column) => {
            if (column.isLink) {
              return (
                <p className={styles["table-row"]}>
                  <Link href={row.href}>{row[column.key]}</Link>
                </p>
              );
            }
            return <p className={styles["table-row"]}>{row[column.key]}</p>;
          });
        })}
      </div>
    </div>
  );
}
